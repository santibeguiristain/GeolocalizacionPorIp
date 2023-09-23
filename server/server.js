const express = require("express");
const app = express();
const cors = require("cors"); // Evitar problemas de seguridad en navegadores
const path = require("path");
 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname,"../client"))); // cuando comienza renderiza el archivo.
app.use(cors());


app.get("/",function (req,res) {
     const filePath = path.resolve(__dirname,"..","client","index.html");
     es.sendFile(filePath);
})


app.get("/localizacion",function (req,res) {
    res.status(200).sendFile("index.html");
})


app.listen(8080,()=> {
    console.log("The server is running in port 8080");
});