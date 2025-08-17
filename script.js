
const container = document.getElementById('container');
const btnCadastrar = document.getElementById('cadastrar');
const btnEntrar = document.getElementById('entrar');


btnCadastrar.addEventListener('click', () => {
    container.classList.add('active');
});


btnEntrar.addEventListener('click', () => {
    container.classList.remove('active');
});
