var database = require("../database/config");

// Select que vai buscar os últimos 10 dados capturados
function buscarUltimasMedidas(idAgen, limite_linhas) {

    instrucaoSql = ''

    //Windows server
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT TOP ${limite_linhas} 
        pacotesEnviados, 
        pacotesRecebidos,
        Ping, 
        FORMAT(data_hora, 'HH:mm:ss') AS dataHora
    FROM rede
    WHERE fk__ATMAgencia = ${idAgen}
        AND (qtdPacotesEnviados IS NULL OR qtdPacotesEnviados = '')
    ORDER BY idRede DESC;`;

        //mysql
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT TOP ${limite_linhas} 
        pacotesEnviados, 
        pacotesRecebidos,
        Ping, 
        dataHora
        FROM rede
        WHERE fk__ATMAgencia = ${idAgen}
        AND (qtdPacotesEnviados IS NULL OR qtdPacotesEnviados = '')
        ORDER BY idRede DESC`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


// Select que vai buscar APENAS o ÚLTIMO dado capturado
function buscarMedidasEmTempoReal(idAgen) {

    instrucaoSql = ''

    //Windows server
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT TOP 1
        pacotesEnviados, 
        pacotesRecebidos,
        Ping, 
        FORMAT(data_hora, 'HH:mm:ss') AS dataHora
    FROM rede
    WHERE fk__ATMAgencia = ${idAgen}
        AND (qtdPacotesEnviados IS NULL OR qtdPacotesEnviados = '')
    ORDER BY idRede DESC;`;

    //mysql
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT TOP 1
        pacotesEnviados, 
        pacotesRecebidos,
        Ping, 
        dataHora
        FROM rede
        WHERE fk__ATMAgencia = ${idAgen}
        AND (qtdPacotesEnviados IS NULL OR qtdPacotesEnviados = '')
        ORDER BY idRede DESC`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}