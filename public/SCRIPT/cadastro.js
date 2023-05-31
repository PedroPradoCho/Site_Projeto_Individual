function cadastrar() {
    
    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeCompleto = input_cadastro_nome.value;
    var Username = input_cadastro_username.value;
    var email = input_cadastro_email.value;
    var celular = input_cadastro_celular.value;
    var DtNasc = input_cadastro_dtnasc.value;
    var senha = input_cadastro_senha.value;
    var confirmacaoSenha = input_cadastro_confsenha.value;

    if (nomeCompleto == "" || Username == "" || email == "" || celular == "" || DtNasc == "" || senha == "" || confirmacaoSenha == "") {
            Swal.fire({
            icon: 'error',
            title: 'Campos Vazios',
            text: 'Preencha todos os campos'
          })
        return false;
    }
    else {
        setInterval(1000)
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            
            nomeServer: nomeCompleto,
            usernameServer: Username,
            emailServer: email,
            celularServer: celular,
            dtnascServer: DtNasc,
            senhaServer: senha,
            confsenhaServer: confirmacaoSenha
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            setTimeout(() => {
                window.location = "../quiz.html";
            }, "2000")

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Erro ao cadastrar',
                text: 'Tente novamente!'
              })
        }
    }).catch(function (resposta) {
        console.log(`ERRO: ${resposta}`);
    });

    return false;
}