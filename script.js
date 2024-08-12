// Função para carregar script dinamicamente
function loadScript(url) {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.head.appendChild(script);
}

// Função para observar quando a seção do formulário entra na visualização
function observeForm() {
    const formSection = document.querySelector('.contact');
    
    const options = {
        root: null, // viewport
        threshold: 0.1 // 10% do elemento visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Carrega o script amp-form quando a seção está visível
                loadScript('https://cdn.ampproject.org/v0/amp-form-0.1.js');
                observer.unobserve(entry.target); // Para de observar após carregar
            }
        });
    }, options);

    observer.observe(formSection); // Começa a observar a seção do formulário
}

// Função para observar quando a seção de analytics entra na visualização
function observeAnalytics() {
    const targetElement = document.querySelector('.hero-content'); // Carrega o script quando a .hero-content estiver visível
    
    const options = {
        root: null, // viewport
        threshold: 0.1 // 10% do elemento visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Carrega o script amp-analytics quando a seção está visível
                loadScript('https://cdn.ampproject.org/v0/amp-analytics-0.1.js');
                observer.unobserve(entry.target); // Para de observar após carregar
            }
        });
    }, options);

    observer.observe(targetElement); // Começa a observar o elemento alvo
}

// Inicia os observadores quando a página carrega
window.addEventListener('DOMContentLoaded', (event) => {
    observeForm();      // Observa o formulário
    observeAnalytics(); // Observa o hero-content para analytics
});