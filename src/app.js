const path = require("path");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const Usuario = require("./routes/usuario.js");
var cookieSession = require("cookie-parser");
var sesion = require("express-session");

//INSTANCIANDO EL SERVIDOR DE PAGINAS
const app = express();
//app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'))
//SETEANDO EL PUERTO
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname), "views");
app.set("view engine", "ejs");
app.use("/", Usuario);
//EMPEZANDO A ESCUCHAR LAS PETICIONES
app.listen(app.get("port"), () => {
    console.log(`Aplicacion Iniciada ${app.get("port")}`);
});
