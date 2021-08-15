function classToggle() {
    const nav = document.querySelectorAll('.nav-items')
    nav.forEach(nav => nav.classList.toggle('nav-link-toggle-show'));
}

document.querySelector('.nav-link-toggle').addEventListener('click', classToggle);