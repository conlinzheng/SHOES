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
        about: {
            title: '关于我们',
            subtitle: '专业品质，值得信赖',
            companyTitle: '公司简介',
            philosophyTitle: '我们的理念',
            advantageTitle: '我们的优势',
            exp: '经验丰富',
            expDesc: '多年行业经验，专业团队',
            quality: '品质保证',
            qualityDesc: '严格质量检测体系',
            fast: '快速交付',
            fastDesc: '高效生产，准时发货',
            service: '优质服务',
            serviceDesc: '专业售后支持'
        },
        contact: {
            title: '联系我们',
            subtitle: '期待与您的合作',
            infoTitle: '联系方式',
            address: '公司地址',
            phone: '联系电话',
            email: '电子邮箱',
            hours: '工作时间',
            formTitle: '在线留言',
            name: '姓名',
            emailLabel: '邮箱',
            phoneLabel: '电话',
            message: '留言内容',
            submit: '发送留言'
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
        about: {
            title: 'About Us',
            subtitle: 'Professional quality, trusted',
            companyTitle: 'Company Introduction',
            philosophyTitle: 'Our Philosophy',
            advantageTitle: 'Our Advantages',
            exp: 'Experienced',
            expDesc: 'Years of industry experience, professional team',
            quality: 'Quality Assurance',
            qualityDesc: 'Strict quality control system',
            fast: 'Fast Delivery',
            fastDesc: 'Efficient production, on-time delivery',
            service: 'Premium Service',
            serviceDesc: 'Professional after-sales support'
        },
        contact: {
            title: 'Contact Us',
            subtitle: 'Looking forward to working with you',
            infoTitle: 'Contact Information',
            address: 'Address',
            phone: 'Phone',
            email: 'Email',
            hours: 'Business Hours',
            formTitle: 'Online Message',
            name: 'Name',
            emailLabel: 'Email',
            phoneLabel: 'Phone',
            message: 'Message',
            submit: 'Send Message'
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
        about: {
            title: '회사 소개',
            subtitle: '전문적인 품질, 신뢰할 수 있는',
            companyTitle: '회사 소개',
            philosophyTitle: '우리의 철학',
            advantageTitle: '우리의 장점',
            exp: '경험 풍부',
            expDesc: '오랜 업계 경험, 전문 팀',
            quality: '품질 보증',
            qualityDesc: '엄격한 품질 관리 시스템',
            fast: '빠른 납품',
            fastDesc: '효율적인 생산, 정시 납품',
            service: '프리미엄 서비스',
            serviceDesc: '전문적인 애프터 서비스 지원'
        },
        contact: {
            title: '문의하기',
            subtitle: '귀하와의 협력을 기대합니다',
            infoTitle: '연락 정보',
            address: '주소',
            phone: '전화',
            email: '이메일',
            hours: '영업 시간',
            formTitle: '온라인 문의',
            name: '이름',
            emailLabel: '이메일',
            phoneLabel: '전화',
            message: '메시지',
            submit: '메시지 보내기'
        }
    }
};

// 当前语言
let currentLang = 'zh';

