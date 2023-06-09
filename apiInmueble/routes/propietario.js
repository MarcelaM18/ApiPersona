const {Router} = require('express')
const route = Router()

const {propietarioGet, propietarioPost, propietarioPut, propietarioDelete} = require('../controllers/propietario')

route.get('/',propietarioGet)
route.post('/',propietarioPost)
route.put('/',propietarioPut)
route.delete('/',propietarioDelete)

module.exports = route