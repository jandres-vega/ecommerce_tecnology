const {Router} = require('express')
const validatorHandlers = require('../middlewares/validatos.handler');
const boom = require('@hapi/boom')
const {createUserSchema, deleteUserSchema} = require('../schemas/user.schema');
const UsersServices = require('../services/users.service');
const router = Router();

const users = new UsersServices();


router.post('/',
    validatorHandlers(createUserSchema, 'body'),
    async (req, res, next) => {

        try {
            const body = req.body;
            const createUser = await users.createUser(body);
            res.status(200).json(createUser);
        }catch (e) {
            next(e);
        }
    }
);

router.get('/', async (req, res, next) => {

    try {
        const rta = await users.findAllUsersNoAdmin();
        res.send(rta);
    }catch (e) {
        next(e);
    }

})

router.get('/:id', async function (req, res,next) {
    try {
        const {id} = req.params
        const userById = await users.findById(id)
        res.send(userById)
    }catch (e) {
        next(e)
    }
})

router.delete('/:id',
    validatorHandlers(deleteUserSchema, 'params'),
    async (req, res, next) => {
    try {
        const {id} = req.params;
        if (id){
            const idInt = parseInt(id)
            const userDestroy = await users.deleteUser(idInt)
            res.send(userDestroy)
        }
    }catch (e) {
        next(e);
    }
})

router.put('/:id', async(req, res, next) => {
    try {
        const { id } = req.params
        const body = req.body;
        const user = await users.updateUser(id, body)
        res.send(user)
    }catch (e) {
        next(e);
    }
})

module.exports = router