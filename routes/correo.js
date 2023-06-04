const { Router } = require('express');
const enviarEmail = require('../controllers/correo');

const router = Router();

router.post('/', (req, res) => { 
    enviarEmail(req.body, res)
})

module.exports = router;