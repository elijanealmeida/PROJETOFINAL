const receptorasModel = require('../models/receptorasModel.js')
const criaReceptora = async (request, response) => {
   try {
      const { nome, cpf, região } = request.body

      const newReceptora = new receptorasModel({
        nome, cpf, região
      })

       const savedReceptora = await newReceptora.save()

       response.status(200).json(savedReceptora)
    } catch (error) {
      console.error(error)
      response.status(500).json({ message: error.message })
    }
}

const listaTodasAsReceptoras = async (request, response) => {
    try {
        const todasAsReceptoras = await receptorasModel.find()
        response.status(200).json(todasAsReceptoras)
    } catch(error){
        console.error(error)
        response.status(500).json({ message: error.message })
    }
}

const receptoraPorId = async (request, response) => {
   try {
    const acharReceptora = await receptorasModel.acharPorId(request.params.id)
    response.status(200).json(acharReceptora)
   } catch (error) {
     console.error(error)
     response.status(500).json({ message: error.message })
   }
}

const atualizaReceptora = async (request, response) => {
    try {
        const { nome, cpf, região } = request.body
        const atualizaReceptora = await receptorasModel
        encontrePoId(request.params.id, {
            nome, cpf, endereço
        })
        response.status(200).json(atualizaReceptora)
    } catch (error) {
        console.error(error)
        response.status(500).json({ message: error.message })
    }
 }

 const deletaReceptoraPorId = async (request, response) => {
    try {
        const { id } = request.params
        await receptorasModel.deletaReceptoraPorId(id)
        const message = `A receptora com o ${id} foi deletada com sucesso!`
        response.status(200).json({ message })
    } catch (error) {
        console.error(error)
        response.status(500).json({ message: error.message })
    }
}



  
  

module.exports = {
  criaReceptora,
  listaTodasAsReceptoras,
  receptoraPorId,
  atualizaReceptora,
  deletaReceptoraPorId
 
}