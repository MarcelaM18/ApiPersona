const {response} = require('express')
const Inmueble = require('../models/inmueble')//importamos el modelo


//consulta
const inmuebleGet = async (req, res = response)=>{
    const{tipoInmueble} = req.query

    const inmuebles = await Inmueble.find()

    res.json({
        inmuebles
    })
}

//registrar

const inmueblePost = async (req, res = respose) =>{
    try{
    const {tipoInmueble,direccion,ciudad,valor} = req.query

    const inmuebles = new Inmueble({
        tipoInmueble:tipoInmueble,
        direccion:direccion,
        ciudad:ciudad,
        valor:valor

    })
    await inmuebles.save()
    
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

const inmueblePut = async (req, res = response) => {
        const {tipoInmueble,direccion,ciudad,valor}= req.query
        let mensaje =""
    
        try {
            const inmueble = await Inmueble.findOneAndUpdate({direccion:direccion}, {tipoInmueble:tipoInmueble,direccion:direccion,cuidad:ciudad,valor:valor})
            mensaje= "La modificación se efectuo correctamente"
        } catch (error) {
            mensaje = "Se presentro un error en la modificacion"
        }
        res.json({
            msg: mensaje,
        })
    }
    

    


const inmuebleDelete = async(req,res=response)=>{
    const {direccion} = req.query
    let mensaje =""

    try {
        const inmueble = await Inmueble.findOneAndDelete({direccion:direccion})
        mensaje= "Se ha eliminado correctamente"
    } catch (error) {
        mensaje = "Se presentro un error en la eliminacion"
    }
    res.json({
        msg: mensaje,
    })
}

module.exports={
    inmuebleGet,
    inmueblePost, 
    inmueblePut, 
    inmuebleDelete
}

