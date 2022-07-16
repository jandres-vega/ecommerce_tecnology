const {models} = require('../libs/conexion');
const UsersService = require('./users.service')
const users = new UsersService();

class AddressService {

    async createAddress (id, body) {
        const user = await users.findById(id);
        const userAddress = await models.Address.create(body);
        return await user.setAddress(userAddress)

    }
}

module.exports = AddressService;