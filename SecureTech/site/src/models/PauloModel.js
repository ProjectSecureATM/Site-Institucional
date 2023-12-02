var database = require("../database/config")
const util = require('util');

function buscarRamHora(idATM) {

    var instrucaoSql = `
    SELECT Valor,DataRegistro FROM leitura WHERE ATMComp_ID=1 AND APIID = 3 AND Componente_ID = 1 AND ATMComp_ID = ${idATM} order by LeituraID desc limit 10;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function buscarTempoReal(idATM) {

    var instrucaoSql = `
    SELECT Valor,DataRegistro FROM leitura WHERE ATMComp_ID=1 AND APIID = 3 AND Componente_ID = 1 AND ATMComp_ID = ${idATM} order by LeituraID desc limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function buscarMaximo(idATM) {

    var instrucaoSql = `
    SELECT max(Valor) as Valor FROM leitura WHERE ATMComp_ID=1 AND APIID = 3 AND Componente_ID = 1 AND ATMComp_ID = ${idATM};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function buscarMinimo(idATM) {

    var instrucaoSql = `
    SELECT min(Valor) as Valor FROM leitura WHERE ATMComp_ID=1 AND APIID = 3 AND Componente_ID = 1 AND ATMComp_ID = ${idATM};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

module.exports = {
    buscarRamHora,
    buscarTempoReal,
    buscarMinimo,
    buscarMaximo
};