const rdTheme = document.querySelector("#rd-theme");

const savedTheme = window.localStorage.getItem('colorTheme')
if(savedTheme == 'light') {
    rdTheme.checked = true;
    document.documentElement.className = 'light';
} else {
    rdTheme.checked = false;
    document.documentElement.className = 'dark';
}


rdTheme.addEventListener("change", function(e) {
    if (this.checked) {
        document.documentElement.className = 'light';
        window.localStorage.setItem('colorTheme', 'light')
    } else {
        document.documentElement.className = 'dark';
        window.localStorage.setItem('colorTheme', 'dark')
    }
});
