var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/pythonController");

router.get("/calcularGraph", function (req, res) {
    pythonController.calcularGraph(req, res);
});

module.exports = router;