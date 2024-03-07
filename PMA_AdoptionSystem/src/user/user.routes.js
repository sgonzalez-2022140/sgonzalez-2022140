import express from 'express'
import { 
    validateJwt,
    isAdmin
} from '../middlewares/validate-jwt.js';
import {
    test,
    register, 
    login, 
    update, 
    deleteU
} from './user.controller.js';

const api = express.Router();

//RUTAS PÚBLICAS
api.post('/register', register)
api.post('/login', login)

//validaciones para admin y cualquiera
api.get('/test', [validateJwt, isAdmin], test)
api.put('/update/:id', [validateJwt], update) 
api.delete('/delete/:id', [validateJwt], deleteU)

export default api