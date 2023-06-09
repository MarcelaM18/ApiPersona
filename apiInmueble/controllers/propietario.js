const {response} = require('express')
const Propietario = require('../models/propietario')//importamos el modelo


//consulta
const propietarioGet = async (req, res = response)=>{
    const{tipoDocumento} = req.query

    const propietarios = await Propietario.find()

    res.json({
        propietarios
    })
}

//registrar

const propietarioPost = async (req, res = respose) =>{
    const {tipoDocumento,documento,fechaN,celular} = req.body
    const fechaActual = new Date()
    //const hoy = fechaActual.getDate();
    //let data = req.body;
   // res.send('Data Received: ' + JSON.stringify(fechaActual));
    if(Date.parse(fechaN) > Date.parse(fechaActual)){
        res.json({
            msg: 'La fecha de nacimiento no puede ser mayor a la fecha actual '
        })
    }

   /* if(fechaN > fechaActual){
        res.json({
            msg: 'La fecha de nacimiento no puede ser mayor a la fecha actual '
        })
    }*/
        try{
            const propietarios = new Propietario({
                tipoDocumento:tipoDocumento,
                documento:documento,
                fechaN:fechaN,
                celular:celular
            })
            await propietarios.save()
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




const propietarioPut = async (req, res = response) => {
        const {tipoDocumento,documento,fechaN,celular}= req.body
        let mensaje =""
    
        try {
            const propietario = await Propietario.findOneAndUpdate({documento:documento}, {tipoDocumento:tipoDocumento,documento:documento,fechaN:fechaN,celular:celular})
            mensaje= "La modificación se efectuo correctamente"
        } catch (error) {
            mensaje = "Se presentro un error en la modificacion"
        }
        res.json({
            msg: mensaje,
        })
    }
    

    


const propietarioDelete = async(req,res=response)=>{
    const {tipoDocumento,documento} = req.query
    let mensaje =""

    try {
        const propietario = await Propietario.findOneAndDelete({tipoDocumento:tipoDocumento,documento:documento})
        mensaje= "Se ha eliminado correctamente"
    } catch (error) {
        mensaje = "Se presentro un error en la eliminacion"
    }
    res.json({
        msg: mensaje,
    })
}

module.exports={
    propietarioGet,
    propietarioPost, 
    propietarioPut, 
    propietarioDelete
}

