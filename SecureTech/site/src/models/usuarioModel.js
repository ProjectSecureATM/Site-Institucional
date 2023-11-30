var database = require("../database/config")
const util = require('util');

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL aaaa: \n" + instrucao);
    return database.executar(instrucao);
}

function autenticarATM(fkATM) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM Processos WHERE fkATM = '${fkATM}';
    `;
    console.log("Executando a instrução SQL aaaa: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha, idUsuario) {
    console.log("Executando a função de cadastro de usuário...");

    // Inicie a instrução de obtenção da fkEmpUsuario do usuário
    const instrucaoFkEmpUsuario = `SELECT fkEmpUsuario FROM usuario WHERE idUsuario = ${idUsuario}`;

    console.log("Executando a instrução SQL de obtenção de fkEmpUsuario: \n" + instrucaoFkEmpUsuario);

    // Execute a instrução para obter o fkEmpUsuario do usuário
    return database.executar(instrucaoFkEmpUsuario)
        .then((resultados) => {
            // Obtenha o valor de fkEmpUsuario
            const fkEmpUsuario = resultados[0].fkEmpUsuario;

            // Verifique se fkEmpUsuario não é null
            if (fkEmpUsuario === null) {
                throw new Error("Valor de fkEmpUsuario é NULL. Não é possível cadastrar o usuário.");
            }

            // Agora, inicie a instrução de obtenção da fkAgencia do usuário
            const instrucaoFkAgencia = `SELECT fkAgencia FROM usuario WHERE idUsuario = ${idUsuario}`;

            console.log("Executando a instrução SQL de obtenção de fkAgencia: \n" + instrucaoFkAgencia);

            // Execute a instrução para obter o fkAgencia do usuário
            return database.executar(instrucaoFkAgencia)
                .then((resultados) => {
                    // Obtenha o valor de fkAgencia
                    const fkAgencia = resultados[0].fkAgencia;

                    // Verifique se fkAgencia não é null
                    if (fkAgencia === null) {
                        throw new Error("Valor de fkAgencia é NULL. Não é possível cadastrar o usuário.");
                    }

                    // Agora, inicie a instrução de inserção do usuário com fkEmpUsuario e fkAgencia obtidos
                    const instrucao = `
                        INSERT INTO usuario (email, senha, nome, fkAgencia, fkEmpUsuario) 
                        VALUES ('${email}', '${senha}', '${nome}', '${fkAgencia}', '${fkEmpUsuario}');
                    `;

                    console.log("Executando a instrução SQL de cadastro de usuário: \n" + instrucao);

                    // Execute a instrução de inserção do usuário
                    return database.executar(instrucao);
                });
        });
}


function cadastrarATM(modelo, fabricante, fkAgenciaID, fkAgenciaEmp, qtdRAM, qtdDiscos) {

    // Inicie a instrução de inserção da ATM
    const instrucaoATM = `INSERT INTO ATM (Modelo, Fabricante, AgenciaID, fkAgenciaEmp) VALUES ('${modelo}', '${fabricante}', ${fkAgenciaID}, ${fkAgenciaEmp})`;


    // Inicie a instrução de inserção dos componentes

    const instrucaoComponenteRAM = `INSERT INTO Componentes (quantidade, CodigoComponenteID, ATMID, TipoID) VALUES ('${qtdRAM}', 1, ${fkAgenciaID}, 2)`;
    const instrucaoComponenteDisco = `INSERT INTO Componentes (quantidade, CodigoComponenteID, ATMID, TipoID) VALUES ('${qtdDiscos}', 2, ${fkAgenciaID}, 1)`;
    const instrucaoComponenteCPU = `INSERT INTO Componentes (quantidade, CodigoComponenteID, ATMID, TipoID) VALUES (1, 3, ${fkAgenciaID}, 1)`;

    console.log("Executando a instrução SQL de ATM: \n" + instrucaoATM);
    console.log("Instrução Componente RAM:", instrucaoComponenteRAM);
    console.log("Instrução Componente Disco:", instrucaoComponenteDisco);
    console.log("Instrução Componente CPU:", instrucaoComponenteCPU);

    // Execute a instrução de inserção da ATM
    return database.executar(instrucaoATM)
        .then(() => {
            console.log("ATM cadastrada com sucesso. Executando instruções SQL de Componentes: \n", instrucaoComponenteRAM, instrucaoComponenteDisco, instrucaoComponenteCPU);

            // Execute as instruções de inserção dos componentes
            return database.executar(instrucaoComponenteRAM)
                .then(() => database.executar(instrucaoComponenteDisco))
                .then(() => database.executar(instrucaoComponenteCPU));
        });
}


function obterFkEmpresa(consulta) {
    return database.executar(consulta);
}

function cadastrarAgencia(NAgencia, CEP, numero, idUsuario) {
    // Inicie a instrução de obtenção do fkEmpresa do usuário
    const instrucaoFkEmpresa = `SELECT fkEmpUsuario FROM usuario WHERE idUsuario = ${idUsuario}`;

    console.log("Executando a instrução SQL de obtenção de fkEmpresa: \n" + instrucaoFkEmpresa);

    // Execute a instrução para obter o fkEmpresa do usuário
    return database.executar(instrucaoFkEmpresa)
        .then((resultados) => {
            // Obtenha o valor de fkEmpUsuario
            const fkEmpUsuario = resultados[0].fkEmpUsuario;

            // Verifique se fkEmpUsuario não é null
            if (fkEmpUsuario === null) {
                throw new Error("Valor de fkEmpUsuario é NULL. Não é possível cadastrar a agência.");
            }

            // Agora, inicie a instrução de inserção da agência com o fkEmpUsuario obtido
            const instrucaoAgencia = `INSERT INTO agencia (nAgencia, fkEmpresa) VALUES ('${NAgencia}', '${fkEmpUsuario}')`;

            // Inicie a instrução de inserção da localização, usando o mesmo valor de idAgen da inserção anterior
            const instrucaoLocalizacao = `
                INSERT INTO localizacao (cep, numero, fkAgenciaLoc)
                SELECT '${CEP}', '${numero}', idAgen FROM agencia WHERE nAgencia = '${NAgencia}' AND fkEmpresa = '${fkEmpUsuario}'
            `;

            console.log("Executando a instrução SQL de agência: \n" + instrucaoAgencia);

            // Execute a instrução de inserção da agência
            return database.executar(instrucaoAgencia)
                .then(() => {
                    console.log("Agência cadastrada com sucesso. Executando instrução SQL de localização: \n" + instrucaoLocalizacao);

                    // Execute a instrução de inserção da localização
                    return database.executar(instrucaoLocalizacao);
                });
        });
}

function ProcessosPHora(idATM) {

    var instrucaoSql = `
    SELECT MAX(PID) AS quantidade, DATE_FORMAT(data_hora, '%Y-%m-%d %H:00:00') AS hora, fkATM 
    FROM Processos 
    WHERE fkATM = ${idATM}
    GROUP BY DATE_FORMAT(data_hora, '%Y-%m-%d %H:00:00')
    ORDER BY DATE_FORMAT(data_hora, '%Y-%m-%d %H:00:00');`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function ProcessosPHora_tempoReal(idATM) {

    var instrucaoSql = `
    SELECT MAX(PID) AS quantidade, DATE_FORMAT(data_hora, '%Y-%m-%d %H:00:00') AS hora, fkATM 
