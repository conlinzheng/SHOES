// 多语言配置
const i18n = {
    zh: {
        nav: {
            products: '产品列表',
            about: '关于我们',
            contact: '联系方式'
        },
        pageTitle: '产品展示',
        pageSubtitle: '精选鞋类产品，品质保证',
        modal: {
            zoomHint: '点击查看大图',
            contactUs: '联系我们'
        },
        spec: {
            upperMaterial: '鞋面材质',
            innerMaterial: '内里材质',
            soleMaterial: '鞋底材质',
            moq: '起订量',
            deliveryTime: '交货周期'
        },
        default: {
            noImage: '暂无图片',
            noProducts: '暂无产品数据'
        }
    },
    en: {
        nav: {
            products: 'Products',
            about: 'About Us',
            contact: 'Contact'
        },
        pageTitle: 'Product Gallery',
        pageSubtitle: 'Premium footwear, quality guaranteed',
        modal: {
            zoomHint: 'Click to enlarge',
            contactUs: 'Contact Us'
        },
        spec: {
            upperMaterial: 'Upper Material',
            innerMaterial: 'Inner Material',
            soleMaterial: 'Sole Material',
            moq: 'MOQ',
            deliveryTime: 'Delivery Time'
        },
        default: {
            noImage: 'No Image',
            noProducts: 'No Products Available'
        }
    },
    ko: {
        nav: {
            products: '제품 목록',
            about: '회사 소개',
            contact: '연락처'
        },
        pageTitle: '제품 전시',
        pageSubtitle: '프리미엄 신발, 품질 보장',
        modal: {
            zoomHint: '클릭하여 확대',
            contactUs: '문의하기'
        },
        spec: {
            upperMaterial: '상단 소재',
            innerMaterial: '내부 소재',
            soleMaterial: '창底 소재',
            moq: '최소 주문량',
            deliveryTime: '납품 기간'
        },
        default: {
            noImage: '이미지 없음',
            noProducts: '제품 없음'
        }
    }
};

// 当前语言
// 全局变量
let currentLang = 'zh';
let currentOpenProduct = null;
let currentLightboxImages = [];
let currentLightboxIndex = 0;

