var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var codigo = req.body.codigoServer
    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }else if (codigo == undefined) {
        res.status(400).send("Seu código está undefined!");
    }else  {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, codigo)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarATM(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var modelo = req.body.modeloServer;
    var so = req.body.soServer;
    var processador = req.body.processadorServer;
    var ram = req.body.ramServer;
    var qtdDiscos = req.body.qtdDiscosServer;
    var fabricante = req.body.fabricanteServer;
    var codigoAgencia = req.body.codigoAgenciaServer
    // Faça as validações dos valores
    if (modelo == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (so == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (processador == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }else if (ram == undefined) {
        res.status(400).send("Seu código está undefined!");
    }else if (qtdDiscos == undefined) {
        res.status(400).send("Seu código está undefined!");
    }else if (fabricante == undefined) {
        res.status(400).send("Seu código está undefined!");
    }else if (codigoAgencia == undefined) {
        res.status(400).send("Seu código está undefined!");
    }else  {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarATM(modelo, so, processador, ram, qtdDiscos, fabricante, codigoAgencia)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro do ATM! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarAgencia(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var NAgencia = req.body.NAgenciaServer;
    var qtdATM = req.body.qtdATMServer;
    var codigoEmp = req.body.codigoEmpServer;
    // Faça as validações dos valores
    if (NAgencia == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (qtdATM == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (codigoEmp == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }else  {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarAgencia(NAgencia, qtdATM, codigoEmp)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro da Agência! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function relatarProblema(req, res) {
    var nome = req.body.nomeServer
    var email = req.body.emailServer
    var titulo = req.body.tituloServer
    var detalhe = req.body.detalheServer
    var dataHoraProblema = req.body.dataHoraProblemaServer

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está indefinido!");
    } else if (titulo == undefined) {
        res.status(400).send("O titulo do problema está indefinido!");
    }else if (detalhe == undefined) {
            res.status(400).send("O detalhe do problema está indefinido!");
    }else {

        usuarioModel.relatarProblema(nome, email, titulo, detalhe, dataHoraProblema)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Relato do problema inválido(s)");
                    } else {
                        res.status(403).send("Mais de um relato do mesmo problema!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o relato de problemas! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}
module.exports = {
    autenticar,
    cadastrar,
    cadastrarATM,
    cadastrarAgencia,
    relatarProblema
}