require('dotenv-safe').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('./database/mongooseConnect')
const doadorasRoutes = require('./routes/doadorasRoutes')
const receptorasRoutes = require('./routes/receptorasRoutes')
const index = require('./routes/index.js')
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');

const app =express()

app.use(express.json())
app.use(cors())

mongoose.connect()

app.use(doadorasRoutes)
app.use(receptorasRoutes)
app.use('/', index)
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));





module.exports = app