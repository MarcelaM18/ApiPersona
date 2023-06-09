const {Schema,model,default:mongoose}=require('mongoose')


//migracion de datos
const InmuebleSchema = new Schema({
    tipoInmueble: {
        type: String,
        required:[true, 'El campo es requerido'],
        enum:['Apartamento', 'Casa', 'Local']
    },

    direccion:{
        type: String,
        required:[true, 'El campo es requerido']
    },

    ciudad:{
        type:String,
        required:[true, 'El campo es requerido'],
        enum:['Medellin', 'Envigado', 'Bello']

    },
    
    valor:{
        type:Number,
        required:[true,'El campo es requerido'],
        min:800000,
        max:4000000

    }
    
})
module.exports = model('inmueble', InmuebleSchema)

