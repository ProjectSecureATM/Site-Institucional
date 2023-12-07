var database = require("../database/config")

function logDia(idATM) {

    var instrucaoSql = `
    SELECT COUNT(idLogs) AS quantidade, TIME_FORMAT(NOW(), '%H:%i:%s') AS hora FROM logs where fk_idATM = ${idATM}
				GROUP BY data_hora ORDER BY data_hora DESC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function logHora(idATM) {

    var instrucaoSql = `
    SELECT TIME_FORMAT(NOW(), '%H:%i:%s') AS hora, COUNT(logs.idLogs) AS quantidadeERRO FROM logs
        JOIN mensagem ON logs.idLogs = mensagem.fkLogs
            WHERE logs.fk_idATM = ${idATM} AND mensagem.Mensagem LIKE '%não%'
                GROUP BY data_hora ORDER BY data_hora;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function logTempoReal(idATM) {

    var instrucaoSql = `
    SELECT TOP 10 idLogs, data_hora FROM logs
				WHERE fk_idATM = ${idATM}
					ORDER BY idLogs DESC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function comparacaoLogsSucessoEFalha(idATM) {

    var instrucaoSql = `
    SELECT COUNT(idTipoERRO) AS qtdErrosFalha, Tipo FROM TipoERRO 
    JOIN mensagem ON fkMSG = idMensagem
        JOIN logs ON fkLogs = idLogs
            JOIN ATM ON fk_idATM = ${idATM}
                WHERE fk_idATM = ${idATM}
                AND tipo = 'Usuário falhou na autenticação.'
                GROUP BY Tipo;
                            `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function comparacaoLogsSucessoEFalha2(idATM) {

    var instrucaoSql = `
    SELECT COUNT(idTipoERRO) AS qtdErrosFalha, Tipo FROM TipoERRO 
				JOIN mensagem ON fkMSG = idMensagem
					JOIN logs ON fkLogs = idLogs
						JOIN ATM ON fk_idATM = ${idATM}
							WHERE fk_idATM = ${idATM} GROUP BY Tipo;
                            `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    logDia,
    logHora,
    logTempoReal,
    comparacaoLogsSucessoEFalha
}