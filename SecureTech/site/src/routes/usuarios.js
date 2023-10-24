var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/cadastrarATM", function (req, res) {
    usuarioController.cadastrarATM(req, res);
})

router.post("/cadastrarAgencia", function (req, res) {
    usuarioController.cadastrarAgencia(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
})

router.post("/relatarProblema", function (req, res) {
    usuarioController.relatarProblema(req, res);
})

module.exports = router;