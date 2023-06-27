'use strict';

let fs = require('fs');

function reprocesarVentas(req, res) {
    let params = req.body;

    for (let index = 0; index < params.length; index++) {
        const element = params[index];
        axios.post('http://13.65.99.77:9090/api/venta/fin', element)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    res.status(200).send({
        status: true,
        data: params
    });
}

module.exports = {
    reprocesarVentas
};