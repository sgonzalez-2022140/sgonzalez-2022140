//ejecutar el servidor
import { initServer } from "./configs/app.js";
import { connect } from "./configs/mongo.js";
//crear usuario por defecto
import { createUserDefault } from "./src/user/user.controller.js";

initServer()
connect()
//adicionales
createUserDefault()
