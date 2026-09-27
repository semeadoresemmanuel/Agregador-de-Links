'use strict';

/**
 * Agregador de Links Semeadores - Script Principal
 */

const initApp = () => {
    const buttons = document.querySelectorAll('.link-button');

    buttons.forEach(button => {
        const removeBounce = () => button.classList.remove('button-bounce');

        button.addEventListener('pointerdown', () => {
            button.classList.add('button-bounce');
        }, { passive: true });

        button.addEventListener('pointerup', () => {
            setTimeout(removeBounce, 120);
        }, { passive: true });

        button.addEventListener('pointercancel', removeBounce, { passive: true });
        button.addEventListener('pointerleave', removeBounce, { passive: true });
    });

    const clearAnimations = () => {
        buttons.forEach(button => button.classList.remove('button-bounce'));
    };

    window.addEventListener('pageshow', clearAnimations, { passive: true });
    window.addEventListener('pagehide', clearAnimations, { passive: true });
};

// Inicialização da interface
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// Registro seguro do Service Worker para suporte PWA offline
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(error => {
            console.error('[PWA] Falha no Service Worker:', error);
        });
    });
}
