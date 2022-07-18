const doadorasModel = require('../models/doadorasModel.js')
const criaDoadora = async (request, response) => {
   try {
      const { nome, cpf, região } = request.body

      const newDoadora = new doadorasModel({
        nome, cpf, região
      })

       const savedDoadora = await newDoadora.save()

       response.status(201).json(savedDoadora)
    } catch (error) {
      console.error(error)
      response.status(500).json({ message: error.message })
    }
}

const listaTodasAsDoadoras = async (request, response) => {
    try {
        const todasAsDoadoras = await doadorasModel.find()
        response.status(200).json(todasAsDoadoras)
    } catch(error){
        console.error(error)
        response.status(500).json({ message: error.message })
    }
}

const doadoraPorId = async (request, response) => {
   try {
    const acharDoadora = await doadorasModel.acharPorId(request.params.id)
    response.status(200).json(acharDoadora)
   } catch (error) {
     console.error(error)
     response.status(500).json({ message: error.message })
   }
}

const atualizaDoadora = async (request, response) => {
    try {
        const { nome, cpf, região } = request.body
        const atualizaDoadora = await doadorasModel
        encontrePoId(request.params.id, {
            nome, cpf, região
        })
        response.status(200).json(atualizaDoadora)
    } catch (error) {
        console.error(error)
        response.status(500).json({ message: error.message })
    }
 }

 const deletaDoadoraPorId = async (request, response) => {
    try {
        const { id } = request.params
        await doadorasModel.deletaDoadoraPorId(id)
        const message = `A doadora com o ${id} foi deletada com sucesso!`
        response.status(200).json({ message })
    } catch (error) {
        console.error(error)
        response.status(500).json({ message: error.message })
    }
}



  
  

module.exports = {
  criaDoadora,
  listaTodasAsDoadoras,
  doadoraPorId,
  atualizaDoadora,
  deletaDoadoraPorId
 
}