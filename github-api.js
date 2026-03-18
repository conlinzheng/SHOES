class GitHubAPI {
    constructor() {
        this.owner = 'conlinzheng';
        this.repo = 'SHOES';
        this.apiUrl = `https://api.github.com/repos/${this.owner}/${this.repo}`;
        this.token = localStorage.getItem('github_token') || '';
        this.rateLimit = {
            remaining: 60,
            reset: 0
        };
    }

    setToken(token) {
        this.token = token;
        localStorage.setItem('github_token', token);
    }

    getToken() {
        return this.token;
    }

    async fetchDirectory(path) {
        const url = `${this.apiUrl}/contents/${encodeURIComponent(path)}`;
        return this._fetch(url);
    }

    async fetchFile(path) {
        const url = `${this.apiUrl}/contents/${encodeURIComponent(path)}`;
        const response = await this._fetch(url);
        if (response.content) {
            response.content = decodeURIComponent(escape(atob(response.content)));
        }
        return response;
    }

    async commitFile(path, content, message) {
        const url = `${this.apiUrl}/contents/${encodeURIComponent(path)}`;
        
        let sha = '';
        try {
            const existingFile = await this.fetchFile(path);
            sha = existingFile.sha;
        } catch (error) {
        }

        const data = {
            message,
            content: btoa(unescape(encodeURIComponent(content))),
            sha
        };

        return this._fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }

    async _fetch(url, options = {}) {
        if (this.rateLimit.remaining <= 0 && Date.now() < this.rateLimit.reset * 1000) {
            const waitTime = this.rateLimit.reset * 1000 - Date.now() + 1000;
            await this._sleep(waitTime);
        }

        const headers = {
            'Accept': 'application/vnd.github.v3+json',
            ...options.headers
        };

        if (this.token) {
            headers['Authorization'] = `token ${this.token}`;
        }

        let response;
        try {
            response = await fetch(url, {
                ...options,
                headers
            });

            if (response.headers.has('X-RateLimit-Remaining')) {
                this.rateLimit.remaining = parseInt(response.headers.get('X-RateLimit-Remaining'));
                this.rateLimit.reset = parseInt(response.headers.get('X-RateLimit-Reset'));
            }

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || `GitHub API error: ${response.status}`);
            }

            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return await response.json();
            } else {
                return await response.text();
            }
        } catch (error) {
            if (error.message.includes('403') && error.message.includes('rate limit')) {
                const waitTime = this.rateLimit.reset * 1000 - Date.now() + 1000;
                if (waitTime > 0) {
                    await this._sleep(waitTime);
                    return this._fetch(url, options);
                }
            }
            throw error;
        }
    }

    _sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

const githubAPI = new GitHubAPI();
if (typeof module !== 'undefined' && module.exports) {
    module.exports = githubAPI;
} else {
    window.githubAPI = githubAPI;
}