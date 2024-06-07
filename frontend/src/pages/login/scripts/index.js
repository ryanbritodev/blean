const loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email === 'fiap@fiap.com' && password === 'fiap123') {
        alert('Login efetuado');
        window.location.replace("/blean/frontend/src/pages/statistcs/index.html");
    } else {
        alert('Usuário não encontrado');
        alert('Para logar, use o email: fiap@fiap.com e a senha: fiap123')
    }
  })
