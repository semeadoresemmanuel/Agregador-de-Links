'use strict';

/**
 * Agregador de Links Semeadores - Script Principal
 */

const initApp = () => {
    const buttons = document.querySelectorAll('.link-button');

    buttons.forEach(button => {
        // Ativa animação de bounce instantaneamente ao tocar/clicar
        button.addEventListener('pointerdown', () => {
            button.classList.add('button-bounce');
        }, { passive: true });

        // Remove a classe de animação após a conclusão da interação
        button.addEventListener('pointerup', () => {
            setTimeout(() => button.classList.remove('button-bounce'), 120);
        }, { passive: true });

        button.addEventListener('pointercancel', () => {
            button.classList.remove('button-bounce');
        }, { passive: true });

        button.addEventListener('pointerleave', () => {
            button.classList.remove('button-bounce');
        }, { passive: true });
    });

    // Limpa animações pendentes ao navegar ou mudar de aba
    const clearAnimations = () => {
        buttons.forEach(button => button.classList.remove('button-bounce'));
    };

    window.addEventListener('pageshow', clearAnimations, { passive: true });
    window.addEventListener('pagehide', clearAnimations, { passive: true });
};

// Registra o Service Worker para suporte PWA offline
const registerServiceWorker = async () => {
    if (!('serviceWorker' in navigator)) return;

    try {
        const registration = await navigator.serviceWorker.register('./sw.js');
        console.log('[PWA] Service Worker registrado com sucesso! Escopo:', registration.scope);
    } catch (error) {
        console.error('[PWA] Falha ao registrar o Service Worker:', error);
    }
};

// Inicialização principal
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

window.addEventListener('load', registerServiceWorker);

