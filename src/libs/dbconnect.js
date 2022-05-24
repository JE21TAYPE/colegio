const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
    "mongodb+srv://taype:taype@colegio.0ze3i.mongodb.net/?retryWrites=true&w=majority";

let client;

if (!client) {
    try {
        client = new MongoClient(uri);
    } catch (e) {
        console.log("No se pudo conectar a la BD");
        console.log(e.message);
    }
}
module.exports = client;
