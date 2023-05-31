function entrar() {

    var email = email_input.value;
    var senha = senha_input.value;

    if (email == "" || senha == "") {
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

    console.log("FORM LOGIN: ", email);
    console.log("FORM SENHA: ", senha);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: email,
            senhaServer: senha
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.Email;
                sessionStorage.NOME_USUARIO = json.NomeCompleto;
                sessionStorage.ID_USUARIO = json.idUsuario;

                setTimeout(function () {
                    window.location = "../quiz.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {
            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro ao Logar',
                    text: 'Email ou Senha Inválidos'
                  })
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}