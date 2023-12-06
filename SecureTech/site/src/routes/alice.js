var express = require("express");
var router = express.Router();

var aliceController = require("../controllers/aliceController");

router.post("/logTempoReal/:idATM", function(req,res){
    aliceController.logTempoReal(req, res);
});

router.post("/comparacaoLogsSucessoEFalha/:idATM", function(req,res){
    aliceController.comparacaoLogsSucessoEFalha(req, res);
}); 

router.post("/logDia/:idATM", function(req,res){
    aliceController.logDia(req, res);
}); 

router.post("/logHora/:idATM", function(req,res){
    aliceController.logHora(req, res);
}); 

module.exports = router;