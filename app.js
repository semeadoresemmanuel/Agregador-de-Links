document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.link-button');
    buttons.forEach(button => {
        // Instantly play bounce animation on click/touch
        button.addEventListener('pointerdown', function() {
            this.classList.add('button-bounce');
        });

        // Remove the animation class once click/touch ends or leaves
        button.addEventListener('pointerup', function() {
            setTimeout(() => {
                this.classList.remove('button-bounce');
            }, 120);
        });

        button.addEventListener('pointercancel', function() {
            this.classList.remove('button-bounce');
        });

        button.addEventListener('pointerleave', function() {
            this.classList.remove('button-bounce');
        });
    });

    // Clean up any lingering animations when navigating away or returning
    const clearAnimations = () => {
        buttons.forEach(button => {
            button.classList.remove('button-bounce');
        });
    };
    window.addEventListener('pageshow', clearAnimations);
    window.addEventListener('pagehide', clearAnimations);
});

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker registrado!', reg.scope))
            .catch(err => console.error('Falha ao registrar SW:', err));
    });
}
