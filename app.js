'use strict';

/**
 * Agregador de Links Semeadores - Script Principal
 */

const THEME_STORAGE_KEY = 'semeadores-theme';

/**
 * Inicialização e controle do Tema (Dark Mode / Light Mode)
 */
const initTheme = () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const metaThemeColor = document.getElementById('meta-theme-color');

    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        try {
            localStorage.setItem(THEME_STORAGE_KEY, theme);
        } catch (e) {
            console.warn('[Tema] Não foi possível salvar no localStorage:', e);
        }

        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', theme === 'light' ? '#F7F7F7' : '#121212');
        }

        if (themeToggleBtn) {
            const nextLabel = theme === 'light' ? 'Alternar para Modo Escuro' : 'Alternar para Modo Claro';
            themeToggleBtn.setAttribute('aria-label', nextLabel);
            themeToggleBtn.setAttribute('title', nextLabel);
        }
    };

    // Lê tema atual já definido ou do localStorage (padrão ao primeiro uso: light)
    let currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    try {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme === 'light' || savedTheme === 'dark') {
            currentTheme = savedTheme;
        }
    } catch (e) {}

    applyTheme(currentTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            applyTheme(newTheme);
        });
    }
};

/**
 * Inicialização dos Botões de Links com feedback tátil/visual
 */
const initButtons = () => {
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

/**
 * Navegação por teclado (Setas Up e Down) e marcação da opção selecionável
 */
const initKeyboardSelection = () => {
    const linkItems = document.querySelectorAll('.link-item');
    const linkButtons = document.querySelectorAll('.link-button');
    if (!linkItems.length) return;

    let selectedIndex = 0;

    const setSelected = (index, shouldFocus = false) => {
        selectedIndex = (index + linkItems.length) % linkItems.length;
        linkItems.forEach((item, i) => {
            if (i === selectedIndex) {
                item.classList.add('selected');
                if (shouldFocus && linkButtons[i]) {
                    linkButtons[i].focus({ preventScroll: true });
                }
            } else {
                item.classList.remove('selected');
            }
        });
    };

    // No desktop, marca a primeira opção como selecionada por padrão
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (isDesktop) {
        setSelected(0, false);
    }

    // Navegação via teclas de seta Up e Down (Desktop)
    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelected(selectedIndex + 1, true);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelected(selectedIndex - 1, true);
        } else if (e.key === 'Enter') {
            const activeEl = document.activeElement;
            const themeToggleBtn = document.getElementById('theme-toggle');
            if (activeEl !== themeToggleBtn) {
                const currentBtn = linkButtons[selectedIndex];
                if (currentBtn && linkItems[selectedIndex].classList.contains('selected')) {
                    currentBtn.click();
                }
            }
        }
    });

    // Atualiza seleção ao passar o mouse
    linkItems.forEach((item, i) => {
        item.addEventListener('mouseenter', () => {
            setSelected(i, false);
        });
    });

    // Mantém sincronizado com navegação por foco (Tab)
    linkButtons.forEach((button, i) => {
        button.addEventListener('focus', () => {
            setSelected(i, false);
        });
    });
};

const initApp = () => {
    initTheme();
    initButtons();
    initKeyboardSelection();
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
        navigator.serviceWorker.register('./sw.js').then(reg => {
            reg.update();
        }).catch(error => {
            console.error('[PWA] Falha no Service Worker:', error);
        });
    });
}
