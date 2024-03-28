var content = document.querySelector('.content');
content.addEventListener('wheel', function (e) {
  e.preventDefault();
  content.scrollLeft += e.deltaY;
});
function initialize() {
  // fetch current theme from localstorage
  var theme = localStorage.getItem('theme');
  var settingstext = document.getElementById('settingstext');
  var contacttext = document.getElementById('contacttext');
  var contactcontent = document.getElementById('contact-content');
  var settingscontent = document.getElementById('settings-content');
  var share = document.getElementById('share');
  var help = document.getElementById('help');
  var hometext = document.getElementById('hometext');
  var section = document.querySelectorAll('section');
  var select = document.querySelectorAll('select');
  var close = document.querySelectorAll('#close');
  // if theme is dark then set dark theme
  if (theme === 'light') {
    document.body.classList.add('light');
    settingstext.classList.add('light');
    contacttext.classList.add('light');
    contactcontent.classList.add('light');
    settingscontent.classList.add('light');
    share.classList.add('light');
    help.classList.add('light');
    hometext.classList.add('light');
    section.forEach(function (element) {
      element.classList.add('light');
    });
    select.forEach(function (element) {
      element.classList.add('light');
    });
    close.forEach(function (element) {
      element.classList.add('light');
    });
  } else return;
}