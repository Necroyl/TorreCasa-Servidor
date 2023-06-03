const express = require('express');
const Vivienda = require(__dirname + '/../models/Vivienda');

let router = express.Router();

router.get('/', (req, res) => {
    Vivienda.find().then( viviendas => {
        res.status(200).send({ ok: true, viviendas })
    }).catch( (error) => {
        res.status(500).send({ ok: true, error: 'No se encontraron viviendas' });
    })
})

router.get('/:id', (req, res) => {
    Vivienda.findById({_id: req.params['id']}).then( vivienda => {
        res.status(200).send({ ok: true, vivienda });
    }).catch( error => {
        res.status(400).send({ ok:false, error: 'No se ha encontrado la vivienda' })
    })
})

router.post('/nueva', (req, res) =>{
    try{
        let vivienda = new Vivienda({
            direccion: req.body.direccion,
            planta: req.body.planta,
            puerta: req.body.puerta,
            lat: req.body.lat,
            lng: req.body.lng,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            fotos: req.body.fotos,
            propietario: req.body.propietario.uid
        })

        vivienda.save().then( () => {
            return res.status(200).json({
                ok: true,
                message: 'Vivienda guardada con éxito'
            })
        }).catch( (error) => {
            return res.status(400).json({
                ok: false,
                message: error
            })
        })
    }catch(error){
        return res.status(500).json({
            ok: false,
            message: 'No se pudo guardar la vivienda',
            files: req.files,
            body: req.body
        })
    }
})

router.delete('/:id', (req, res) => {
    Vivienda.findByIdAndDelete( req.params['id']).then(vivienda => {
        res.status(200).send({ ok: true, vivienda });
    }).catch( error => {
        res.status(400).send({ ok: false, error: 'No se ha podido eliminar la vivienda'})
    })
})

module.exports = router;