import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';
// import connection from './configs/connectDB';

require('dotenv').config();

const app = express()
const port = process.env.PORT || 8080;

// ho tro chuyen data tu phia client len phia server va lay data don gian
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set up views engine
configViewEngine(app);

// init web routes
initWebRoute(app);



app.listen(port, () => {
  console.log(`Example app listening at  http://localhost:${port}`)
})