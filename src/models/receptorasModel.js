const mongoose = require('mongoose')

const receptorasSchema = mongoose.Schema({
    _id: {
     type: mongoose.Schema.Types.ObjectId,
     default: mongoose.Types.ObjectId
    },

    nome: {
     type: String,
     required: true
    },

    cpf: {
     type: String,
     required: true
    },

    região: {
     type: String,
     required: true
    }
}, { timestamps: true })

    const Model = mongoose.model('receptoras', receptorasSchema)
    module.exports = Model