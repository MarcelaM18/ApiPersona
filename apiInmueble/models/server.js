const express = require('express')//Libreria express
const {dbConnection} = require('../database/config')//confuguracion de conexion a la base de datos
const bodyParser = require('body-parser')

//creaamos la clase server

class Server{
    constructor(){
        this.app = express()
       
        this.app.use(bodyParser.urlencoded({ extended:true }))
        this.app.use(express.json());
        this.port = process.env.PORT//Capturamos la variablde
        this.inmueblePath = '/api/inmueble'//Esta es la url por donde el usuario ve en la web la peticion
        this.propietarioPath = '/api/propietario'
        this.routes()//llamar el metodo de las rutas
        this.middlewares()//intermediario o puente para mongo
        this.connectarDB()//para conectarse a la base de datos
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }

    middlewares(){
        this.app.use(express.static(__dirname + 'public'))
    }

    routes(){
        this.app.use(this.inmueblePath, require('../routes/inmueble')),
        this.app.use(this.propietarioPath, require('../routes/propietario'))
    }

    async connectarDB(){
        await dbConnection()//esperar conexion de base de datos
    }
}

module.exports = Server