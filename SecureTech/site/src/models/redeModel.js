var database = require("../database/config")
const util = require('util');

function confirmacaoSeguranca(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
            SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}' AND fkNivelAcesso = 2;
        `;
    console.log("Executando a instrução SQL aaaa: \n" + instrucao);
    return database.executar(instrucao);
}

function graficoPacotes(idAgen) {
    var instrucaoSql = `
    SELECT TOP 3 SUM(qtdPacotesEnviados) AS total_pacotes,
       FORMAT(MAX(data_hora), 'yyyy-MM-dd HH') AS hora
FROM rede
WHERE fk__ATMAgencia = ${idAgen}
GROUP BY fk__ATMAgencia, FORMAT(data_hora, 'yyyy-MM-dd HH')
ORDER BY hora DESC;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}


function atualizarGraficoPacotes(idAgen) {

    var instrucaoSql = `
        SELECT TOP 1 SUM(qtdPacotesEnviados) AS total_pacotes,
        FORMAT(MAX(data_hora), 'yyyy-MM-dd HH') AS hora
 FROM rede
 WHERE fk__ATMAgencia = ${idAgen}
 GROUP BY fk__ATMAgencia, FORMAT(data_hora, 'yyyy-MM-dd HH')
 ORDER BY hora DESC;;
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}




function listarIPePacotes() {

    var instrucao = `
    SELECT IP,
    MAX(FORMAT(data_hora, 'yyyy-MM-dd HH:mm:ss')) AS hora,
    SUM(qtdPacotesEnviados) AS pacotesEnviados
FROM rede
WHERE qtdPacotesEnviados IS NOT NULL
GROUP BY IP
ORDER BY hora DESC;
    `;

    console.log("Executando a sua tia");
    return database.executar(instrucao);

}




module.exports = {
    confirmacaoSeguranca,
    graficoPacotes,
    atualizarGraficoPacotes,
    listarIPePacotes
};