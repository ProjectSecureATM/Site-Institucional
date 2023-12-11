var database = require("../database/config")



//local
function buscar_cpu(idATM){

    var instrucao = `
    SELECT 
        Valor, 
        DATE_FORMAT(DataRegistro,"%h:%m") as DataRegistro
    FROM Leitura
    WHERE Componente_ID = 3
    AND APIID = 2;
    `;

    console.log("Executando a instrução sql:" + instrucao);
    return database.executar(instrucao);
}

//server
async function buscar_cpu(idATM) {
    try {
        var instrucao = `
            SELECT TOP 5
                Valor, 
                FORMAT(DataRegistro,'hh:mm') as DataRegistro
            FROM Leitura
            WHERE Componente_ID = 3
            AND APIID = 2;
        `;
        
        console.log("Executando a instrução SQL: " + instrucao);
        
        const resultado = await database.executar(instrucao);
        return resultado;
    } catch (error) {
        console.error("Erro ao buscar CPU:", error);
        throw error;
    }
}



//local
function buscar_ram(idATM){

    var instrucao = `
    SELECT 
        Valor, 
        DATE_FORMAT(DataRegistro,"%h:%m") as DataRegistro
    FROM Leitura
    WHERE Componente_ID = 1
    AND APIID = 2;
    `;

    console.log("Executando a instrução sql:" + instrucao);
    return database.executar(instrucao);
}

//server
async function buscar_ram(idATM) {
    try {
        var instrucao = `
            SELECT TOP 5
                Valor, 
                FORMAT(DataRegistro,'hh:mm') as DataRegistro
            FROM Leitura
            WHERE Componente_ID = 1
            AND APIID = 2;
        `;
        
        console.log("Executando a instrução SQL: " + instrucao);
        
        const resultado = await database.executar(instrucao);
        return resultado;
    } catch (error) {
        console.error("Erro ao buscar RAM:", error);
        throw error;
    }
}

//local
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

//server
async function buscar_qtdDispositivos(idATM) {
    try {
        var instrucao = `
            SELECT COUNT(*) AS Quantidade_USB
            FROM (
                SELECT DISTINCT produto, fabricante
                FROM DescricaoComponentes
            ) AS USB;
        `;
        
        console.log("Executando a instrução SQL: " + instrucao);
        
        const resultado = await database.executar(instrucao);
        return resultado;
    } catch (error) {
        console.error("Erro ao buscar quantidade de dispositivos USB:", error);
        throw error;
    }
}



//local
function buscar_ListaDispositivos(idATM){

    var instrucao = `
    SELECT produto, fabricante, MIN(dataDia) AS dataDia
FROM DescricaoComponentes
GROUP BY produto, fabricante;
    `;

    console.log("Executando a instrução sql:" + instrucao);
    return database.executar(instrucao);
}

//server
async function buscar_ListaDispositivos(idATM) {
    try {
        var instrucao = `
            SELECT produto, fabricante, MIN(dataDia) AS dataDia
            FROM DescricaoComponentes
            GROUP BY produto, fabricante;
        `;
        
        console.log("Executando a instrução SQL: " + instrucao);
        
        const resultado = await database.executar(instrucao);
        return resultado;
    } catch (error) {
        console.error("Erro ao buscar lista de dispositivos:", error);
        throw error;
    }
}


//local
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

//server
async function buscar_ultimoDispositivos(idATM) {
    try {
        var instrucao = `
            SELECT top 1 fabricante, produto, FORMAT(DataDia, 'yyyy-MM-dd HH:mm:ss') AS UltimaInsercao
            FROM DescricaoComponentes
            ORDER BY DataDia DESC
            ;
        `;
        
        console.log("Executando a instrução SQL: " + instrucao);
        
        const resultado = await database.executar(instrucao);
        return resultado;
    } catch (error) {
        console.error("Erro ao buscar o último dispositivo inserido:", error);
        throw error;
    }
}


//local
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

//server
async function atualizar_ram(idATM){
    try {
        var instrucao = `
            SELECT TOP 5
                Valor, 
                FORMAT(DataRegistro, 'hh:mm') as DataRegistro
            FROM Leitura
            WHERE Componente_ID = 1
            AND APIID = 2
            ORDER BY LeituraID DESC;
        `;
        
        console.log("Executando a instrução SQL: " + instrucao);
        
        const resultado = await database.executar(instrucao);
        return resultado;
    } catch (error) {
        console.error("Erro ao atualizar RAM:", error);
        throw error;
    }
}



//local
function atualizar_cpu(idATM){

    var instrucao = `
    SELECT TOP 10
        Valor, 
        DATE_FORMAT(DataRegistro,"%h:%m") as DataRegistro
    FROM Leitura
    WHERE Componente_ID = 3
    AND APIID = 2
    order by LeituraID DESC limit 1 ;
    `;

    console.log("Executando a instrução sql:" + instrucao);
    return database.executar(instrucao);
}

//server

async function atualizar_cpu(idATM) {
    try {
        var instrucao = `
            SELECT TOP 10
                Valor, 
                FORMAT(DataRegistro, 'hh:mm') as DataRegistro
            FROM Leitura
            WHERE Componente_ID = 3
            ORDER BY LeituraID DESC;
        `;
        
        console.log("Executando a instrução SQL: " + instrucao);
        
        const resultado = await database.executar(instrucao);
        return resultado;
    } catch (error) {
        console.error("Erro ao atualizar CPU:", error);
        throw error;
    }
}




//local
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

//server
async function atualizar_qtdDispositivos(idATM) {
    try {
        var instrucao = `
            SELECT COUNT(*) AS Quantidade_USB
            FROM (
                SELECT DISTINCT produto, fabricante
                FROM DescricaoComponentes
            ) AS USB;
        `;
        
        console.log("Executando a instrução SQL: " + instrucao);
        
        const resultado = await database.executar(instrucao);
        return resultado;
    } catch (error) {
        console.error("Erro ao atualizar quantidade de dispositivos USB:", error);
        throw error;
    }
}



//local
function atualizar_ListaDispositivos(idATM){

    var instrucao = `
    SELECT produto, fabricante, MIN(dataDia) AS dataDia
FROM DescricaoComponentes
GROUP BY produto, fabricante;
    `;

    console.log("Executando a instrução sql:" + instrucao);
    return database.executar(instrucao);
}

//server
async function atualizar_ListaDispositivos(idATM) {
    try {
        var instrucao = `
            SELECT produto, fabricante, MIN(dataDia) AS dataDia
            FROM DescricaoComponentes
            GROUP BY produto, fabricante;
        `;
        
        console.log("Executando a instrução SQL: " + instrucao);
        
        const resultado = await database.executar(instrucao);
        return resultado;
    } catch (error) {
        console.error("Erro ao atualizar lista de dispositivos:", error);
        throw error;
    }
}




//local
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

//server
async function atualizar_ultimoDispositivos(idATM) {
    try {
        var instrucao = `
            SELECT TOP 1
                fabricante, 
                produto, 
                FORMAT(DataDia, 'yyyy-MM-dd HH:mm:ss') AS UltimaInsercao
            FROM DescricaoComponentes
            ORDER BY DataDia DESC;
        `;
        
        console.log("Executando a instrução SQL: " + instrucao);
        
        const resultado = await database.executar(instrucao);
        return resultado;
    } catch (error) {
        console.error("Erro ao atualizar o último dispositivo inserido:", error);
        throw error;
    }
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