var database = require("../database/config");

function coletaAlertaRamAmarelo(fkEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT * FROM leitura JOIN atm ON leitura.ATMComp_ID = ATM.idATM WHERE Componente_ID = 1 AND Valor > 65 AND Valor < 80;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function coletaAlertaCpuAmarelo(fkEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT * FROM leitura JOIN atm ON leitura.ATMComp_ID = ATM.idATM WHERE Componente_ID = 3 AND Valor > 40 AND Valor < 55;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function coletaAlertaDiscoAmarelo(fkEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT * FROM leitura JOIN atm ON leitura.ATMComp_ID = ATM.idATM WHERE Componente_ID = 2 AND Valor > 70 AND Valor < 85;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function coletaAlertaRamVer(fkhoEelmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT * FROM leitura JOIN atm ON leitura.ATMComp_ID = ATM.idATM WHERE Componente_ID = 1 AND Valor > =680
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function coletaAlertaCpu(VermelhofkEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT * FROM leitura JOIN atm ON leitura.ATMComp_ID = ATM.idATM WHERE Componente_ID = 3 AND Valor > =455
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function coletaAlertaDisco(VermelhofkEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT * FROM leitura JOIN atm ON leitura.ATMComp_ID = ATM.idATM WHERE Componente_ID = 2 AND Valor > =785
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    ccoletaAlertaRamAmarelo,
    coletaAlertaCpuAmarelo,
    coletaAlertaDiscoAmarelo,
    coletaAlertaRamVermelho,
    coletaAlertaCpuVermelho,
    coletaAlertaDiscoVermelho
}m