require('dotenv').config();

const path = require('node:path');
const express = require('express');
const cors = require('cors');
const app = express();

const userRoutes = require('./routes/userRoutesBackend.js');
app.use('/user', userRoutes);

app.use(express.static(path.resolve(__dirname ,'public')));
app.set('view engine', 'ejs');
app.use(cors());

const PORT = process.env.PORT || 3500;

const dbConnection = require('./utils/dbConnection.js');

dbConnection()
.then(()=>{
    console.log('Sikeres adadbázis csatlakozás!')
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
    
})
.catch((error)=>{
    console.log(error.message);
});


app.get('/',( req , res )=>{
    try{
        res.statusCode = 200;
        return res.render('index');
    }catch(erro){
        res.statusCode = 404;
        return res.render('server-error.ejs');
    }
})
app.get('/acaunt',( req , res )=>{
    try{
        res.statusCode = 200;
        return res.render('acaunt.ejs');
    }catch(erro){
        res.statusCode = 404;
        return res.render('server-error.ejs');
    }
})

app.use('/diors-frontend', require('./routes/diorsRoutesFrontend.js'));

app.use('/ysls-frontend', require('./routes/yslsRoutesFrontend.js'));

app.use('/valentinos-frontend', require('./routes/valentinosRoutesFrontend.js'));

app.use('/jpgs-frontend', require('./routes/jpgsRoutesBackend.js'));

app.use('/bosses-frontend', require('./routes/bossRoutesFrontend.js'));

app.use('/versacces-frontend', require('./routes/versacceRoutesFrontend.js'));

app.use('/creeds-frontend', require('./routes/creedsRoutesFrontend.js'));

app.use('/dolces-frontend', require('./routes/dgRoutesFrontend.js'));

app.use('/guccis-frontend', require('./routes/gucciRoutesFrontend.js'));

app.use('/burberrys-frontend', require('./routes/burberryRoutesFrontend.js'));

app.use('/armanis-frontend', require('./routes/armaniRoutesFrontend.js'));

app.use('/lattafas-frontend', require('./routes/lattafasRoutesFrontend.js'));


// app.use('/users-backend', require('./routes/userRoutesBackend.js'));