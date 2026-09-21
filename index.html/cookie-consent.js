/* Баннер уведомления об использовании cookie (ст.18 ФЗ-152).
   Показывается при первом заходе, скрывается после согласия и запоминает выбор в localStorage. */
(function () {
  var KEY = 'idisCookieConsent';
  var banner = document.getElementById('cookieBanner');
  if (!banner) return;

  var alreadyAccepted = false;
  try {
    alreadyAccepted = localStorage.getItem(KEY) === '1';
  } catch (e) {}

  if (alreadyAccepted) {
    banner.style.display = 'none';
  } else {
    banner.style.display = 'flex';
  }

  var btn = document.getElementById('cookieAccept');
  if (btn) {
    btn.addEventListener('click', function () {
      try {
        localStorage.setItem(KEY, '1');
      } catch (e) {}
      banner.style.display = 'none';
    });
  }
})();
