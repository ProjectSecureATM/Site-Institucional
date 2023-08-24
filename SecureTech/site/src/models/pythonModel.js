var database = require("../database/config");
function calcularGraph() {
    instrucaoSql = `

    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    calcularGraph
}