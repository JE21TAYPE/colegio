const { render } = require("ejs");
const express = require("express");
const { json } = require("body-parser");
const router = express.Router();
const request = require("request");
const client = require("../libs/dbconnect");
const { path } = require("express/lib/application");

router.get("/", (req, res) => {
    res.render("././public/index");
});



router.get("/usuarios", (req, res) => {
    client.connect(async (err) => {
        if (err) {
            console.log("Error al conectar");
        } else {
            const collection = client.db("colegio").collection("alumnos");
            collection.find().toArray(function (err, result) {
                if (result.length === 0) console.log("COLECCION SIN DATOS");
                else {
                    console.log(result);
                    res.render("././views/usuario/index", {
                        result: result,
                    });
                }
            });
        }
    });
});

router.get("/formulario", (req, res) => {
    res.render("././views/usuario/formulario.ejs");
    //client.use(express.urlencoded({ extended: true }));
    console.log(req.query);
});

router.post("/grabarAlumno", (req, res) => {
    console.log(req);
});

module.exports = router;
