var express =require('express');
var app = express();
const path = require('path');
app.use(express.json());
app.use(express.urlencoded());

app.get('/',function(req,res){
    res.sendFile(paht.join(__dirname+'./ejemplo5/ejemplo5.html'));
});

app.get('/saludo', function(req,res){
    res.send('Solicitud de saludo recibida');
});

app.post('/respuesta', function(req,res){
    res.send("Nombre ingresado: "+req.body.nombre);
    console.log("Informacion enviada")
});