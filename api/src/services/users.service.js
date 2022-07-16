const {models} = require('../libs/conexion');
const boom = require('@hapi/boom')

class UsersService {

    async createUser(body) {
        const {
            email,
            dni,
        } = body;

        const allUsers = await this.findAllUsersNoAdmin();
        const emailRepeat = allUsers.find(index => index.email === email);
        const dniRepeat = allUsers.find(index => index.dni === dni);

        if (emailRepeat) return 'el email ya se encuentra registrado';

        else if (dniRepeat) return 'el dni ya se encuntra registrado';

        else {
            return models.User.create(body);
        }
    }

    async findAllUsersNoAdmin() {
        return await models.User.findAll({
            include: ['Address'],
            where: {
                isAdmin: false
            }
        })
    }

    async findById(id) {
        const userById = await models.User.findByPk(id)
        if (!userById){
            throw boom.notFound('user not found')
        }
        return userById
    }

    async deleteUser(id) {
        const userDelete = await this.findById(id);
        await userDelete.destroy()
        return {id}
    }

    async updateUser(id, body) {
        const userId = await this.findById(id);
        return await userId.update(body);
    }



}

module.exports = UsersService;