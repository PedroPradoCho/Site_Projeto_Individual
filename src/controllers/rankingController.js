var rankingModel = require("../models/rankingModel")

function buscarDados(req, res) {

    rankingModel.buscarDados()
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                if (resultado.length > 0) {
                    console.log(resultado);
                    res.json(resultado);
                } else {
                    res.status(204).send("Nenhum dado encontrado");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function puxarDados(req, res) {

    var Email = req.params.EmailServer;

    rankingModel.puxarDados(Email)
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                if (resultado.length > 0) {
                    console.log(resultado);
                    res.json(resultado);
                } else {
                    res.status(204).send("Nenhum dado encontrado");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    buscarDados,
    puxarDados
}