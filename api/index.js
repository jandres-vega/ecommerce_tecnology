require('dotenv').config();
const express = require('express');
const sequelize = require('./src/libs/conexion');
const routes = require('./src/routes/index')
const {logError, errorHandler, boomErrorHandler} = require('./src/middlewares/error.handles')
const app = express();
const port = process.env.PORT;

// para hacer peticiones de tipo post es necesario
//usar este middleware
app.use(express.json());


routes(app);


//los middlewares de tipo error seimpre se deben colocar despues
//de routing y tambie ahi que ver en que orden se va ejecutar uno tras del otro
//y es importtante xq con ayuda del next es quien va seguir una tras del otro
app.use(logError);
app.use(boomErrorHandler)
app.use(errorHandler)

sequelize.sync({force: true}).then(async () => {
    app.listen(port, () =>{
        console.log('listening on port ' + port);
    });
});



