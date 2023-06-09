const {Router} = require('express')
const route = Router()

const {personaGet, personaPost} = require('../controllers/persona')

route.get('/',personaGet)
route.post('/',personaPost)


module.exports = route