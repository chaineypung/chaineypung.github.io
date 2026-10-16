(() => {
  const menu = document.querySelector('.menu-button');
  const nav = document.querySelector('.nav-links');
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menu.setAttribute('aria-expanded', 'false');
  }));
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          nav.querySelectorAll('a').forEach(a => {
            const selected = a.hash === '#' + entry.target.id;
            a.classList.toggle('active', selected);
            if (selected) a.setAttribute('aria-current', 'location');
            else a.removeAttribute('aria-current');
          });
        }
      });
    }, { rootMargin: '-12% 0px -68% 0px' });
    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
  }
})();
