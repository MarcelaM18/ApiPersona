const {response} = require('express')
const moment = require('moment')
const Persona = require('../models/persona')//importamos el modelo



//consulta
function calcularEdad(fechaNacimiento) {
    const ahora = moment();
    const fechaNac = moment(fechaNacimiento);
    const edad = ahora.diff(fechaNac, 'years');
    return edad;
  }

const personaGet = async (req, res = response)=>{
  

    const personas = await Persona.find()


    const sumaEdades = personas.reduce((acumulador, persona) => acumulador + calcularEdad(persona.fechaNacimiento), 0);


    res.json({
        personas:personas,
        promedio: sumaEdades/personas.length

    })
}

    function esMayorDeEdad(persona) {
    const hoy = new Date();
    const edad = hoy.getFullYear() - persona.fechaNacimiento.getFullYear();
    if (edad < 18) {
      return false;
    }
    if (edad === 18) {
      if (hoy.getMonth() < persona.fechaNacimiento.getMonth()) {
        return false;
      }
      if (hoy.getMonth() === persona.fechaNacimiento.getMonth() && hoy.getDate() < persona.fechaNacimiento.getDate()) {
        return false;
      }
    }
    return true;
  };
  

//registrar

const personaPost = async (req, res = respose) =>{
    
        try{
            const personas = new Persona({
                ...req.body
                
            })
            
            if(!esMayorDeEdad(personas)){
                res.json({
                    msg:'Debe ser mayor de edad para registrase'
                })
                return
            }
            await personas.save()
            console.log('Se agrego con exito')
        
            res.json({
                msg:'La insercción se eféctuo correctamente'
        
            })
            }catch (error) {
                    console.error(error);
                    res.status(500).json({
                        msg:'La inserción no fue exitosa ocurrió un error '
                    })
            }
        }



module.exports={
    personaGet,
    personaPost, 
    
}

