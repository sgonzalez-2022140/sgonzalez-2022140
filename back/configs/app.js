'use strict'

//importaciones
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { config } from "dotenv"

//configuraciones
const app = express()
config()
const port = process.env.PORT || 3056

//configuración del servidor
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

// agregare este middleware para colocar imagenes en una carpeta
app.use('/images', express.static('src/uploads'));

//Declarar las rutas que usaremos 
//app.use('/user', userRoutes)

//levantar el servidor 
export const initServer = ()=>{
    

    app.listen(port)
    console.log(`Server HTTP running in port ${port}`)
}