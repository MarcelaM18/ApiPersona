const {Router} = require('express')
const route = Router()

const {inmuebleGet, inmueblePost, inmueblePut, inmuebleDelete} = require('../controllers/inmueble')

route.get('/',inmuebleGet)
route.post('/',inmueblePost)
route.put('/',inmueblePut)
route.delete('/',inmuebleDelete)

module.exports = route