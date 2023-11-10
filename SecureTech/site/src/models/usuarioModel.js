var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM funcionario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL aaaa: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha, codigo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, codigo);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.

    //código é a fkAgencia?? (Paulo_10/11)
    var instrucao = `
        INSERT INTO usuario (nome, email, senha, fkAgencia) VALUES ('${nome}', '${email}', '${senha}', '${codigo}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarATM(modelo, so, processador, ram, qtdDiscos, fabricante, codigoAgencia) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", modelo, so, processador, ram, qtdDiscos, fabricante, codigoAgencia);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO atm (modelo, so, processador, ram, qtd_discos, fabricante, fkAgenciaATM) VALUES ('${modelo}', '${so}', '${processador}', '${ram}', '${qtdDiscos}', '${fabricante}', '${codigoAgencia}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarAgencia(NAgencia, cep, numero) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", NAgencia, cep, numero);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.

    //Checar campos no banco (não estão coerentes com a modelagem)_Paulo10/11/2023
    var instrucao = `
        INSERT INTO agencia (nAgencia, QtdATM, fkEmpresa) VALUES ('${NAgencia}', '${qtdATM}', '${codigoEmp}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function relatarProblema(nome, sobrenome, email, titulo, detalhe, dataHoraProblema) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, sobrenome, email, titulo, detalhe, dataHoraProblema);
    
    var instrucao = `
        INSERT INTO relatarProblema (nome, sobrenome, email, tituloProblema, descricao, dataHoraProblema) VALUES ('${nome}', '${sobrenome}', '${email}', '${titulo}', '${detalhe}', CURRENT_TIMESTAMP());
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    autenticar,
    cadastrar,
    cadastrarATM,
    cadastrarAgencia,
    relatarProblema
};