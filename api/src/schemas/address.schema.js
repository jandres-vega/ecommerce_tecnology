const joi = require('joi');

const address = joi.string().min(5).max(25);
const zipCode = joi.number().integer().min(6);
const phone = joi.string().min(7).max(10);
const country = joi.string();
const description = joi.string();

const createAddressSchema = joi.object({
    address: address.required(),
    zipCode: zipCode.required(),
    phone: phone.required(),
    country: country.required(),
    description: description
});

module.exports = createAddressSchema;