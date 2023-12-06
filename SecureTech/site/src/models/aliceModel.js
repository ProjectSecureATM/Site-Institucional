var database = require("../database/config")

<<<<<<< HEAD
function logTempoReal (idATM){
    
    var instrucaoSql = `
    SELECT idLogs, data_hora FROM logs
        ORDER BY idLogs DESC 
            LIMIT 10;`;
=======
function logDia(idATM) {

    var instrucaoSql = `
    SELECT COUNT(idLogs) AS quantidade, FORMAT(data_hora, '%H:%i:%s') AS hora FROM logs where fk_idATM = ${idATM}
				GROUP BY data_hora ORDER BY data_hora DESC;
    `;
>>>>>>> 2dcba58aa6961ecd0dc115fef0fca07d9286f371

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

<<<<<<< HEAD
function comparacaoLogsSucessoEFalha(idATM){
    
    var instrucaoSql = `
    SELECT Tipo, COUNT(*) AS qtdErros FROM TipoERRO GROUP BY Tipo;`;
=======
function logHora(idATM) {

    var instrucaoSql = `
    SELECT FORMAT(data_hora, '%H:%i:%s') AS hora, COUNT(logs.idLogs) AS quantidadeERRO FROM logs
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
    SELECT COUNT(idTipoERRO) AS qtdErros, Tipo FROM TipoErro 
				JOIN mensagem ON fkMSG = idMensagem
					JOIN logs ON fkLogs = idLogs
						JOIN ATM ON fk_idATM = idATM
							WHERE fk_idATM = ${idATM} GROUP BY Tipo;
                            `;
>>>>>>> 2dcba58aa6961ecd0dc115fef0fca07d9286f371

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
<<<<<<< HEAD
=======
    logDia,
    logHora,
>>>>>>> 2dcba58aa6961ecd0dc115fef0fca07d9286f371
    logTempoReal,
    comparacaoLogsSucessoEFalha
}