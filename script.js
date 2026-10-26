(() => {
  const buttons = [...document.querySelectorAll('.filter-button')];
  const papers = [...document.querySelectorAll('.paper[data-kind="publication"]')];
  const search = document.querySelector('#paper-search');
  const empty = document.querySelector('#no-results');
  let active = 'all';
  const refresh = () => {
    let visible = 0;
    const query = search.value.trim().toLowerCase();
    for (const paper of papers) {
      const matchYear = active === 'all' || paper.dataset.year === active;
      const matchText = !query || paper.dataset.search.includes(query);
      const show = matchYear && matchText;
      paper.hidden = !show;
      if (show) visible++;
    }
    empty.hidden = visible > 0;
  };
  buttons.forEach(button => button.addEventListener('click', () => {
    active = button.dataset.filter;
    buttons.forEach(b => {
      const selected = b === button;
      b.classList.toggle('is-active', selected);
      b.setAttribute('aria-pressed', String(selected));
    });
    refresh();
  }));
  search.addEventListener('input', refresh);
  document.querySelector('#footer-year').textContent = String(new Date().getFullYear());
})();
