var pedroModel = require("../models/PedroModels");

function buscar_cpu(req,res){
    var idATM = req.params.idATM

    pedroModel.buscar_cpu(idATM)
    .then(dados => res.json(dados))
    .catch(error => res.status(500).json({ error: error.message }));

}

function buscar_ram(req,res){
    var idATM = req.params.idATM

    pedroModel.buscar_ram(idATM)
    .then(dados => res.json(dados))
    .catch(error => res.status(500).json({ error: error.message }));

}

function buscar_qtdDispositivos(req,res){
    var idATM = req.params.idATM

    pedroModel.buscar_qtdDispositivos(idATM)
    .then(dados => res.json(dados))
    .catch(error => res.status(500).json({ error: error.message }));

}


function buscar_ListaDispositivos(req,res){
    var idATM = req.params.idATM

    pedroModel.buscar_ListaDispositivos(idATM)
    .then(dados => res.json(dados))
    .catch(error => res.status(500).json({ error: error.message }));

}


function buscar_ultimoDispositivos(req,res){
    var idATM = req.params.idATM

    pedroModel.buscar_ultimoDispositivos(idATM)
    .then(dados => res.json(dados))
    .catch(error => res.status(500).json({ error: error.message }));

}




function atualizar_cpu(req,res){
    var idATM = req.params.idATM

    pedroModel.atualizar_cpu(idATM)
    .then(dados => res.json(dados))
    .catch(error => res.status(500).json({ error: error.message }));

}

function atualizar_ram(req,res){
    var idATM = req.params.idATM

    pedroModel.atualizar_ram(idATM)
    .then(dados => res.json(dados))
    .catch(error => res.status(500).json({ error: error.message }));

}



function atualizar_qtdDispositivos(req,res){
    var idATM = req.params.idATM

    pedroModel.atualizar_qtdDispositivos(idATM)
    .then(dados => res.json(dados))
    .catch(error => res.status(500).json({ error: error.message }));

}

function atualizar_ListaDispositivos(req,res){
    var idATM = req.params.idATM

    pedroModel.atualizar_ListaDispositivos(idATM)
    .then(dados => res.json(dados))
    .catch(error => res.status(500).json({ error: error.message }));

}

function atualizar_ultimoDispositivos(req,res){
    var idATM = req.params.idATM

    pedroModel.atualizar_ultimoDispositivos(idATM)
    .then(dados => res.json(dados))
    .catch(error => res.status(500).json({ error: error.message }));

}


module.exports = {
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