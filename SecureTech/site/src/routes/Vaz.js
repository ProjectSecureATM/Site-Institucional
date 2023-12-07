var express = require("express");
var router = express.Router();

var VazController = require("../controllers/VazController");

router.get("/ultimas/:idAgen", function (req, res) {
    VazController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idAgen", function (req, res) {
    VazController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;