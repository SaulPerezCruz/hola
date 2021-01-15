const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; //si está disponible port usa ese, si no usa 3000

app.use('/', express.static(path.join(__dirname, '/public')));

app.listen(port, () => {
    console.log("Servidor en el puerto " + port);
})