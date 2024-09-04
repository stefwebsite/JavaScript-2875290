const wrapper = document.querySelector('.wrapper');
const inicolink = document.querySelector('.inico-link');
const registrarselink = document.querySelector('.registrarse-link');
const btnpopup = document.querySelector('.btninicio-popup');
const iconclose = document.querySelector('.icon-close');
const loginForm = document.getElementById('loginForm');
const usuarioInput = document.getElementById('usuario');
const contraseñaInput = document.getElementById('contraseña');
const recordarmeCheckbox = document.getElementById('recordarme');
const saludo = document.getElementById('saludo');
const logoutBtn = document.getElementById('btncerrars');

registrarselink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

inicolink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnpopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconclose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

window.addEventListener('load', () => {
    const savedUser = localStorage.getItem('usuario');
    if (savedUser) {
        saludo.innerHTML = `Hola, ${savedUser}`;
        logoutBtn.style.display = 'inline';
    }
});

btncerrars.addEventListener('click', () => {
    localStorage.removeItem('usuario');
    saludo.innerHTML = '';
    btncerrars.style.display = 'none';
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const usuario = usuarioInput.value;
    const contraseña = contraseñaInput.value;
    
    if (recordarmeCheckbox.checked) {
        localStorage.setItem('usuario', usuario);
    }

    saludo.innerHTML = `Hola, ${usuario}`;
    logoutBtn.style.display = 'inline';
    wrapper.classList.remove('active-popup');

});