// 获取默认配置
function getDefaultConfig() {
    return {
        siteName: 'SHOE FACTORY',
        pageTitle: '产品展示',
        pageSubtitle: '精选鞋类产品，品质保证',
        footerText: '&copy; 2025 SHOE FACTORY. All rights reserved.',
        series: [
            {
                name: '平底系列',
                name_i18n: {
                    zh: '平底系列',
                    en: 'Flat Sole Collection',
                    ko: '플랫 솔 컬렉션'
                },
                images: [
                    { 
                        path: 'images/1-平底系列/平底系列 (1).jpg', 
                        name_i18n: {
                            zh: '平底鞋 A',
                            en: 'Flat Shoe A',
                            ko: '플랫 슈즈 A'
                        },
                        description_i18n: {
                            zh: '舒适透气，时尚百搭',
                            en: 'Comfortable, breathable, and versatile',
                            ko: '편안하고 통기성이 좋으며 패션에 맞춤'
                        },
                        upperMaterial: '真皮',
                        innerMaterial: '猪皮',
                        soleMaterial: '橡胶底',
                        moq: '500双',
                        deliveryTime: '30天'
                    },
                    { 
                        path: 'images/1-平底系列/平底系列 (2).jpg', 
                        name_i18n: {
                            zh: '平底鞋 B',
                            en: 'Flat Shoe B',
                            ko: '플랫 슈즈 B'
                        },
                        description_i18n: {
                            zh: '精致工艺，耐穿实用',
                            en: 'Exquisite craftsmanship, durable and practical',
                            ko: '정교한 공예, 내구성이 좋고 실용적'
                        },
                        upperMaterial: '真皮',
                        innerMaterial: '猪皮',
                        soleMaterial: '橡胶底',
                        moq: '500双',
                        deliveryTime: '30天'
                    },
                    { 
                        path: 'images/1-平底系列/平底系列 (3).jpg', 
                        name_i18n: {
                            zh: '平底鞋 C',
                            en: 'Flat Shoe C',
                            ko: '플랫 슈즈 C'
                        },
                        description_i18n: {
                            zh: '优雅设计，品质保证',
                            en: 'Elegant design, quality guaranteed',
                            ko: '우아한 디자인, 품질 보증'
                        },
                        upperMaterial: '真皮',
                        innerMaterial: '猪皮',
                        soleMaterial: '橡胶底',
                        moq: '500双',
                        deliveryTime: '30天'
                    },
                    { 
                        path: 'images/1-平底系列/平底系列 (4).jpg', 
                        name_i18n: {
                            zh: '平底鞋 D',
                            en: 'Flat Shoe D',
                            ko: '플랫 슈즈 D'
                        },
                        description_i18n: {
                            zh: '潮流时尚，舒适体验',
                            en: 'Trendy and fashionable, comfortable experience',
                            ko: '트렌디하고 패션, 편안한 경험'
                        },
                        upperMaterial: '真皮',
                        innerMaterial: '猪皮',
                        soleMaterial: '橡胶底',
                        moq: '500双',
                        deliveryTime: '30天'
                    }
                ]
            },
            {
                name: '真皮系列',
                name_i18n: {
                    zh: '真皮系列',
                    en: 'Genuine Leather Collection',
                    ko: '가죽 컬렉션'
                },
                images: [
                    { 
                        path: 'images/2-真皮系列/系列2 (1).jpg', 
                        name_i18n: {
                            zh: '真皮鞋 A',
                            en: 'Leather Shoe A',
                            ko: '가죽 슈즈 A'
                        },
                        description_i18n: {
                            zh: '创新设计，引领潮流',
                            en: 'Innovative design, leading the trend',
                            ko: '혁신적인 디자인, 트렌드 선도'
                        },
                        upperMaterial: '头层牛皮',
                        innerMaterial: '羊皮',
                        soleMaterial: '真皮底',
                        moq: '300双',
                        deliveryTime: '35天'
                    },
                    { 
                        path: 'images/2-真皮系列/系列2 (2).jpg', 
                        name_i18n: {
                            zh: '真皮鞋 B',
                            en: 'Leather Shoe B',
                            ko: '가죽 슈즈 B'
                        },
                        description_i18n: {
                            zh: '轻便舒适，日常首选',
                            en: 'Lightweight and comfortable, daily favorite',
                            ko: '가볍고 편안함, 일상적인 선택'
                        },
                        upperMaterial: '头层牛皮',
                        innerMaterial: '羊皮',
                        soleMaterial: '真皮底',
                        moq: '300双',
                        deliveryTime: '35天'
                    },
                    { 
                        path: 'images/2-真皮系列/系列2 (3).jpg', 
                        name_i18n: {
                            zh: '真皮鞋 C',
                            en: 'Leather Shoe C',
                            ko: '가죽 슈즈 C'
                        },
                        description_i18n: {
                            zh: '高级材质，精致做工',
                            en: 'Premium materials, exquisite workmanship',
                            ko: '고급 소재, 정교한 공예'
                        },
                        upperMaterial: '头层牛皮',
                        innerMaterial: '羊皮',
                        soleMaterial: '真皮底',
                        moq: '300双',
                        deliveryTime: '35天'
                    },
                    { 
                        path: 'images/2-真皮系列/系列2 (4).jpg', 
                        name_i18n: {
                            zh: '真皮鞋 D',
                            en: 'Leather Shoe D',
                            ko: '가죽 슈즈 D'
                        },
                        description_i18n: {
                            zh: '独特风格，彰显个性',
                            en: 'Unique style, showing personality',
                            ko: '독특한 스타일, 개성 표현'
                        },
                        upperMaterial: '头层牛皮',
                        innerMaterial: '羊皮',
                        soleMaterial: '真皮底',
                        moq: '300双',
                        deliveryTime: '35天'
                    },
                    { 
                        path: 'images/2-真皮系列/系列9.jpg', 
                        name_i18n: {
                            zh: '真皮鞋 E',
                            en: 'Leather Shoe E',
                            ko: '가죽 슈즈 E'
                        },
                        description_i18n: {
                            zh: '经典款式，永恒优雅',
                            en: 'Classic style, timeless elegance',
                            ko: '클래식 스타일, 영원한 우아함'
                        },
                        upperMaterial: '头层牛皮',
                        innerMaterial: '羊皮',
                        soleMaterial: '真皮底',
                        moq: '300双',
                        deliveryTime: '35天'
                    }
                ]
            },
            {
                name: '短靴系列',
                name_i18n: {
                    zh: '短靴系列',
                    en: 'Ankle Boots Collection',
                    ko: '발목 부츠 컬렉션'
                },
                images: [
                    { 
                        path: 'images/3-短靴系列/系列10.jpg', 
                        name_i18n: {
                            zh: '短靴 A',
                            en: 'Ankle Boot A',
                            ko: '발목 부츠 A'
                        },
                        description_i18n: {
                            zh: '时尚百搭，四季皆宜',
                            en: 'Fashionable and versatile, suitable for all seasons',
                            ko: '패션과 범용성, 모든 계절에 적합'
                        },
                        upperMaterial: '牛皮',
                        innerMaterial: '猪皮',
                        soleMaterial: '防滑底',
                        moq: '200双',
                        deliveryTime: '40天'
                    }
                ]
            }
        ]
    };
}

