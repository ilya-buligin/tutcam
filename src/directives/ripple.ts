const style = document.createElement('style');
style.textContent = `
@keyframes rippleEffect {
  0% {
    transform: scale(1);
  } 
  100% {
    opacity: 0;
    transform: scale(var(--scale));
  }
}
`;
document.head.appendChild(style);

export default {
  mounted(el: HTMLElement) {
    el.style.position = 'relative';
    el.style.overflow = 'hidden';

    el.addEventListener('mousedown', event => {
      if (el.getAttribute('rippleVisible')) {
        return;
      }
      el.setAttribute('rippleVisible', 'true');

      const x = event.pageX - el.offsetLeft;
      const y = event.pageY - el.offsetTop;
      const w = el.offsetWidth;

      const ripple = document.createElement('span');

      ripple.style.position = 'absolute';
      ripple.style.width = '2px';
      ripple.style.height = '2px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.style.borderRadius = '50%';
      ripple.style.backgroundColor = 'rgba(250, 250, 250, 0.3)';
      ripple.style.animation = 'rippleEffect 0.5s ease-in-out';
      ripple.style.pointerEvents = 'none';
      ripple.style.cursor = 'inherit';
      ripple.style.setProperty('--scale', w.toString());

      el.appendChild(ripple);

      setTimeout(() => {
        ripple?.parentNode?.removeChild(ripple);
        el.setAttribute('rippleVisible', '');
      }, 500);
    });
  }
};
