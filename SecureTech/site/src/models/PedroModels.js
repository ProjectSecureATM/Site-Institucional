var database = require("../database/config")

function buscar_cpu(idATM){

    var instrucao = `
    SELECT 
        Valor, 
        DATE_FORMAT(DataRegistro,"%h:%m") as DataRegistro
    FROM Leitura
    WHERE Componente_ID = 3;
    `;

    console.log("Executando a instrução sql:" + instrucao);
    return database.executar(instrucao);
}

function buscar_ram(idATM){

    var instrucao = `
    SELECT 
        Valor, 
        DATE_FORMAT(DataRegistro,"%h:%m") as DataRegistro
    FROM Leitura
    WHERE Componente_ID = 1;
    `;

    console.log("Executando a instrução sql:" + instrucao);
    return database.executar(instrucao);
}

function buscar_qtdDispositivos(idATM){

    var instrucao = `
    SELECT COUNT(*) AS Quantidade_USB
FROM (
    SELECT DISTINCT produto, fabricante
    FROM DescricaoComponentes
) AS USB;
    `;

    console.log("Executando a instrução sql:" + instrucao);
    return database.executar(instrucao);
}


function buscar_ListaDispositivos(idATM){

    var instrucao = `
    SELECT produto, fabricante, MIN(dataDia) AS dataDia
FROM DescricaoComponentes
GROUP BY produto, fabricante;
    `;

    console.log("Executando a instrução sql:" + instrucao);
    return database.executar(instrucao);
}

function buscar_ultimoDispositivos(idATM){

    var instrucao = `
    SELECT fabricante, produto, DATE_FORMAT(DataDia, '%Y-%m-%d %H:%i:%s') AS UltimaInsercao
FROM DescricaoComponentes
ORDER BY DataDia DESC
LIMIT 1;
    `;

    console.log("Executando a instrução sql:" + instrucao);
    return database.executar(instrucao);
}




function atualizar_ram(idATM){

    var instrucao = `
    SELECT 
        Valor, 
        DATE_FORMAT(DataRegistro,"%h:%m") as DataRegistro
    FROM Leitura
    WHERE Componente_ID = 1 order by LeituraID DESC limit 1;
    `;

    console.log("Executando a instrução sql:" + instrucao);
    return database.executar(instrucao);
}

function atualizar_cpu(idATM){

    var instrucao = `
    SELECT 
        Valor, 
        DATE_FORMAT(DataRegistro,"%h:%m") as DataRegistro
    FROM Leitura
    WHERE Componente_ID = 3 order by LeituraID DESC limit 1 ;
    `;

    console.log("Executando a instrução sql:" + instrucao);
    return database.executar(instrucao);
}


function atualizar_qtdDispositivos(idATM){

    var instrucao = `
    SELECT COUNT(*) AS Quantidade_USB
FROM (
    SELECT DISTINCT produto, fabricante
    FROM DescricaoComponentes
) AS USB;
    `;

    console.log("Executando a instrução sql:" + instrucao);
    return database.executar(instrucao);
}

function atualizar_ListaDispositivos(idATM){

    var instrucao = `
    SELECT produto, fabricante, MIN(dataDia) AS dataDia
FROM DescricaoComponentes
GROUP BY produto, fabricante;
    `;

    console.log("Executando a instrução sql:" + instrucao);
    return database.executar(instrucao);
}

function atualizar_ultimoDispositivos(idATM){

    var instrucao = `
    SELECT 
    fabricante, 
    produto, 
    DATE_FORMAT(DataDia, '%Y-%m-%d %H:%i:%s') AS UltimaInsercao
FROM DescricaoComponentes
ORDER BY DataDia DESC
LIMIT 1;
    `;

    console.log("Executando a instrução sql:" + instrucao);
    return database.executar(instrucao);
}

module.exports ={
    buscar_cpu,
    atualizar_cpu,
    buscar_ram,
    atualizar_ram,
    buscar_qtdDispositivos,
    atualizar_qtdDispositivos,
    buscar_ListaDispositivos,
    atualizar_ListaDispositivos,
    buscar_ultimoDispositivos,
    atualizar_ultimoDispositivos
}