let darkmode = localStorage.getItem('darkmode');
const themeSwitcher = document.getElementById('theme-switcher');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}

if(darkmode === "active") enableDarkmode()

themeSwitcher.addEventListener('click', () =>{
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});