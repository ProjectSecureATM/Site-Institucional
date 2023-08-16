var express = require("express");
var router = express.Router();

var secureController = require("../controllers/secureController");

router.get("/:empresaId", function (req, res) {
  secureController.buscarsecurePorEmpresa(req, res);
});

router.post("/cadastrar", function (req, res) {
  secureController.cadastrar(req, res);
})

module.exports = router;