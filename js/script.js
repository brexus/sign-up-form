const mediaQuery = window.matchMedia('(max-width: 1000px)');

if (mediaQuery.matches) {
    document.getElementById('form-col-left').classList.remove('mb-25');
}