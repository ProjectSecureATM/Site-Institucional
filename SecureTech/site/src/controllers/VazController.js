var VazModel = require("../models/VazModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 10;

    var idAgen = req.params.idAgen;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    VazModel.buscarUltimasMedidas(idAgen, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    var idAgen = req.params.idAgen;

    console.log(`Recuperando medidas em tempo real`);

    VazModel.buscarMedidasEmTempoReal(idAgen).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal

}