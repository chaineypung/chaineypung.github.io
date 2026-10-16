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
  document.querySelectorAll('[data-filter-year]').forEach(button => {
    button.addEventListener('click', () => {
      const year = button.dataset.filterYear;
      document.querySelectorAll('[data-filter-year]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
      document.querySelectorAll('.news-list [data-year]').forEach(row => { row.hidden = year !== 'all' && row.dataset.year !== year; });
      document.querySelector('.news-feed').scrollTop = 0;
    });
  });
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
