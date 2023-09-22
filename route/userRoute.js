const { Register, fetchData, login } = require('../controller/userController')

const userRoute = require('express').Router()
userRoute.get('/fetchAllDetails',fetchData )
userRoute.post('/Register',Register )
userRoute.post('/Login',login)

module.exports = userRoute
