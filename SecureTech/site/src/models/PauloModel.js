function buscarRamHora(idATM) {

    var instrucaoSql = `
    SELECT Valor,DataRegistro FROM leitura WHERE ATMComp_ID=1 AND APIID = 3 AND Componente_ID = 1 AND ATMComp_ID = ${idATM};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

module.exports = {
    buscarRamHora
};