(() => {
  try {
    const saved = window.localStorage.getItem('cdqc-language');
    if (saved !== 'FR' && saved !== '中') return;
    document.documentElement.setAttribute('data-language-pending', saved);
    window.setTimeout(() => document.documentElement.removeAttribute('data-language-pending'), 3000);
  } catch {
    document.documentElement.removeAttribute('data-language-pending');
  }
})();
