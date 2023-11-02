function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var opiniao = document.getElementById("opiniao").value;

    if (nome === "" || nome.length < 10) {
        alert("Nome inválido. Deve conter no mínimo 10 caracteres.");
        return;
    }

    if (telefone === "" || telefone.length !== 10) {
        alert("Telefone inválido. Deve conter exatamente 10 caracteres.");
        return;
    }

    // Expressão regular para validar o formato do e-mail
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailRegex.test(email)) {
        alert("E-mail inválido. Por favor, insira um e-mail válido.");
        return;
    }

    if (opiniao === "" || opiniao.length < 10 || opiniao.length > 50) {
        alert("Opinião inválida. Deve conter entre 10 e 50 caracteres.");
        return;
    }

    // Se todas as validações passaram, você pode enviar o formulário aqui
    // document.getElementById("contact-form").submit();
    alert("Formulário enviado com sucesso!");
}
