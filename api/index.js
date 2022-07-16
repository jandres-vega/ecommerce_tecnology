require('dotenv').config();
const express = require('express');
const sequelize = require('./src/libs/conexion');
const app = express();
const port = process.env.PORT;

// para hacer peticiones de tipo post es necesario
//usar este middleware
app.use(express.json());

sequelize.sync({force: true}).then(async () => {
    app.listen(port, () =>{
        console.log('listening on port ' + port);
    });
});



