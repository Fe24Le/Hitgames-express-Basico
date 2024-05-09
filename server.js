const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000; // Puerto en el que se ejecutará el servidor

app.use(express.json()); // Middleware para manejar solicitudes JSON

app.use(express.static("public"));

// app.get('/',function(req,res){
//     res.send('funciona');
// });

app.get('/',function(req,res){
    res.render('index.html');
});


app.post('/agregar', (req, res) => {
    const nuevoDato = req.body;

    // Escribe los datos en el archivo JSON
    fs.appendFile('datos.json', JSON.stringify(nuevoDato) + '\n', 'utf8', err => {
        if (err) {
            console.error('Error al escribir en el archivo JSON:', err);
            res.status(500).send('Error interno del servidor');
            return;
        }
        console.log('Datos agregados correctamente en datos.json:');
        res.status(200).send('Datos agregados correctamente');
    });
});



// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});