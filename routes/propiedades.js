const express = require('express');
const axios = require('axios');

const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJyZWFkIl0sImV4cCI6MTY4MjI4NTE2OSwiYXV0aG9yaXRpZXMiOlsiUk9MRV9QVUJMSUMiXSwianRpIjoiYTc0MGFiNDktZDAxOS00YmI0LWI2ZTktYWJjNDkzYzgxMGQxIiwiY2xpZW50X2lkIjoiZjV5OTYxcms0NHY4bWRoamkwN2Z0cnZoamF2aXZ3NmMifQ.ssakNP2FYvk8ig4fMfzejzdsMIOBCO46RSNSZ6aGT20';
const baseUrl = 'https://api.idealista.com/3.5/es/';
const propertyType = 'homes';
const operation = 'sale'
const center = '37.977200,-0.681194';
const distance = 3000;

let router = express.Router();

router.post('/', (req, res) =>{
    axios.post(`${baseUrl}search?propertyType=${propertyType}&operation=${operation}&center=${center}&distance=${distance}&maxItems=8`, null , {
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
        })
        .then(response => {
            res.status(200).send({ok: true, resultado: response.data});
        })
        .catch(error => {
            res.status(400).send({ok: false, error: error});
        });
});

module.exports = router;