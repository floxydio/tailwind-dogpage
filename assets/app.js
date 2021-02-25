const darkTheme = () => {
    document.body.classList.toggle('dark');
}

let mainNav = document.getElementById('js-menu');

let navbarToggle = document.getElementById('js-navbar-toggle');

navbarToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
}) 