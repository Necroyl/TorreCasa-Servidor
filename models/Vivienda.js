const { Schema, model } = require("mongoose");

const ViviendaSchema = Schema({
    direccion: {
        type: String,
        required: true
    },
    planta: {
        type: Number,
        required: true
    },
    puerta: {
        type: String,
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    foto: {
        type: Object,
        required: true
    },
    propietario: {
        type: Schema.Types.ObjectId,
        ref: 'usuario'
    }
})

module.exports = model('Vivienda', ViviendaSchema);