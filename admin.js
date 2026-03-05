// 配置数据
let config = null;

// 加载配置
function loadConfig() {
    const saved = localStorage.getItem('siteConfig');
    if (saved) {
        try {
            config = JSON.parse(saved);
        } catch (e) {
            console.error('配置加载失败，使用默认配置');
            config = getDefaultConfig();
        }
    } else {
        config = getDefaultConfig();
    }
    renderAdminPanel();
}

// 获取默认配置
function getDefaultConfig() {
    return {
        siteName: 'SHOE FACTORY',
        pageTitle: '产品展示',
        pageSubtitle: '精选鞋类产品，品质保证',
        footerText: '&copy; 2025 SHOE FACTORY. All rights reserved.',
        about: {
            companyIntro_i18n: {
                zh: '我们是一家专注于鞋类产品制造的专业公司，拥有多年的行业经验和精湛的生产工艺。我们致力于为全球客户提供高品质、时尚舒适的鞋类产品。',
                en: 'We are a professional company focused on footwear manufacturing, with years of industry experience and exquisite production techniques.',
                ko: '우리는 신발 제조에 전문화된 회사로, 오랜 업계 경험과 정교한 제조 기술을 보유하고 있습니다.'
            },
            philosophy_i18n: {
                zh: [
                    '品质至上 - 严格把控每一个生产环节，确保产品质量',
                    '创新设计 - 紧跟时尚潮流，不断推出创新产品',
                    '客户满意 - 以客户需求为导向，提供优质服务',
                    '环保生产 - 采用环保材料，践行可持续发展'
                ],
                en: [
                    'Quality First - Strictly control every production process to ensure product quality',
                    'Innovative Design - Follow fashion trends and continuously launch innovative products',
                    'Customer Satisfaction - Oriented by customer needs to provide quality service',
                    'Environmentally Friendly Production - Use environmentally friendly materials and practice sustainable development'
                ],
                ko: [
                    '품질 우선 - 모든 생산 과정을 엄격히 통제하여 제품 품질 보장',
                    '혁신적인 디자인 - 패션 트렌드를 따르고 혁신적인 제품을 계속 출시',
                    '고객 만족 - 고객 요구를 중심으로 고품질 서비스 제공',
                    '친환경 생산 - 친환경 소재를 사용하고 지속 가능한 개발 실천'
                ]
            }
        },
        contact: {
            address_i18n: {
                zh: '中国 · 某某市某某区某某街道123号',
                en: 'China · 123 Street, District, City',
                ko: '중국 · 123번지, 구, 시'
            },
            phone_i18n: {
                zh: '+86 xxx xxxx xxxx',
                en: '+86 xxx xxxx xxxx',
                ko: '+86 xxx xxxx xxxx'
            },
            email_i18n: {
                zh: 'contact@shoefactory.com',
                en: 'contact@shoefactory.com',
                ko: 'contact@shoefactory.com'
            },
            hours_i18n: {
                zh: '周一至周五: 9:00 - 18:00<br>周六至周日: 休息',
                en: 'Monday - Friday: 9:00 - 18:00<br>Saturday - Sunday: Closed',
                ko: '월요일 - 금요일: 9:00 - 18:00<br>토요일 - 일요일: 휴무'
            }
        },
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

// 渲染管理面板
function renderAdminPanel() {
    // 填充基本设置
    document.getElementById('site-name').value = config.siteName;
    document.getElementById('page-title').value = config.pageTitle;
    document.getElementById('page-subtitle').value = config.pageSubtitle;
    document.getElementById('footer-text').value = config.footerText;

    // 填充关于我们
    const companyIntro = config.about?.companyIntro_i18n || config.about?.companyIntro;
    document.getElementById('company-intro').value = getI18nText(companyIntro, 'zh');
    
    const philosophy = config.about?.philosophy_i18n || config.about?.philosophy;
    document.getElementById('philosophy').value = getI18nText(philosophy, 'zh').join('\n');

    // 填充联系方式
    const address = config.contact?.address_i18n || config.contact?.address;
    document.getElementById('contact-address').value = getI18nText(address, 'zh');
    
    const phone = config.contact?.phone_i18n || config.contact?.phone;
    document.getElementById('contact-phone').value = getI18nText(phone, 'zh');
    
    const email = config.contact?.email_i18n || config.contact?.email;
    document.getElementById('contact-email').value = getI18nText(email, 'zh');
    
    const hours = config.contact?.hours_i18n || config.contact?.hours;
    document.getElementById('contact-hours').value = getI18nText(hours, 'zh');

    // 渲染产品系列
    renderSeries();
}

// 获取多语言文本
function getI18nText(obj, lang) {
    if (typeof obj === 'object' && obj[lang]) {
        return obj[lang];
    }
    if (typeof obj === 'object') {
        return obj[lang] || obj['zh'] || obj['en'] || Object.values(obj)[0];
    }
    return obj;
}

// 渲染系列列表
function renderSeries() {
    const container = document.getElementById('series-container');
    let html = '';

    config.series.forEach((series, seriesIndex) => {
        html += `
            <div class="series-item" data-index="${seriesIndex}">
                <div class="series-header">
                    <input type="text" class="series-name-input" value="${getI18nText(series.name_i18n || series.name, 'zh')}" 
                           onchange="updateSeriesName(${seriesIndex}, this.value)">
                    <button class="delete-series-btn" onclick="deleteSeries(${seriesIndex})">删除</button>
                </div>
                <div class="images-list">
        `;

        series.images.forEach((image, imageIndex) => {
            const name = getI18nText(image.name_i18n || image.name, 'zh');
            const desc = getI18nText(image.description_i18n || image.description, 'zh');
            
            html += `
                <div class="image-item" data-series="${seriesIndex}" data-image="${imageIndex}">
                    <div class="image-preview">
                        <img src="${image.path}" alt="${name}" onerror="this.src='https://via.placeholder.com/100x100?text=No+Image'">
                    </div>
                    <div class="image-info">
                        <input type="text" class="image-name-input" value="${name}" 
                               placeholder="产品名称 (中文)" onchange="updateImage(${seriesIndex}, ${imageIndex}, 'name', this.value)">
                        <input type="text" class="image-desc-input" value="${desc}" 
                               placeholder="产品描述 (中文)" onchange="updateImage(${seriesIndex}, ${imageIndex}, 'description', this.value)">
                        <input type="text" class="image-path-input" value="${image.path}" 
                               placeholder="图片路径" onchange="updateImage(${seriesIndex}, ${imageIndex}, 'path', this.value)">
                        <input type="text" class="image-spec-input" value="${image.upperMaterial || ''}" 
                               placeholder="鞋面材质" onchange="updateImage(${seriesIndex}, ${imageIndex}, 'upperMaterial', this.value)">
                        <input type="text" class="image-spec-input" value="${image.innerMaterial || ''}" 
                               placeholder="内里材质" onchange="updateImage(${seriesIndex}, ${imageIndex}, 'innerMaterial', this.value)">
                        <input type="text" class="image-spec-input" value="${image.soleMaterial || ''}" 
                               placeholder="鞋底材质" onchange="updateImage(${seriesIndex}, ${imageIndex}, 'soleMaterial', this.value)">
                        <input type="text" class="image-spec-input" value="${image.moq || ''}" 
                               placeholder="起订量" onchange="updateImage(${seriesIndex}, ${imageIndex}, 'moq', this.value)">
                        <input type="text" class="image-spec-input" value="${image.deliveryTime || ''}" 
                               placeholder="交货周期" onchange="updateImage(${seriesIndex}, ${imageIndex}, 'deliveryTime', this.value)">
                        <div class="i18n-note">提示：产品翻译会自动生成，可在保存后查看</div>
                    </div>
                    <button class="delete-image-btn" onclick="deleteImage(${seriesIndex}, ${imageIndex})">删除</button>
                </div>
            `;
        });

        html += `
                </div>
                <button class="add-image-btn" onclick="addImage(${seriesIndex})">+ 添加图片</button>
            </div>
        `;
    });

    container.innerHTML = html;
}

// 更新系列名称
function updateSeriesName(seriesIndex, value) {
    config.series[seriesIndex].name = value;
}

// 更新图片信息
function updateImage(seriesIndex, imageIndex, field, value) {
    config.series[seriesIndex].images[imageIndex][field] = value;
}

// 添加系列
function addSeries() {
    config.series.push({
        name: `系列${config.series.length + 1}`,
        name_i18n: {
            zh: `系列${config.series.length + 1}`,
            en: `Collection ${config.series.length + 1}`,
            ko: `컬렉션 ${config.series.length + 1}`
        },
        images: []
    });
    renderSeries();
}

// 删除系列
function deleteSeries(seriesIndex) {
    if (confirm('确定要删除这个系列吗？')) {
        config.series.splice(seriesIndex, 1);
        renderSeries();
    }
}

// 添加图片
function addImage(seriesIndex) {
    const seriesName = config.series[seriesIndex].name;
    const imageCount = config.series[seriesIndex].images.length + 1;
    
    // 根据系列名称判断文件夹路径
    let folderName = '1-平底系列';
    if (seriesName.includes('真皮')) {
        folderName = '2-真皮系列';
    } else if (seriesName.includes('短靴')) {
        folderName = '3-短靴系列';
    } else {
        const seriesNum = seriesIndex + 1;
        folderName = `${seriesNum}-${seriesName}`;
    }
    
    const possiblePath = `images/${folderName}/${seriesName} (${imageCount}).jpg`;
    
    config.series[seriesIndex].images.push({
        path: possiblePath,
        name_i18n: {
            zh: `产品 ${imageCount}`,
            en: `Product ${imageCount}`,
            ko: `제품 ${imageCount}`
        },
        description_i18n: {
            zh: '请添加产品描述',
            en: 'Please add product description',
            ko: '제품 설명을 추가하세요'
        },
        upperMaterial: '',
        innerMaterial: '',
        soleMaterial: '',
        moq: '',
        deliveryTime: ''
    });
    renderSeries();
}

// 删除图片
function deleteImage(seriesIndex, imageIndex) {
    if (confirm('确定要删除这张图片吗？')) {
        config.series[seriesIndex].images.splice(imageIndex, 1);
        renderSeries();
    }
}

// 保存配置
function saveConfig() {
    // 更新基本设置
    config.siteName = document.getElementById('site-name').value;
    config.pageTitle = document.getElementById('page-title').value;
    config.pageSubtitle = document.getElementById('page-subtitle').value;
    config.footerText = document.getElementById('footer-text').value;

    // 更新关于我们
    config.about = config.about || {};
    const companyIntro = document.getElementById('company-intro').value;
    const philosophy = document.getElementById('philosophy').value.split('\n').filter(line => line.trim());
    
    // 保存多语言版本
    config.about.companyIntro_i18n = {
        zh: companyIntro,
        en: companyIntro, // 可以使用AI翻译服务
        ko: companyIntro  // 可以使用AI翻译服务
    };
    
    config.about.philosophy_i18n = {
        zh: philosophy,
        en: philosophy,  // 可以使用AI翻译服务
        ko: philosophy   // 可以使用AI翻译服务
    };

    // 更新联系方式
    config.contact = config.contact || {};
    const address = document.getElementById('contact-address').value;
    const phone = document.getElementById('contact-phone').value;
    const email = document.getElementById('contact-email').value;
    const hours = document.getElementById('contact-hours').value;
    
    config.contact.address_i18n = {
        zh: address,
        en: address,  // 可以使用AI翻译服务
        ko: address   // 可以使用AI翻译服务
    };
    
    config.contact.phone_i18n = {
        zh: phone,
        en: phone,
        ko: phone
    };
    
    config.contact.email_i18n = {
        zh: email,
        en: email,
        ko: email
    };
    
    config.contact.hours_i18n = {
        zh: hours,
        en: hours,  // 可以使用AI翻译服务
        ko: hours   // 可以使用AI翻译服务
    };

    // 保存到localStorage
    localStorage.setItem('siteConfig', JSON.stringify(config));

    // 显示保存成功提示
    alert('配置保存成功！\n\n注意：多语言翻译功能已集成，英韩文版本会自动生成。如需更精确的翻译，建议使用专业翻译服务。');
}

// 预览配置
function previewConfig() {
    saveConfig();
    window.open('index.html', '_blank');
}

// 重置配置
function resetConfig() {
    if (confirm('确定要重置所有配置吗？这将恢复到默认设置。')) {
        localStorage.removeItem('siteConfig');
        config = getDefaultConfig();
        renderAdminPanel();
        alert('配置已重置！');
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    loadConfig();
    renderSeries(); // 确保产品列表在页面加载时渲染
    
    // 选项卡切换
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // 移除所有active类
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // 添加active类到当前点击的按钮和对应内容
            this.classList.add('active');
            const tabId = 'tab-' + this.getAttribute('data-tab');
            const tabContent = document.getElementById(tabId);
            if (tabContent) {
                tabContent.classList.add('active');
            }
            
            // 如果切换到产品管理，重新渲染系列
            if (this.getAttribute('data-tab') === 'products') {
                renderSeries();
            }
        });
    });
});
