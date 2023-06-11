const { response } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt')

const crearUsuario = async(req, res = response) => {

    const { name, email, password } = req.body;

    try {
        // Verificar email
        const usuario = await Usuario.findOne({ email })
        if( usuario ){
            return res.status(400).json({
                ok: false,
                msg: 'Este email ya está en uso'
            });
        }

        // Crear usuario con el modelo
        const dbUser = new Usuario( req.body );

        // Hashear contraseña
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync( password, salt );

        // Generar el JWT
        const token = await generarJWT( dbUser.id, name );

        // Crear usuario de bd
        dbUser.save();

        // Generar respuesta exitosa
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            email: dbUser.email,
            token
        })

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
        })
    }
    
}

const loginUsuario = async(req, res = response) => {

    const { email, password } = req.body;

    try {
        const dbUser = await Usuario.findOne({ email });
        if( !dbUser ) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo no existe'
            });
        }

        // Confirmar si el password hace match
        const validPassword = bcrypt.compareSync( password, dbUser.password );

        if( !validPassword ){
            return res.status(400).json({
                ok: false,
                msg: 'El password no coincide'
            });
        }

        // Generar JWT
        const token = await generarJWT( dbUser.id, dbUser.name );

        // Respuesta del servicio
        return res.json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            email: dbUser.email,
            token
        });

    } catch (error) {
        return res.json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }
}

const revalidarToken = async(req, res = response) => {
    const { uid } = req;

    // Leer la bd
    const dbUser = await Usuario.findById( uid );
    // Generar el JWT
    const token = await generarJWT( uid );

    return res.json({
        ok: true,
        uid: dbUser.id, 
        name: dbUser.name,
        email: dbUser.email,
        token
    })
}

const cambiarEmail = async(req, res = response ) => {
    const {email, id} = req.body;

    try {
        // TODO buscar si algún usuario tiene el mismo email?
        const dbUser = await Usuario.findById(id);
        dbUser.email = email;
        dbUser.save();

        return res.json({
            ok: true,
            msg: 'Email cambiado'
        })
    } catch (error) {
        return res.json({
            ok: false,
            msg: 'No se ha podido cambiar el correo'
        })
    }
}

const cambiarPass = async( req, res = response ) => {
    const {password, uid} = req.body;

    try{
        const dbUser = await Usuario.findOne({ uid });

        console.log(dbUser);

        const validPassword = bcrypt.compareSync( password, dbUser.password );

        if( validPassword ){
            throw Error;
        }

        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync( password, salt );
        dbUser.save();

        console.log(dbUser);

        return res.json({
            ok: true,
            msg: 'Contraseña cambiada'
        })
    } catch(error) {
        return res.json({
            ok: false,
            msg: 'No se ha podido cambiar la contraseña.'
        })
    }
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
    cambiarEmail,
    cambiarPass
}