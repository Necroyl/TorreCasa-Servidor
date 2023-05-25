const express = require('express');
const multer = require("multer");
const Vivienda = require(__dirname + '/../models/Vivienda');

// Librería multer para subida de ficheros
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "_" + file.originalname);
    },
});

let upload = multer({ storage: storage });

let router = express.Router();

router.get('/', (req, res) => {
    Vivienda.find().then( viviendas => {
        res.status(200).send({ ok: true, viviendas })
    }).catch( (error) => {
        res.status(500).send({ ok: true, error: 'No se encontraron viviendas' });
    })
})

router.get('/:id', (req, res) => {
    Vivienda.fin({_id: req.params['id']}).then( vivienda => {
        res.status(200).send({ ok: true, vivienda });
    }).catch( error => {
        res.status(400).send({ ok:false, error: 'No se ha encontrado la vivienda' })
    })
})

router.post('/nueva', upload.array('foto'), (req, res) =>{
    console.log(req.files);
    try{
        let vivienda = new Vivienda({
            direccion: req.body.direccion,
            planta: req.body.planta,
            puerta: req.body.puerta,
            lat: req.body.lat,
            lng: req.body.lng,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            foto: req.body.foto,
            propietario: req.body.propietario.uid
        })


        if (req.files && req.files.filename) vivienda.foto = req.files.filename;

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