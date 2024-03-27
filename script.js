const content = document.querySelector('.content');
content.addEventListener('wheel', (e) => {
    e.preventDefault();
    content.scrollLeft += e.deltaY;
});
function initialize() {
    // fetch current theme from localstorage
    const theme = localStorage.getItem('theme');
    const settingstext = document.getElementById('settingstext');
    const contacttext = document.getElementById('contacttext');
    const contactcontent = document.getElementById('contact-content');
    const settingscontent = document.getElementById('settings-content');
    const share = document.getElementById('share');
    const help = document.getElementById('help');
    const hometext = document.getElementById('hometext');
    const section = document.querySelectorAll('section');
    const select = document.querySelectorAll('select');
    const close = document.querySelectorAll('#close');
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
        section.forEach((element) => {
            element.classList.add('light');
        });
        select.forEach((element) => {
            element.classList.add('light');
        });
        close.forEach((element) => {
            element.classList.add('light');
        });
    }
    else return;
}