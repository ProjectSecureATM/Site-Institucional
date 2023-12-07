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
    SELECT SUM(pacotesEnviados) AS total_pacotes, FORMAT(MAX(data_hora), 'yyyy-MM-dd HH:mm:ss') AS hora
            FROM rede
            WHERE fk__ATMAgencia = ${idAgen}
            GROUP BY fk__ATMAgencia, FORMAT(data_hora, 'yyyy-MM-dd HH:00:00')
            ORDER BY FORMAT(MAX(data_hora), 'yyyy-MM-dd HH:00:00') DESC
            OFFSET 0 ROWS FETCH FIRST 3 ROW ONLY;`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}


function atualizarGraficoPacotes(idAgen) {
    
        var instrucaoSql = `
        SELECT SUM(pacotesEnviados) AS total_pacotes, FORMAT(MAX(data_hora), 'yyyy-MM-dd HH:mm:ss') AS hora
            FROM rede
            WHERE fk__ATMAgencia = ${idAgen}
            GROUP BY fk__ATMAgencia, FORMAT(data_hora, 'yyyy-MM-dd HH:00:00')
            ORDER BY FORMAT(MAX(data_hora), 'yyyy-MM-dd HH:00:00') 
            OFFSET 0 ROWS FETCH FIRST 1 ROW ONLY;
`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    
}




function listarIPePacotes() {

    var instrucao = `
    select IP, FORMAT(data_hora, 'yyyy-MM-dd 00:00:00') as hora, pacotesEnviados from rede;
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