// 网站配置
let siteConfig = getDefaultConfig();

// 获取多语言文本
function getI18nText(obj, lang) {
    if (typeof obj === 'object' && obj[lang]) {
        return obj[lang];
    }
    // 如果没有对应语言，尝试返回中文或第一个可用值
    if (typeof obj === 'object') {
        return obj[lang] || obj['zh'] || obj['en'] || Object.values(obj)[0];
    }
    return obj;
}

// 渲染产品列表
function renderProducts() {
    const container = document.getElementById('product-container');
    if (!container) return;

    // 更新页面基本信息
    const logo = document.querySelector('.logo');
    if (logo) logo.textContent = siteConfig.siteName;
    
    const pageTitle = document.getElementById('page-title');
    if (pageTitle) pageTitle.textContent = siteConfig.pageTitle;
    
    const pageSubtitle = document.getElementById('page-subtitle');
    if (pageSubtitle) pageSubtitle.textContent = siteConfig.pageSubtitle;
    
    const footerText = document.getElementById('footer-text');
    if (footerText) footerText.innerHTML = siteConfig.footerText;

    // 检查是否有产品数据
    if (!siteConfig.series || siteConfig.series.length === 0) {
        container.innerHTML = `<p style="text-align: center; padding: 60px; color: #999;">${getI18nText(i18n[currentLang].default.noProducts)}</p>`;
        return;
    }

    // 生成产品HTML
    let html = '';
    siteConfig.series.forEach((series, seriesIndex) => {
        if (!series.images || series.images.length === 0) {
            return; // 跳过空系列
        }

        // 获取系列名称的多语言文本
        const seriesName = getI18nText(series.name_i18n || series.name, currentLang);

        html += `
            <section class="product-section">
                <h2 class="section-title">${seriesName}</h2>
                <div class="product-grid">
        `;

        series.images.forEach((image, imageIndex) => {
            // 获取产品名称和描述的多语言文本
            const productName = getI18nText(image.name_i18n || image.name, currentLang);
            const productDesc = getI18nText(image.description_i18n || image.description, currentLang);

            html += `
                <div class="product-card" onclick="openProductModal(${seriesIndex}, ${imageIndex})">
                    <div class="product-image">
                        <img src="${image.path}" alt="${productName}" onerror="this.src='https://via.placeholder.com/300x300?text=No+Image'">
                    </div>
                    <div class="product-info">
                        <h3>${productName}</h3>
                        <p>${productDesc}</p>
                    </div>
                </div>
            `;
        });

        html += `
                </div>
            </section>
        `;
    });

    if (html === '') {
        container.innerHTML = `<p style="text-align: center; padding: 60px; color: #999;">${getI18nText(i18n[currentLang].default.noProducts)}</p>`;
    } else {
        container.innerHTML = html;
    }
}

