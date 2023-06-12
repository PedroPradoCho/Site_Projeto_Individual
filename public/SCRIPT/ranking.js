function carregarTop10() {
    fetch("/ranking/buscarDados", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    }).then(function (resposta) {
        
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            resposta.json().then(result => {
                var posicao = 0
                for(var i =0; i < result.length; i++){
                    var tabelas = result[i];
                    posicao++
                    document.getElementById("container").innerHTML += `
                    <div class="tabela">
                        <div class="posicao">
                            <p class="subtitulo">POSICAO</p>
                            <p> ${posicao} </p>
                        </div>
                        <div class="posicao">
                            <p class="subtitulo">VULGO</p>
                            <p>${tabelas.Username}</p>
                        </div>
                        <div class="posicao">
                            <p class="subtitulo">PONTOS</p>
                            <p> ${tabelas.pontos} </p>
                        </div>
                    </div>
                    `
                    console.log(tabelas)
                };
            })

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

    return carregarPorcentagem();
}

function carregarPorcentagem(){
    var Email = sessionStorage.getItem("EMAIL_USUARIO")

    fetch(`/ranking/puxarDados/${Email}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    }).then(function (resposta) {
        
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            resposta.json().then(result => {
                    vezes = 0
                    for(var i =0; i < result.length; i++){
                        var tabelas = result[i]; 
                        vezes++
                        document.getElementById("porcentagem").innerHTML +=`
                        <div class="tabela">
                            <div class="posicao">
                                <p class="subtitulo">TENTATIVAS</p>
                                <p> ${vezes} </p>
                            </div>
                            <div class="posicao">
                                <p class="subtitulo">VULGO</p>
                                <p> ${tabelas.Username} </p>
                            </div>
                            <div class="posicao">
                                <p class="subtitulo">PORCENTAGEM</p>
                                <p> ${tabelas.pontos * 100 / 10}% </p>
                            </div>
                        </div>
                        `
                    }
                });

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