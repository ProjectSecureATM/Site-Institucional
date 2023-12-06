var express = require("express");
var router = express.Router();

var pedroController = require("../controllers/PedroController");

router.get("/buscar_cpu/:idATM", function(req,res){
    pedroController.buscar_cpu(req,res)
});

router.get("/atualizar_cpu/:idATM", function(req,res){
    pedroController.atualizar_cpu(req,res)
});


router.get("/buscar_ram/:idATM", function(req,res){
    pedroController.buscar_ram(req,res)
});

router.get("/atualizar_ram/:idATM", function(req,res){
    pedroController.atualizar_ram(req,res)
});


router.get("/buscar_qtdDispositivos/:idATM", function(req,res){
    pedroController.buscar_qtdDispositivos(req,res)
});

router.get("/atualizar_qtdDispositivos/:idATM", function(req,res){
    pedroController.atualizar_qtdDispositivos(req,res)
});


router.get("/buscar_ListaDispositivos/:idATM", function(req,res){
    pedroController.buscar_ListaDispositivos(req,res)
});

router.get("/atualizar_ListaDispositivos/:idATM", function(req,res){
    pedroController.atualizar_ListaDispositivos(req,res)
});


router.get("/buscar_ultimoDispositivos/:idATM", function(req,res){
    pedroController.buscar_ultimoDispositivos(req,res)
});

router.get("/atualizar_ultimoDispositivos/:idATM", function(req,res){
    pedroController.atualizar_ultimoDispositivos(req,res)
});


module.exports = router;