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
    const hometext = document.getElementById('hometext');
    const section = document.querySelectorAll('section');
    // if theme is dark then set dark theme
    if (theme === 'light') {
        document.body.classList.add('light');
        settingstext.classList.add('light');
        contacttext.classList.add('light');
        hometext.classList.add('light');
        section.forEach((element) => {
            element.classList.add('light');
        });
    }
    else return;
}