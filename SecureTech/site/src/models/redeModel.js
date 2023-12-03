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

function graficoPacotes() {
    var instrucaoSql = `
        SELECT data_hora, SUM(pacotesEnviados) AS total_pacotes
        FROM rede
        GROUP BY data_hora
        ORDER BY data_hora;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
        .then(resultados => {
            // Formatando dados para Chart.js
            const labels = resultados.map(item => item.data_hora);
            const data = resultados.map(item => item.total_pacotes);

            return { labels, data };
        });
}


async function atualizarGraficoPacotes() {
    try {
        // Definindo valores padrão
        var instrucaoSql = `
        SELECT data_hora, SUM(pacotesEnviados) AS total_pacotes
        FROM rede
        GROUP BY data_hora
        ORDER BY data_hora DESC LIMIT 1`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        const resultados = await database.executar(instrucaoSql);

        // Formatando dados para Chart.js
        const labels = resultados.map(item => item.data_hora);
        const data = resultados.map(item => item.total_pacotes);

        return { labels, data };
    } catch (error) {
        console.error(`Erro ao executar instrução SQL: ${error.message}`);
        throw error; // Rejogue o erro para tratamento adequado no controlador
    }
}



function listarIPePacotes() {
    fetch("/rede/listarIPePacotes")
        .then(response => response.json())
        .then(data => {
            const ipDiv = document.getElementById("infoIpDiv");
            ipDiv.innerHTML = ""; // Limpar div existente antes de adicionar novas informações

            data.IP.forEach(item => {
                const newDiv = document.createElement("div");
                newDiv.innerHTML = `<p>IP: ${item.IP} - Pacotes Enviados: ${item.total_pacotes}</p>`;
                newDiv.style.color = (item.cor === 'Vermelho') ? 'red' : 'black'; // Adicione a cor conforme necessário
                ipDiv.appendChild(newDiv);
            });
        })
        .catch(error => {
            console.error("Erro ao obter informações do servidor:", error);
            alert('Erro ao obter informações do servidor.');
        });
}




module.exports = {
    confirmacaoSeguranca,
    graficoPacotes,
    atualizarGraficoPacotes,
    listarIPePacotes
};