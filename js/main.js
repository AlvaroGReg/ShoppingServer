//LOAD INTRO
window.addEventListener('load', function() {
    document.getElementById('mainframe').src = "pages/intro.html";
});

//THEMES

const themeChange = document.getElementById('light-mode')

themeChange.addEventListener('click', toggleTheme)

// function to set a given theme/color-scheme

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme

function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}
// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }
})();