// 打开产品详情弹窗
function openProductModal(seriesIndex, imageIndex) {
    if (!siteConfig.series[seriesIndex] || !siteConfig.series[seriesIndex].images[imageIndex]) {
        console.error('产品数据不存在');
        return;
    }

    const product = siteConfig.series[seriesIndex].images[imageIndex];
    const series = siteConfig.series[seriesIndex];
    
    // 保存当前打开的产品信息，用于灯箱切换
    currentOpenProduct = {
        seriesIndex: seriesIndex,
        imageIndex: imageIndex,
        series: series,
        product: product
    };
    
    // 获取多语言文本
    const seriesName = getI18nText(series.name_i18n || series.name, currentLang);
    const productName = getI18nText(product.name_i18n || product.name, currentLang);
    const productDesc = getI18nText(product.description_i18n || product.description, currentLang);
    
    // 更新弹窗内容
    document.getElementById('modal-main-image').src = product.path;
    document.getElementById('modal-main-image').alt = productName;
    document.getElementById('modal-series').textContent = seriesName;
    document.getElementById('modal-product-name').textContent = productName;
    document.getElementById('modal-description').textContent = productDesc;
    
    // 更新产品规格 - 添加多语言翻译
    const upperMaterial = translateMaterial(product.upperMaterial);
    const innerMaterial = translateMaterial(product.innerMaterial);
    const soleMaterial = translateMaterial(product.soleMaterial);
    const moq = translateMoq(product.moq);
    const deliveryTime = translateDeliveryTime(product.deliveryTime);
    
    document.getElementById('spec-upper').textContent = upperMaterial || '-';
    document.getElementById('spec-inner').textContent = innerMaterial || '-';
    document.getElementById('spec-sole').textContent = soleMaterial || '-';
    document.getElementById('spec-moq').textContent = moq || '-';
    document.getElementById('spec-delivery').textContent = deliveryTime || '-';
    
    // 加载相关图片
    loadRelatedImages(product.path);
    
    // 显示弹窗
    const modal = document.getElementById('product-modal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 翻译材质
function translateMaterial(material) {
    if (!material) return '';
    
    const materialTranslations = {
        zh: {
            '真皮': '真皮',
            '头层牛皮': '头层牛皮',
            '牛皮': '牛皮',
            '羊皮': '羊皮',
            '猪皮': '猪皮',
            '橡胶底': '橡胶底',
            '真皮底': '真皮底',
            '防滑底': '防滑底'
        },
        en: {
            '真皮': 'Genuine Leather',
            '头层牛皮': 'Top-grain Cowhide',
            '牛皮': 'Cowhide',
            '羊皮': 'Sheepskin',
            '猪皮': 'Pigskin',
            '橡胶底': 'Rubber Sole',
            '真皮底': 'Leather Sole',
            '防滑底': 'Anti-slip Sole'
        },
        ko: {
            '真皮': '가죽',
            '头层牛皮': '최상급 소가죽',
            '牛皮': '소가죽',
            '羊皮': '양가죽',
            '猪皮': '돼지가죽',
            '橡胶底': '고무창',
            '真皮底': '가죽창',
            '防滑底': '미끄럼 방지창'
        }
    };
    
    return materialTranslations[currentLang][material] || material;
}

// 翻译起订量
function translateMoq(moq) {
    if (!moq) return '';
    
    const suffixTranslations = {
        zh: '双',
        en: 'pairs',
        ko: '켤레'
    };
    
    // 移除中文单位，添加对应语言的单位
    const numericPart = moq.replace(/[双pairs켤레]/g, '').trim();
    const suffix = suffixTranslations[currentLang] || '双';
    
    return `${numericPart} ${suffix}`;
}

// 翻译交货周期
function translateDeliveryTime(deliveryTime) {
    if (!deliveryTime) return '';
    
    const dayTranslations = {
        zh: '天',
        en: 'days',
        ko: '일'
    };
    
    // 移除中文单位，添加对应语言的单位
    const numericPart = deliveryTime.replace(/[天days일]/g, '').trim();
    const suffix = dayTranslations[currentLang] || '天';
    
    return `${numericPart} ${suffix}`;
}

// 关闭产品详情弹窗
function closeModal() {
    const modal = document.getElementById('product-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 查找相关图片
function findRelatedImages(productPath) {
    const pathParts = productPath.split('/');
    const fileName = pathParts[pathParts.length - 1];
    const baseName = fileName.replace(/\.(jpg|jpeg|png|webp)$/i, '');
    const folderPath = pathParts.slice(0, -1).join('/');
    
    const relatedImages = [
        { path: productPath, name: i18n[currentLang].default.noImage }
    ];
    
    const variants = [
        { suffix: '整体', name_i18n: { zh: '整体图', en: 'Full View', ko: '전체도' } },
        { suffix: '侧视图', name_i18n: { zh: '侧视图', en: 'Side View', ko: '측면도' } },
        { suffix: '俯视图', name_i18n: { zh: '俯视图', en: 'Top View', ko: '상면도' } },
        { suffix: '细节', name_i18n: { zh: '细节图', en: 'Detail View', ko: '디테일도' } },
        { suffix: '后视图', name_i18n: { zh: '后视图', en: 'Back View', ko: '후면도' } }
    ];
    
    variants.forEach(variant => {
        const relatedPath = `${folderPath}/${baseName}${variant.suffix}.jpg`;
        const imageName = getI18nText(variant.name_i18n, currentLang);
        relatedImages.push({
            path: relatedPath,
            name: imageName
        });
    });
    
    return relatedImages;
}

// 加载相关图片到弹窗
function loadRelatedImages(productPath) {
    const gallery = document.getElementById('modal-gallery');
    if (!gallery) return;
    
    const relatedImages = findRelatedImages(productPath);
    
    // 保存相关图片到全局变量，供灯箱使用
    currentLightboxImages = relatedImages.map(img => img.path);
    
    let html = '';
    relatedImages.forEach((img, index) => {
        html += `
            <div class="modal-gallery-item">
                <img src="${img.path}" 
                     alt="${img.name}" 
                     class="gallery-thumb"
                     onclick="changeMainImage('${img.path}')"
                     onerror="this.style.display='none'; this.parentElement.style.display='none'">
                <div class="gallery-thumb-label">${img.name}</div>
            </div>
        `;
    });
    
    gallery.innerHTML = html;
}

// 切换主图
function changeMainImage(src) {
    document.getElementById('modal-main-image').src = src;
}

// 打开灯箱
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    if (lightbox && lightboxImage) {
        lightboxImage.src = src;
        lightbox.style.display = 'flex';
        
        // 设置灯箱图片列表（当前产品的主图 + 相关图片）
        if (currentOpenProduct) {
            const mainImagePath = currentOpenProduct.product.path;
            // 组合主图和相关图片
            currentLightboxImages = [mainImagePath, ...findRelatedImages(mainImagePath).map(img => img.path)];
            currentLightboxIndex = currentLightboxImages.indexOf(src);
        }
        
        updateLightboxCounter();
    }
}

// 关闭灯箱
function closeLightbox(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
    }
}

// 灯箱导航
function navigateLightbox(direction) {
    if (currentLightboxImages.length === 0) return;

    console.log('导航前 - 当前索引:', currentLightboxIndex, '图片数量:', currentLightboxImages.length);

    currentLightboxIndex += direction;

    // 循环切换
    if (currentLightboxIndex < 0) {
        currentLightboxIndex = currentLightboxImages.length - 1;
    } else if (currentLightboxIndex >= currentLightboxImages.length) {
        currentLightboxIndex = 0;
    }

    console.log('导航后 - 新索引:', currentLightboxIndex);

    const lightboxImage = document.getElementById('lightbox-image');
    if (lightboxImage) {
        lightboxImage.src = currentLightboxImages[currentLightboxIndex];
        updateLightboxCounter();
    }
}

// 更新灯箱计数器
function updateLightboxCounter() {
    const counter = document.getElementById('lightbox-counter');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    // 如果只有一张图片，隐藏计数器和导航按钮
    if (currentLightboxImages.length <= 1) {
        if (counter) counter.textContent = '';
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
    } else {
        // 多张图片，显示计数器和导航按钮
        if (counter) {
            counter.textContent = `${currentLightboxIndex + 1} / ${currentLightboxImages.length}`;
        }
        if (prevBtn) prevBtn.style.display = 'block';
        if (nextBtn) nextBtn.style.display = 'block';
    }
}

// 切换语言
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('siteLang', lang);
    applyLanguage();
}

// 应用语言
function applyLanguage() {
    const texts = i18n[currentLang];
    
    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = texts;
        
        for (const k of keys) {
            value = value[k];
            if (!value) break;
        }
        
        if (value) {
            element.textContent = value;
        }
    });
    
    // 更新语言按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLang) {
            btn.classList.add('active');
        }
    });
    
    // 重新渲染产品（会应用多语言）
    renderProducts();
}

// 加载配置
function loadConfig() {
    const saved = localStorage.getItem('siteConfig');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            // 检查是否有series数据，如果没有则使用默认配置
            if (parsed.series && parsed.series.length > 0) {
                siteConfig = parsed;
                console.log('已加载保存的配置');
            } else {
                console.log('保存的配置缺少产品数据，使用默认配置');
                siteConfig = getDefaultConfig();
            }
        } catch (e) {
            console.error('配置加载失败，使用默认配置:', e);
            siteConfig = getDefaultConfig();
        }
    } else {
        console.log('没有保存的配置，使用默认配置');
        siteConfig = getDefaultConfig();
    }
    
    // 加载语言设置
    const savedLang = localStorage.getItem('siteLang');
    if (savedLang) {
        currentLang = savedLang;
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    loadConfig();
    renderProducts();
    applyLanguage();
    
    // 绑定语言切换按钮
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchLanguage(btn.getAttribute('data-lang'));
        });
    });
    
    // 点击弹窗外部关闭
    const modal = document.getElementById('product-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target.id === 'product-modal') {
                closeModal();
            }
        });
    }
    
    // 键盘事件
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
            closeLightbox();
        }
    });
});
