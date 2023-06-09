const {Schema,model,default:mongoose}=require('mongoose')

const PersonaSchema = new Schema({
  documento: {
    type: String,
    required:[true ,'El camo es requerido']
  },
  nombreCompleto: {
    type: String,
    required:[true ,'El camo es requerido']
  },
  genero: {
    type: String,
    required:[true ,'El camo es requerido']
  },
  fechaNacimiento: {
    type: Date,
    required:[true ,'El camo es requerido']
  }
});



const Persona = model('persona', PersonaSchema);

module.exports = Persona;
