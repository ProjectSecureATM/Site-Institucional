var database = require("../database/config")

function confirmacaoSeguranca(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha);
    var instrucao = `
        SELECT * FROM usuario JOIN nivelAcesso WHERE email = '${email}' AND senha = '${senha}' AND tipo = 2;
    `;
    console.log("Executando a instrução SQL aaaa: \n" + instrucao);
    
    return database.executar(instrucao);
}

module.exports = {
    confirmacaoSeguranca
};
