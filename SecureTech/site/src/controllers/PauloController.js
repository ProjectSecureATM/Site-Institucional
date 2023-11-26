var PauloModel = require("../models/PauloModel");

function buscarRamHora(req, res) {
    const idATM = req.params.idATM;
    usuarioModel.coletarRamHora(idATM)
        .then(dados => res.json(dados))
        .catch(error => res.status(500).json({ error: error.message }));
}

module.exports={
buscarRamHora
}