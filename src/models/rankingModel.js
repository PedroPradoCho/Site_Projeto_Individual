var database = require("../database/config")

function buscarDados() {
    var instrucao = `
    select usuario.Username, quiz.pontos from usuario join quiz on  idUsuario = fkUsuario order by pontos desc limit 5
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function puxarDados(Email) {
    var instrucao = `
    select usuario.Username, quiz.pontos from usuario join quiz on idUsuario = fkUsuario where Email = "${Email}"
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscarDados,
    puxarDados
};