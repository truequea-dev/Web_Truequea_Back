const mongoose = require('mongoose');

const DB_URL =  `mongodb://127.0.0.1:27017/DatabaseWebTruequea`

async function conectar() {
    try {
      await mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('----------------- Conectado a la base de datos ----------------');
    } catch (error) {
      console.error('Error al conectar con la base de datos', error);
    }
}

module.exports = conectar;