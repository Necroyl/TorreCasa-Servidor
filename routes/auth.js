const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, revalidarToken, loginUsuario, cambiarEmail, cambiarPass } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const Usuario = require(__dirname + '/../models/Usuario');

const router = Router();

// Crear un nuevo usuario
router.post('/new', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña debe tener más de 6 caracteres').isLength({min:6}),
    validarCampos
], crearUsuario);

// Login de usuario
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña debe tener más de 6 caracteres').isLength({min:6}),
    validarCampos
], loginUsuario);

// Cambiar email
router.post('/newEmail', [
    check('email', 'Debe tener formato correcto').isEmail(),
    validarCampos
], cambiarEmail)

// Cambiar pass
router.post('/newPass', [
    check('password', 'La contraseña debe tener más de 6 caracteres').isLength({min:6}),
    validarCampos
], cambiarPass)

// Datos de usuario
router.get('/usuario/:id', (req, res) => {
    Usuario.findById({_id: req.params['id']}).then( (response) => {
        console.log('response: ' + response)
        res.status(200).send({ok: true, response: response});
    }).catch( error => {
        res.status(400).send({ ok:false, error: 'No se han encontrado datos de usuario' })
    })
})

// Validar token
router.get('/renew', validarJWT, revalidarToken);

module.exports = router;