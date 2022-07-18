const express = require("express");
const controller = require("../controller/receptorasController");

const router = express.Router();

router.post('/receptora/', controller.criaReceptora)
router.get('/receptoras/', controller.listaTodasAsReceptoras)
router.get('/receptora/:id', controller.receptoraPorId)
router.patch('/receptora/:id', controller.atualizaReceptora)
router.delete('/receptora/:id', controller.deletaReceptoraPorId)


module.exports = router