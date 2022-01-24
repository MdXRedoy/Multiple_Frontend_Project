const open_btn = document.querySelector('.open_btn');
const close_btn = document.querySelector('.close_btn');
const nav = document.querySelectorAll('.nav');

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => {nav_el.classList.add('visible') });
});

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => {nav_el.classList.remove('visible') });
});

const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});