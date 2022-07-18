require('dotenv-safe').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('./database/mongooseConnect')
//const segurancasRoutes = require('./routes/segurancaRoutes')
const doadorasRoutes = require('./routes/doadorasRoutes')
const receptorasRoutes = require('./routes/receptorasRoutes')

const app =express()
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');
const index = require('./routes/index.js')

app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(express.json())
app.use(cors())







mongoose.connect()

//pp.use(segurancasoutes)
app.use(doadorasRoutes)
app.use(receptorasRoutes)
app.use('/', index)

module.exports = app