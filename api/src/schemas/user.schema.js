const joi = require('joi');

const fullName = joi.string().min(5).max(20);
const email = joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } });
const dni = joi.number().min(10);
const password = joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'));
const id = joi.number().integer();

const createUserSchema = joi.object({

    fullName: fullName.required(),
    email: email.required(),
    dni: dni.required(),
    password: password.required(),

});

const deleteUserSchema = joi.object({
    id: id.required()
})
module.exports = {
    createUserSchema, deleteUserSchema
}