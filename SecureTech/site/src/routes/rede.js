var express = require("express");
var router = express.Router();

var redeController = require("../controllers/redeController");

router.post("/confirmacaoSeguranca", function (req, res) {
    redeController.confirmacaoSeguranca(req, res);
});

module.exports = router;
