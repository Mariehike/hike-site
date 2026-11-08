// Barre latérale de hikeapp.fr (08/11/2026) : bouton Menu en haut à gauche, sur toutes les pages.
(function () {
  var bouton = document.querySelector('.tiroir-bouton');
  var tiroir = document.getElementById('tiroir');
  if (!bouton || !tiroir) return;
  var voile = document.querySelector('.tiroir-voile');
  var fermer = tiroir.querySelector('.tiroir-fermer');
  function ouvrir(oui) {
    tiroir.classList.toggle('ouvert', oui);
    tiroir.setAttribute('aria-hidden', oui ? 'false' : 'true');
    bouton.setAttribute('aria-expanded', oui ? 'true' : 'false');
    if (voile) voile.hidden = !oui;
    document.body.classList.toggle('tiroir-ouvert', oui);
    if (oui) fermer.focus(); else bouton.focus({ preventScroll: true });
  }
  bouton.addEventListener('click', function () { ouvrir(true); });
  fermer.addEventListener('click', function () { ouvrir(false); });
  if (voile) voile.addEventListener('click', function () { ouvrir(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && tiroir.classList.contains('ouvert')) ouvrir(false);
  });
  function defile() { document.body.classList.toggle('defile', window.scrollY > 8); }
  window.addEventListener('scroll', defile, { passive: true });
  defile();
})();