// 网站配置
let siteConfig = {
    siteName: 'SHOE FACTORY',
    pageTitle: '产品展示',
    pageSubtitle: '精选鞋类产品，品质保证',
    footerText: '&copy; 2025 SHOE FACTORY. All rights reserved.',
    about: {
        companyIntro_i18n: {
            zh: '我们是一家专注于鞋类产品制造的专业公司，拥有多年的行业经验和精湛的生产工艺。我们致力于为全球客户提供高品质、时尚舒适的鞋类产品。',
            en: 'We are a professional company focused on footwear manufacturing, with years of industry experience and exquisite production techniques. We are committed to providing high-quality, fashionable, and comfortable footwear products for customers worldwide.',
            ko: '우리는 신발 제조에 전문화된 회사로, 오랜 업계 경험과 정교한 제조 기술을 보유하고 있습니다. 우리는 전 세계 고객에게 고품질, 패션, 편안한 신발 제품을 제공하는 데 전념하고 있습니다.'
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
    }
};

// 获取多语言文本
function getI18nText(obj, lang) {
    console.log('getI18nText调用 - obj:', obj, 'lang:', lang);
    if (typeof obj === 'object' && obj !== null) {
        // 如果是对象，尝试获取对应语言的文本
        if (obj[lang]) {
            console.log('找到', lang, '文本:', obj[lang]);
            return obj[lang];
        }
        // 如果没有找到对应语言，尝试中文
        if (obj['zh']) {
            console.log('使用中文文本:', obj['zh']);
            return obj['zh'];
        }
        // 如果没有中文，尝试英文
        if (obj['en']) {
            console.log('使用英文文本:', obj['en']);
            return obj['en'];
        }
        // 返回第一个可用值
        const firstValue = Object.values(obj)[0];
        console.log('使用第一个值:', firstValue);
        return firstValue;
    }
    console.log('返回原始值:', obj);
    return obj;
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
    
    // 更新配置内容
    updateConfigContent();
}

// 更新配置内容
function updateConfigContent() {
    console.log('===== updateConfigContent 开始 =====');
    console.log('当前语言:', currentLang);
    console.log('siteConfig.about:', siteConfig.about);
    console.log('siteConfig.contact:', siteConfig.contact);

    // 更新网站基本信息
    const logo = document.querySelector('.logo');
    if (logo) logo.textContent = siteConfig.siteName;

    const pageTitle = document.getElementById('page-title');
    if (pageTitle) pageTitle.textContent = getI18nText(siteConfig.pageTitle_i18n || siteConfig.pageTitle, currentLang);

    const pageSubtitle = document.getElementById('page-subtitle');
    if (pageSubtitle) pageSubtitle.textContent = getI18nText(siteConfig.pageSubtitle_i18n || siteConfig.pageSubtitle, currentLang);

    const footerText = document.getElementById('footer-text');
    if (footerText) footerText.innerHTML = siteConfig.footerText;

    // 更新关于我们页面
    const companyIntro = document.getElementById('company-intro');
    console.log('companyIntro元素:', companyIntro);
    if (companyIntro) {
        let introText = '';
        if (siteConfig.about && siteConfig.about.companyIntro_i18n) {
            introText = getI18nText(siteConfig.about.companyIntro_i18n, currentLang);
            console.log('从companyIntro_i18n获取:', introText);
        } else if (siteConfig.about && siteConfig.about.companyIntro) {
            introText = siteConfig.about.companyIntro;
            console.log('从companyIntro获取:', introText);
        }
        companyIntro.textContent = introText || companyIntro.textContent;
        console.log('公司简介已设置:', companyIntro.textContent);
    }

    const philosophyList = document.getElementById('philosophy-list');
    console.log('philosophyList元素:', philosophyList);
    if (philosophyList) {
        let philosophy = [];
        if (siteConfig.about && siteConfig.about.philosophy_i18n) {
            philosophy = getI18nText(siteConfig.about.philosophy_i18n, currentLang);
            console.log('从philosophy_i18n获取:', philosophy);
        } else if (siteConfig.about && siteConfig.about.philosophy) {
            philosophy = siteConfig.about.philosophy;
            console.log('从philosophy获取:', philosophy);
        }

        if (Array.isArray(philosophy) && philosophy.length > 0) {
            philosophyList.innerHTML = philosophy.map(item => {
                const parts = item.split(' - ');
                return `<li><strong>${parts[0]}</strong> - ${parts[1] || ''}</li>`;
            }).join('');
            console.log('理念列表已设置，内容:', philosophyList.innerHTML);
        }
    }

    // 更新联系方式页面
    const contactAddress = document.getElementById('contact-address');
    console.log('contactAddress元素:', contactAddress);
    if (contactAddress) {
        let address = '';
        if (siteConfig.contact && siteConfig.contact.address_i18n) {
            address = getI18nText(siteConfig.contact.address_i18n, currentLang);
            console.log('从address_i18n获取:', address);
        } else if (siteConfig.contact && siteConfig.contact.address) {
            address = siteConfig.contact.address;
            console.log('从address获取:', address);
        }
        contactAddress.innerHTML = address;
        console.log('地址已设置:', contactAddress.innerHTML);
    }

    const contactPhone = document.getElementById('contact-phone');
    if (contactPhone) {
        let phone = '';
        if (siteConfig.contact && siteConfig.contact.phone_i18n) {
            phone = getI18nText(siteConfig.contact.phone_i18n, currentLang);
        } else if (siteConfig.contact && siteConfig.contact.phone) {
            phone = siteConfig.contact.phone;
        }
        contactPhone.textContent = phone;
    }

    const contactEmail = document.getElementById('contact-email');
    if (contactEmail) {
        let email = '';
        if (siteConfig.contact && siteConfig.contact.email_i18n) {
            email = getI18nText(siteConfig.contact.email_i18n, currentLang);
        } else if (siteConfig.contact && siteConfig.contact.email) {
            email = siteConfig.contact.email;
        }
        contactEmail.textContent = email;
    }

    const contactHours = document.getElementById('contact-hours');
    console.log('contactHours元素:', contactHours);
    if (contactHours) {
        let hours = '';
        if (siteConfig.contact && siteConfig.contact.hours_i18n) {
            hours = getI18nText(siteConfig.contact.hours_i18n, currentLang);
            console.log('从hours_i18n获取:', hours);
        } else if (siteConfig.contact && siteConfig.contact.hours) {
            hours = siteConfig.contact.hours;
            console.log('从hours获取:', hours);
        }
        contactHours.innerHTML = hours;
        console.log('工作时间已设置:', contactHours.innerHTML);
    }
    console.log('===== updateConfigContent 结束 =====');
    }
}

// 加载配置
function loadConfig() {
    const saved = localStorage.getItem('siteConfig');
    if (saved) {
        try {
            const savedConfig = JSON.parse(saved);

            // 合并保存的配置和默认配置，确保i18n字段完整
            if (savedConfig.series && savedConfig.series.length > 0) {
                // 如果保存的配置有产品数据，合并配置
                siteConfig = {
                    ...siteConfig,  // 保留默认配置的i18n数据
                    ...savedConfig, // 覆盖其他配置
                    // 确保about和contact的i18n数据保留
                    about: {
                        ...siteConfig.about,
                        ...(savedConfig.about || {})
                    },
                    contact: {
                        ...siteConfig.contact,
                        ...(savedConfig.contact || {})
                    }
                };
                console.log('已加载并合并保存的配置');
            } else {
                console.log('保存的配置缺少产品数据，使用默认配置');
            }
        } catch (e) {
            console.error('配置加载失败，使用默认配置:', e);
        }
    } else {
        console.log('没有保存的配置，使用默认配置');
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
    applyLanguage();
    
    // 绑定语言切换按钮
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchLanguage(btn.getAttribute('data-lang'));
        });
    });
});
