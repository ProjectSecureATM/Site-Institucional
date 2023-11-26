var database = require("../database/config")
const util = require('util');

function coletarRamHora(idATM) {
    console.log("ACESSEI O MODEL Paulo Individual \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",idATM)
    var instrucao = `
        SELECT Valor,DataRegistro FROM leitura WHERE ATMComp_ID=${idATM} AND APIID = 3 AND Componente_ID = 1;
    `;
    console.log("Executando a instrução SQL aaaa: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    coletarRamHora
}