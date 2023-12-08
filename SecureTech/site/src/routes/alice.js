var express = require("express");
var router = express.Router();

var aliceController = require("../controllers/aliceController");

router.get("/logTempoReal/:idATM", function(req,res){
    aliceController.logTempoReal(req, res);
});

router.get("/comparacaoLogsSucessoEFalha/:idATM", function(req,res){
    aliceController.comparacaoLogsSucessoEFalha(req, res);
}); 

router.get("/comparacaoLogsSucessoEFalha2/:idATM", function(req,res){
    aliceController.comparacaoLogsSucessoEFalha2(req, res);
});

router.get("/logDia/:idATM", function(req,res){
    aliceController.logDia(req, res);
}); 

router.get("/logHora/:idATM", function(req,res){
    aliceController.logHora(req, res);
}); 

module.exports = router;