// index basico de express y cors
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const conectar = require('./config/db');

require('dotenv').config({path: './.env'});

const app = express();

app.use(express.json());

app.use(cors());    

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Rutas
app.use("/api", require("./routes"));

conectar();

// Starting the server
const PORT = process.env.PORT || 3020;
app.listen(PORT, () => {
    console.log(`server escuchando en puerto ${PORT}`);
  })
