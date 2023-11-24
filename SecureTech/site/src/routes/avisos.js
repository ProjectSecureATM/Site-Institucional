var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/Alertas/:fkEmpresa", function (req, res) {
    avisoController.Alertas(req, res);
});

module.exports = router;