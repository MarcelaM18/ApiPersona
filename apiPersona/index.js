require('dotenv').config()//Importar variables de entorno
const Server = require('./models/server')//Importamos la clase
const server = new Server()//Intaciamos el objeto
server.listen()