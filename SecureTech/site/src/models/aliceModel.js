var database = require("../database/config")

function logDia(idATM) {

    var instrucaoSql = `
    SELECT TOP 1 SUM(idLogs) AS quantidadeDIA, FORMAT(data_hora, '%d') AS dia FROM logs WHERE fk_idATM = ${idATM}
				GROUP BY data_hora ORDER BY data_hora DESC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function logHora(idATM) {

    var instrucaoSql = `
    SELECT TOP 1 FORMAT(data_hora, 'HH:00:00') AS hora, SUM(logs.idLogs) AS quantidadeHORA FROM logs
        JOIN mensagem ON logs.idLogs = mensagem.fkLogs
            WHERE logs.fk_idATM = ${idATM} AND mensagem.Mensagem LIKE '%não%'
                GROUP BY data_hora ORDER BY data_hora;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function logTempoReal(idATM) {

    var instrucaoSql = `
    SELECT TOP 10 idLogs, FORMAT(data_hora, 'yyyy-MM-dd HH:mm:ss') as hora FROM logs
				WHERE fk_idATM = ${idATM}
					ORDER BY idLogs DESC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function comparacaoLogsSucessoEFalha(idATM) {
var instrucaoSql = `
SELECT
Tipo,
SUM(CASE WHEN tipo = 'Usuário falhou na autenticação.' THEN 1 ELSE 0 END) AS qtdErrosFalha,
SUM(CASE WHEN tipo = 'Usuário autenticado com sucesso.' THEN 1 ELSE 0 END) AS qtdAcertosFalha
FROM
TipoERRO 
LEFT JOIN mensagem ON fkMSG = idMensagem
LEFT JOIN logs l ON fkLogs = l.idLogs
LEFT JOIN ATM atm ON l.fk_idATM = idATM
WHERE
idATM = ${idATM}
AND (tipo = 'Usuário falhou na autenticação.' OR tipo = 'Usuário autenticado com sucesso.')
GROUP BY
Tipo; `

    console.log("Executando a instrução SQL: \n" + instrucaoSql );
    return database.executar(instrucaoSql );
}

function comparacaoLogsSucessoEFalha2(idATM) {

    var instrucaoSql = `
    SELECT COUNT(idTipoERRO) AS qtdErrosFalha, Tipo FROM TipoERRO 
    JOIN mensagem ON fkMSG = idMensagem
        JOIN logs ON fkLogs = idLogs
            JOIN ATM ON fk_idATM = ${idATM}
                WHERE fk_idATM = ${idATM}
                AND tipo = 'Usuário autenticado com sucesso.'
                GROUP BY Tipo;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    logDia,
    logHora,
    logTempoReal,
    comparacaoLogsSucessoEFalha,
    comparacaoLogsSucessoEFalha2
}