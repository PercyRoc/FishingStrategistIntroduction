// DOM元素
const phoneForm = document.getElementById('phone-form');
const phoneInput = document.getElementById('phone');
const interestBtn = document.getElementById('interest-btn');
const cocreationForm = document.getElementById('cocreation-form');
const suggestionsTextarea = document.getElementById('suggestions');
const feedbackMessage = document.getElementById('feedback-message');
const cocreationMessage = document.getElementById('cocreation-message');

// Formspree URL配置 - 请替换为您自己的Formspree URL
const MAIN_FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID';
const COCREATION_FORMSPREE_URL = 'https://formspree.io/f/YOUR_COCREATION_FORM_ID';

// 手机号码验证正则表达式（中国大陆11位手机号）
const phoneRegex = /^1[3-9]\d{9}$/;

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化滚动动效观察器
    initScrollAnimations();
    
    // 初始化视差效果
    initParallaxEffect();
    
    // 初始化输入框动效
    initInputAnimations();
});

// 滚动动效初始化
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-in');
            }
        });
    }, observerOptions);
    
    // 观察功能卡片
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(-50px)';
        card.style.transition = 'all 0.8s ease-out';
        card.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(card);
    });
    
    // 添加动画类样式
    const style = document.createElement('style');
    style.textContent = `
        .animate-slide-in {
            opacity: 1 !important;
            transform: translateX(0) !important;
        }
        
        .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-slideUp {
            animation: slideUp 1s ease-out forwards;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideUp {
            from { 
                opacity: 0;
                transform: translateY(30px);
            }
            to { 
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// 视差效果初始化
function initParallaxEffect() {
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('section');
        const heroImage = heroSection.querySelector('img');
        
        if (heroImage) {
            const rate = scrolled * -0.5;
            heroImage.style.transform = `translateY(${rate}px)`;
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// 输入框动画初始化
function initInputAnimations() {
    // 手机号输入框
    const phoneInput = document.querySelector('input[name="phone"]');
    if (phoneInput) {
        // 手机号码输入格式化
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, ''); // 只保留数字
            if (value.length > 11) {
                value = value.slice(0, 11);
            }
            e.target.value = value;
        });
        
        // 聚焦动效
        phoneInput.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.parentElement.style.transition = 'transform 0.2s ease-out';
        });
        
        phoneInput.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
        
        // 添加输入时的实时验证提示
        phoneInput.addEventListener('input', function() {
            const phone = this.value.trim();
            const phoneRegex = /^1[3-9]\d{9}$/;
            
            if (phone.length > 0 && phone.length < 11) {
                this.style.borderColor = '#f59e0b'; // 黄色边框
            } else if (phone.length === 11 && phoneRegex.test(phone)) {
                this.style.borderColor = '#10b981'; // 绿色边框
            } else if (phone.length === 11 && !phoneRegex.test(phone)) {
                this.style.borderColor = '#ef4444'; // 红色边框
            } else {
                this.style.borderColor = 'transparent';
            }
        });
    }
    
    // 文本域动效
    const suggestionsTextarea = document.querySelector('textarea[name="suggestion_text"]');
    if (suggestionsTextarea) {
        suggestionsTextarea.addEventListener('focus', function() {
            this.style.transform = 'scale(1.01)';
            this.style.transition = 'transform 0.2s ease-out';
        });
        
        suggestionsTextarea.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
        });
    }
}

// 平滑滚动到指定元素
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 添加一些额外的UI交互增强
document.addEventListener('DOMContentLoaded', function() {
    // 为所有按钮添加点击时的轻微缩放效果
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = '';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // 为表单添加提交时的视觉反馈
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function() {
            const submitButton = this.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.textContent = '提交中...';
                submitButton.disabled = true;
                
                // 添加加载动画
                setTimeout(() => {
                    submitButton.innerHTML = '✓ 已提交';
                    submitButton.style.backgroundColor = '#10b981';
                }, 500);
            }
        });
    });
    
    // 添加页面加载完成的淡入效果
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
}); 