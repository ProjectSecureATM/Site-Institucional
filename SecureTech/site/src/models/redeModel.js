function confirmacaoSeguranca(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
            SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}' AND fkNivelAcesso = 2;
        `;
    console.log("Executando a instrução SQL aaaa: \n" + instrucao);
    return database.executar(instrucao);
}

function graficoPacotes() {

    var instrucaoSql = `
    SELECT data_hora, SUM(pacotesEnviados) AS total_pacotes
    FROM rede
    GROUP BY data_hora
    ORDER BY data_hora;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}


function graficoPacotes_TempMonitoramento() {
    var instrucaoSql = `
    SELECT IP, SUM(pacotesEnviados) AS total_pacotes
    FROM rede
    GROUP BY IP
    ORDER BY total_pacotes DESC;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}


async function listarIPePacotes(idATM) {
    const ATQQuery = `SELECT
        IP,
        SUM(pacotesEnviados) AS total_pacotesATQ,
        CASE WHEN IP = '10.0.2.15' THEN 'Vermelho' ELSE 'Outro' END AS cor
    FROM rede
    GROUP BY IP
    ORDER BY total_pacotesATQ DESC`;  // Corrigir para ORDER BY total_pacotesATQ

    const IPQuery = `SELECT
    IP,
    SUM(pacotesEnviados) AS total_pacotes,
    CASE WHEN IP = '10.0.2.15' THEN 'Vermelho' ELSE 'Outro' END AS cor
FROM rede
WHERE IP != '10.0.2.15'  -- Adicionando a condição para excluir o IP específico
GROUP BY IP
ORDER BY total_pacotes DESC`;

    console.log("Executando as instruções SQL:\n", ATQQuery, IPQuery);

    try {
        const atqResult = await database.executar(ATQQuery);  // Corrigir para ATQQuery
        const ipResult = await database.executar(IPQuery);

        return {
            ATQ: atqResult.total_pacotesATQ || [],  // Corrigir para atqResult
            IP: ipResult.total_pacotes || [],
        };
    } catch (error) {
        console.error(`Erro na obtenção dos dados do sistema: ${error.message}`);
        return {
            ATQ: [],
            IP: [],
        };
    }
}




module.exports = {
    confirmacaoSeguranca,
    graficoPacotes,
    graficoPacotes_TempMonitoramento,
    listarIPePacotes
};