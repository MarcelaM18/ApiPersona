const mongoose = require('mongoose')//importa libreria para conexion a base de datos
const dbConnection = () => {
    try{
        mongoose.connect(process.env.MONGO_CNN)
        console.log('conexión exitosa a la base de datos')
    }catch(error){
        error= 'Hubo un error con la conexion a la base de datos'
        console.log(error)
    }
}
//exportamos cadena de conexion a la base de datosn
module.exports = {dbConnection}