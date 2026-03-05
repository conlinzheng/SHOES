// 获取URL参数
function getUrlParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// 查找产品信息
function findProduct(seriesIndex, imageIndex) {
    const saved = localStorage.getItem('siteConfig');
    let config = saved ? JSON.parse(saved) : null;
    
    if (!config || !config.series || !config.series[seriesIndex]) {
        return null;
    }
    
    return config.series[seriesIndex].images[imageIndex];
}

// 查找系列产品相关信息
function findRelatedImages(productPath) {
    // 提取产品的基础名称（不包含扩展名）
    const pathParts = productPath.split('/');
    const fileName = pathParts[pathParts.length - 1];
    const baseName = fileName.replace(/\.(jpg|jpeg|png|webp)$/i, '');
    const folderPath = pathParts.slice(0, -1).join('/');
    
    // 尝试找到相关的图片
    // 例如：系列1 (1).jpg 相关图片可能包括：
    // - 系列1 (1)整体.jpg
    // - 系列1 (1)侧视图.jpg
    // - 系列1 (1)俯视图.jpg
    // - 系列1 (1)细节.jpg
    
    const relatedImages = [
        { path: productPath, name: '主图' }
    ];
    
    // 添加可能的相关图片（这些图片实际需要存在于文件夹中）
    const variants = [
        { suffix: '整体', name: '整体图' },
        { suffix: '侧视图', name: '侧视图' },
        { suffix: '俯视图', name: '俯视图' },
        { suffix: '细节', name: '细节图' },
        { suffix: '后视图', name: '后视图' }
    ];
    
    variants.forEach(variant => {
        const relatedPath = `${folderPath}/${baseName}${variant.suffix}.jpg`;
        relatedImages.push({
            path: relatedPath,
            name: variant.name
        });
    });
    
    return relatedImages;
}

// 打开灯箱
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = src;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// 关闭灯箱
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 键盘事件
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// 加载产品详情
function loadProductDetail() {
    const seriesIndex = parseInt(getUrlParam('series'));
    const imageIndex = parseInt(getUrlParam('image'));
    
    // 加载配置
    const saved = localStorage.getItem('siteConfig');
    let config = saved ? JSON.parse(saved) : null;
    
    if (!config || !config.series || !config.series[seriesIndex]) {
        document.querySelector('.product-detail').innerHTML = '<p>产品信息未找到</p>';
        return;
    }
    
    const series = config.series[seriesIndex];
    const product = series.images[imageIndex];
    
    if (!product) {
        document.querySelector('.product-detail').innerHTML = '<p>产品信息未找到</p>';
        return;
    }
    
    // 更新页面信息
    document.getElementById('main-image').src = product.path;
    document.getElementById('main-image').alt = product.name;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-series').textContent = series.name;
    document.getElementById('product-description').textContent = product.description;
    
    // 更新页脚
    document.getElementById('footer-text').innerHTML = config.footerText || '&copy; 2025 SHOE FACTORY. All rights reserved.';
    
    // 加载相关图片
    loadRelatedImages(product.path);
}

// 加载相关图片
function loadRelatedImages(productPath) {
    const galleryGrid = document.getElementById('gallery-grid');
    const relatedImages = findRelatedImages(productPath);
    
    // 创建图片画廊
    let html = '';
    relatedImages.forEach((img, index) => {
        html += `
            <div class="gallery-item">
                <img src="${img.path}" 
                     alt="${img.name}" 
                     class="gallery-image"
                     onclick="openLightbox('${img.path}')"
                     onerror="this.style.display='none'; this.parentElement.style.display='none'">
                <div class="gallery-label">${img.name}</div>
            </div>
        `;
    });
    
    galleryGrid.innerHTML = html;
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    loadProductDetail();
});
