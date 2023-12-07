var database = require("../database/config")
const util = require('util');

function buscarRamHora(idATM) {
    // SELECT Valor,DataRegistro FROM leitura WHERE ATMComp_ID=1 AND APIID = 4 AND Componente_ID = 1 AND ATMComp_ID = ${idATM} order by LeituraID desc limit 10;`;

    var instrucaoSql = `
    SELECT TOP 10 LEFT(Valor,2) AS Valor, FORMAT(DataRegistro, '%H: %m: %s') as DataRegistro 
    FROM leitura 
    WHERE ATMComp_ID = ${idATM}
    AND APIID = 4 
    AND Componente_ID = 1 
    order by LeituraID desc ;
    `;

    // SELECT TOP 10 Valor, DataRegistro
    // FROM leitura
    // WHERE ATMComp_ID = 1 AND APIID = 4 AND Componente_ID = 1 AND ATMComp_ID = ${idATM}
    // ORDER BY LeituraID DESC;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function buscarTempoReal(idATM) {
    // SELECT Valor,DataRegistro FROM leitura WHERE ATMComp_ID=1 AND APIID = 4 AND Componente_ID = 1 AND ATMComp_ID = ${idATM} order by LeituraID desc limit 1;
    var instrucaoSql = `
    SELECT TOP 1 LEFT(Valor, 2) AS Valor, FORMAT(DataRegistro, '%H : %m : %s') as DataRegistro 
    FROM leitura 
    WHERE ATMComp_ID=${idATM}
    AND APIID = 4 
    AND Componente_ID = 1 
    
    order by LeituraID desc ;
    `;

    // SELECT TOP 1 Valor, DataRegistro
    // FROM leitura
    // WHERE ATMComp_ID = 1 AND APIID = 4 AND Componente_ID = 1 AND ATMComp_ID = ${idATM}
    // ORDER BY LeituraID DESC;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function buscarMaximo(idATM) {
    // SELECT max(Valor) as Valor FROM leitura WHERE ATMComp_ID=1 AND APIID = 4 AND Componente_ID = 1 AND ATMComp_ID = ${idATM};
    var instrucaoSql = `SELECT FORMAT(DataRegistro, 'Dia: %d _ %H : %m : %s ') AS DataRegistro 
    FROM leitura
    WHERE ATMComp_ID = ${idATM} AND APIID = 4 AND Componente_ID = 1 and Valor = (SELECT  max(Valor)
    FROM leitura
    WHERE ATMComp_ID = ${idATM} AND APIID = 4 AND Componente_ID = 1 );
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function buscarMinimo(idATM) {
    // SELECT min(Valor) as Valor FROM leitura WHERE ATMComp_ID=1 AND APIID = 4 AND Componente_ID = 1 AND ATMComp_ID = ${idATM};
    var instrucaoSql = `SELECT  FORMAT(DataRegistro, 'Dia: %d _ %H : %m : %s ') AS DataRegistro 
    FROM leitura
    WHERE ATMComp_ID = ${idATM} AND APIID = 4 AND Componente_ID = 1 AND Valor = (SELECT  min(Valor)
    FROM leitura
    WHERE ATMComp_ID = ${idATM} AND APIID = 4 AND Componente_ID = 1 );
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

module.exports = {
    buscarRamHora,
    buscarTempoReal,
    buscarMaximo,
    buscarMinimo
};