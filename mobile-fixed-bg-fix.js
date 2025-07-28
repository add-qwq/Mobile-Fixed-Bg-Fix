function isMobileDevice() {
    return window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function handleFixedBackgroundCompatibility() {
    if (!isMobileDevice()) return;

    const body = document.body;
    let lastHeight = window.innerHeight;
    let isBackgroundFixed = false;

    const computedStyle = window.getComputedStyle(body);
    if (computedStyle.backgroundAttachment === 'fixed') {
        isBackgroundFixed = true;

        body.style.backgroundAttachment = 'scroll';

        const bgElement = document.createElement('div');
        bgElement.id = 'fixed-background';
        bgElement.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-image: ${computedStyle.backgroundImage};
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: -1;
        will-change: height;
      `;
        document.body.insertBefore(bgElement, document.body.firstChild);
    }

    function updateBackgroundHeight() {
        const currentHeight = window.innerHeight;
        if (Math.abs(currentHeight - lastHeight) > 50) {
            const bgElement = document.getElementById('fixed-background');
            if (bgElement) {
                bgElement.style.height = `${currentHeight}px`;
            }
            lastHeight = currentHeight;
        }
    }

    window.addEventListener('scroll', updateBackgroundHeight);
    window.addEventListener('resize', updateBackgroundHeight);

    updateBackgroundHeight();
}

window.addEventListener('DOMContentLoaded', handleFixedBackgroundCompatibility);
