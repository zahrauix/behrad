
const btn = document.querySelector('.toggle-menu');
const list = document.querySelector('nav ul');


btn.addEventListener('click', () => {
    list.classList.toggle('active');
    btn.classList.toggle('active');
})