const express = require("express");
const controller = require("../controller/doadorasController");

const router = express.Router();

router.post('/doadora/', controller.criaDoadora)
router.get('/doadoras/', controller.listaTodasAsDoadoras)
router.get('/doadora/:id', controller.doadoraPorId)
router.patch('/doadora/:id', controller.atualizaDoadora)
router.delete('/doadora/:id', controller.deletaDoadoraPorId)

module.exports = router