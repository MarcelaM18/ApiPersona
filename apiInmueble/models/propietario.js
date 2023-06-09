const {Schema,model,default:mongoose}=require('mongoose')

const PropietarioSchema = new Schema({
    tipoDocumento:{
        type: String,
        required:[true, 'El campo es requerido'],
        enum:['CC','NIT','CE']
    },

    documento:{
        type:String,
        required:[true,'El campo es requerido'],
        fechaNacimiento: Date,
    },

    fechaN:{
      type:Date,
      required:[false, 'el campor es requerido']
    },

    celular:{
        type:String,
        required:[true, 'El campo es requerido']
    }
    
})
module.exports = model('propietario', PropietarioSchema)