FROM Processos 
WHERE fkATM = ${idATM}
GROUP BY DATE_FORMAT(data_hora, '%Y-%m-%d %H:00:00')
ORDER BY DATE_FORMAT(data_hora, '%Y-%m-%d %H:00:00') DESC
LIMIT 1;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function TEMPHora(idATM) {

    var instrucaoSql = `
    SELECT MAX(temperatura) AS temp_cpu, DATE_FORMAT(data_hora, '%Y-%m-%d %H:00:00') AS hora, fkATM 
FROM temperaturaCPU 
WHERE fkATM = ${idATM}  
GROUP BY DATE_FORMAT(data_hora, '%Y-%m-%d %H:00:00')
ORDER BY DATE_FORMAT(data_hora, '%Y-%m-%d %H:00:00');`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function TEMP_tempoReal(idATM) {

    var instrucaoSql = `
    SELECT MAX(temperatura) AS temp_cpu, DATE_FORMAT(data_hora, '%Y-%m-%d %H:00:00') AS hora, fkATM 
FROM temperaturaCPU 
WHERE fkATM = ${idATM} 
GROUP BY DATE_FORMAT(data_hora, '%Y-%m-%d %H:00:00')
ORDER BY DATE_FORMAT(data_hora, '%Y-%m-%d %H:00:00');`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function CPUHora(idATM) {

    var instrucaoSql = `
    SELECT MAX(Valor) AS quantidade, DATE_FORMAT(DataRegistro, '%Y-%m-%d %H:00:00') AS hora, ATMComp_ID 
    FROM Leitura 
    WHERE ATMComp_ID = ${idATM} AND Componente_ID = 3 
    GROUP BY DATE_FORMAT(DataRegistro, '%Y-%m-%d %H:00:00');`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function CPU_tempoReal(idATM) {

    var instrucaoSql = `
    SELECT MAX(Valor) AS quantidade, DATE_FORMAT(DataRegistro, '%Y-%m-%d %H:00:00') AS hora, ATMComp_ID 
    FROM Leitura 
    WHERE ATMComp_ID = ${idATM} AND Componente_ID = 3 
    GROUP BY DATE_FORMAT(DataRegistro, '%Y-%m-%d %H:00:00');`;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function VariedadeHoraHora(idATM) {

    var instrucaoSql1 = `
    SELECT MAX(pacotesRecebidos) AS quantidade, DATE_FORMAT(data_hora, '%Y-%m-%d %H:00:00') AS hora, fk__idATM
FROM rede 
WHERE fk__idATM = ${idATM}  
GROUP BY DATE_FORMAT(data_hora, '%Y-%m-%d %H:00:00');`;

    var instrucaoSql2 = `
SELECT MAX(pacotesEnviados) AS quantidade, DATE_FORMAT(data_hora, '%Y-%m-%d %H:00:00') AS hora, ATMComp_ID 
FROM rede 
WHERE ATMComp_ID = ${idATM}  
GROUP BY DATE_FORMAT(data_hora, '%Y-%m-%d %H:00:00');`;


    console.log("Executando a instrução SQL: \n" + instrucaoSql1, instrucaoSql2);
    return database.executar(instrucaoSql1, instrucaoSql2);
}

function Variedade_tempoReal(idATM) {

    var instrucaoSql1 = `
    SELECT MAX(pacotesRecebidos) AS pacotesRecebidos, DATE_FORMAT(data_hora, '%Y-%m-%d %H:00:00') AS hora, fk__idATM
FROM rede 
WHERE fk__idATM = ${idATM}  
GROUP BY DATE_FORMAT(data_hora, '%Y-%m-%d %H:00:00');`;

    var instrucaoSql2 = `
SELECT MAX(pacotesEnviados) AS pacotesEnviados, DATE_FORMAT(data_hora, '%Y-%m-%d %H:00:00') AS hora, ATMComp_ID 
FROM rede 
WHERE ATMComp_ID = ${idATM}  
GROUP BY DATE_FORMAT(data_hora, '%Y-%m-%d %H:00:00');`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql1, instrucaoSql2);
    return database.executar(instrucaoSql1, instrucaoSql2);
}

function relatarProblema(nome, sobrenome, email, titulo, detalhe, dataHoraProblema) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, sobrenome, email, titulo, detalhe, dataHoraProblema);

    var instrucao = `
        INSERT INTO relatarProblema (nome, sobrenome, email, tituloProblema, descricao, dataHoraProblema) VALUES ('${nome}', '${sobrenome}', '${email}', '${titulo}', '${detalhe}', CURRENT_TIMESTAMP());
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function listarATM(fkAgencia_usuario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select * from atm WHERE fkAgenciaEmp = ${fkAgencia_usuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarAgencia(fkAgencia_usuario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select * from Agencia WHERE fkEmpresa = ${fkAgencia_usuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

async function obterMetricasComponentes(idATM) {
    const RAMQuery = `SELECT Valor FROM Leitura WHERE ATMComp_ID = ${idATM} AND Componente_ID = 1 ORDER BY DataRegistro DESC LIMIT 1`;
    const DISCOQuery = `SELECT Valor FROM Leitura WHERE ATMComp_ID = ${idATM} AND Componente_ID = 2 ORDER BY DataRegistro DESC LIMIT 1`;
    const CPUQuery = `SELECT Valor FROM Leitura WHERE ATMComp_ID = ${idATM} AND Componente_ID = 3 ORDER BY DataRegistro DESC LIMIT 1`;

    console.log("Executando as instruções SQL:\n", RAMQuery, DISCOQuery, CPUQuery);

    try {
        const ramResult = await database.executar(RAMQuery);
        const discoResult = await database.executar(DISCOQuery);
        const cpuResult = await database.executar(CPUQuery);

        return {
            RAM: (ramResult && ramResult[0] && ramResult[0].Valor) || 'N/A',
            DISCO: (discoResult && discoResult[0] && discoResult[0].Valor) || 'N/A',
            CPU: (cpuResult && cpuResult[0] && cpuResult[0].Valor) || 'N/A',
        };
    } catch (error) {
        console.error(`Erro na obtenção dos dados do sistema: ${error.message}`);
        return {
            RAM: 'N/A',
            DISCO: 'N/A',
            CPU: 'N/A',
        };
    }
}

async function obterMetricasRede(idATM) {
    const PINGQuery = `SELECT ping FROM rede WHERE fk__idATM = ${idATM} order by data_hora desc limit 1`;
    const DOWNLOADQuery = `SELECT pacotesRecebidos FROM rede WHERE fk__idATM = ${idATM} order by data_hora desc limit 1`;
    const UPLOADQuery = `SELECT pacotesEnviados FROM rede WHERE fk__idATM = ${idATM} order by data_hora desc limit 1`;

    console.log("Executando as instruções SQL:\n", PINGQuery, DOWNLOADQuery, UPLOADQuery);

    try {
        const pingResult = await database.executar(PINGQuery);
        const downloadResult = await database.executar(DOWNLOADQuery);
        const uploadResult = await database.executar(UPLOADQuery);

        return {
            PING: (pingResult && pingResult[0] && pingResult[0].ping) || 'N/A',
            DOWNLOAD: (downloadResult && downloadResult[0] && downloadResult[0].pacotesRecebidos) || 'N/A',
            UPLOAD: (uploadResult && uploadResult[0] && uploadResult[0].pacotesEnviados) || 'N/A',
        };
    } catch (error) {
        console.error(`Erro na obtenção dos dados do sistema: ${error.message}`);
        return {
            PING: 'N/A',
            DOWNLOAD: 'N/A',
            UPLOAD: 'N/A',
        };
    }
}

async function obterDesempenho(idATM) {
    const desempenhoQuery = `
        SELECT
            Leitura.ATMComp_ID,
            ROUND(AVG(CASE WHEN codigocomponentes.idCodComponentes = 1 THEN 100 - Leitura.Valor ELSE NULL END), 2) AS MediaCPU,
            ROUND(AVG(CASE WHEN codigocomponentes.idCodComponentes = 2 THEN 100 - Leitura.Valor ELSE NULL END), 2) AS MediaRAM,
            ROUND(AVG(CASE WHEN codigocomponentes.idCodComponentes = 3 THEN 100 - Leitura.Valor ELSE NULL END), 2) AS MediaDisco,
            COALESCE(ROUND(AVG(100 - Leitura.Valor), 2), 100) AS DesempenhoGeral
        FROM
            Leitura
        JOIN
            codigocomponentes ON Leitura.Componente_ID = codigocomponentes.idCodComponentes
        WHERE
            codigocomponentes.idCodComponentes IN (1, 2, 3)
            AND 
            ATMComp_ID = ${idATM}
        GROUP BY
            Leitura.ATMComp_ID
        ORDER BY 
            Leitura.ATMComp_ID
        DESC LIMIT 1;`;

    console.log("Executando a instrução SQL: \n" + desempenhoQuery);
    try {
        const desempenhoResult = await database.executar(desempenhoQuery);
        return {
            DESEMPENHO: (desempenhoResult && desempenhoResult[0] && desempenhoResult[0].DesempenhoGeral) || 'N/A',
        };
    } catch (error) {
        console.error(`Erro na obtenção de Desempenho Geral: ${error.message}`);
        return {
            DESEMPENHO: 'N/A',
        };
    }
}

async function obterTempoAtv(idATM) {
    const atividadeQuery = `
    SELECT atividade
    FROM tempoAtividade 
    WHERE fk__idATM = ${idATM}
    GROUP BY atividade
    ORDER BY atividade
    DESC LIMIT 1;`;

    console.log("Executando a instrução SQL: \n" + atividadeQuery);
    try {
        const atividadeResult = await database.executar(atividadeQuery);
        return {
            TEMPO: (atividadeResult && atividadeResult[0] && atividadeResult[0].atividade) || 'N/A',
        };
    } catch (error) {
        console.error(`Erro na obtenção de Tempo de Atividade: ${error.message}`);
        return {
            TEMPO: 'N/A',
        };
    }
}

async function obterBotaoInsert(idATM) {
    const botaoInsertQuery = `
    INSERT INTO notificacao(idNotificacao, quantidade, data_hora, fkComp, fkATM) VALUES 
    (null, 1, CURRENT_TIMESTAMP(), 1, ${idATM});`;

    console.log("Executando a instrução SQL: \n" + botaoInsertQuery);

    return database.executar(botaoInsertQuery);
}

async function obterBotao(idATM) {
    const botaoQuery = `
    UPDATE notificacao
    SET quantidade = quantidade + 1,
    data_hora = current_timestamp()
    WHERE fkATM = ${idATM};`;

    console.log("Executando a instrução SQL: \n" + botaoQuery);
    try {
        const botaoResult = await database.executar(botaoQuery);
        return {
            BOTAO: (botaoResult && botaoResult[0] && botaoResult[0].quantidade) || 'N/A',
        };
    } catch (error) {
        console.error(`Erro na obtenção de Tempo de Atividade: ${error.message}`);
        return {
            BOTAO: 'N/A',
        };
    }
}

async function cpuTemperatura(idATM) {
    const cpuTempQuery = `
    SELECT MAX(temperatura) AS temp_cpu, DATE_FORMAT(data_hora, '%Y-%m-%d %H:00:00') AS hora, fkATM 
FROM temperaturaCPU 
WHERE fkATM = ${idATM}  
GROUP BY DATE_FORMAT(data_hora, '%Y-%m-%d %H:00:00')
ORDER BY DATE_FORMAT(data_hora, '%Y-%m-%d %H:00:00');`;

    console.log("Executando a instrução SQL: \n" + cpuTempQuery);
    try {
        const cpuTempResult = await database.executar(cpuTempQuery);
        return {
            CPUTEMP: (cpuTempResult && cpuTempResult[0] && cpuTempResult[0].temp_cpu) || 'N/A',
        };
    } catch (error) {
        console.error(`Erro na obtenção de Tempo de Atividade: ${error.message}`);
        return {
            CPUTEMP: 'N/A',
        };
    }
}





module.exports = {
    autenticar,
    cadastrar,
    cadastrarATM,
    obterFkEmpresa,
    cadastrarAgencia,
    relatarProblema,
    ProcessosPHora,
    ProcessosPHora_tempoReal,
    TEMPHora,
    TEMP_tempoReal,
    CPUHora,
    CPU_tempoReal,
    VariedadeHoraHora,
    Variedade_tempoReal,
    listarATM,
    listarAgencia,
    obterMetricasComponentes,
    obterMetricasRede,
    obterDesempenho,
    obterTempoAtv,
    obterBotaoInsert,
    obterBotao,
    cpuTemperatura
};