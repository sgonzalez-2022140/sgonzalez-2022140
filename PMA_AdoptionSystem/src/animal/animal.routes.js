'use strict'

import { Router } from 'express'
import { 
    deleteAnimal,
    get,
    save, 
    search, 
    test, 
    updateAnimal
} from './animal.controller.js'

import { validateJwt, isAdmin } from '../middlewares/validate-jwt.js'

const api = Router()

api.get('/test', test)
api.post('/save', save)
api.get('/get', get)
api.put('/updateAnimal/:id',[validateJwt, isAdmin], updateAnimal)
api.delete('/deleteAnimal/:id',[validateJwt, isAdmin], deleteAnimal)
api.post('/search', search)

export default api