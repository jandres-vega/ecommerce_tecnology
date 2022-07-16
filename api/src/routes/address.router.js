const { Router } = require('express');
const validatorHandlers = require('../middlewares/validatos.handler');
const createAddressSchema = require('../schemas/address.schema');
const router = Router();

const AddressService = require('../services/address.service');

const address = new AddressService();

router.post('/location/:id',
    validatorHandlers(createAddressSchema, 'body'),
    async (req, res,next) => {
    try {
        const {id} = req.params;
        const body = req.body;
        const userAddress = await address.createAddress(id, body);
        res.send(userAddress);
    }catch (e) {
        next(e);
    }
})

module.exports = router;