var avisoModel = require("../models/avisoModel");

function Alertas(req, res) {

    var fkEmpresa =  req.params.fkEmpresa;

    avisoModel.coletaAlertaCpuAmarelo().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });

    avisoModel.coletaAlertaCpuVermelho().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });

    avisoModel.coletaAlertaRamAmarelo().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });

    avisoModel.coletaAlertaRamVermelho().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
    
    avisoModel.coletaAlertaDiscoVermelho().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
    avisoModel.coletaAlertaDiscoAmarelo().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    Alertas
}

// var avisoModel = require("../models/avisoModel");

// async function Alertas(req, res) {
//     var fkEmpresa = req.params.fkEmpresa;

//     try {
//         const resultados = await Promise.all([
//             avisoModel.coletaAlertaCpuAmarelo(),
//             avisoModel.coletaAlertaCpuVermelho(),
//             avisoModel.coletaAlertaRamAmarelo(),
//             avisoModel.coletaAlertaRamVermelho(),
//             avisoModel.coletaAlertaDiscoAmarelo(),
//             avisoModel.coletaAlertaDiscoVermelho()
//         ]);

//         const hasResults = resultados.some(resultado => resultado.length > 0);

//         if (hasResults) {
//             res.status(200).json(resultados);
//         } else {
//             res.status(204).send("Nenhum resultado encontrado!");
//         }
//     } catch (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     }
// }

// module.exports = {
//     Alertas
// };
