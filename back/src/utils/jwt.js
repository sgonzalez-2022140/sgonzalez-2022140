'use strict'

import jwt from 'jsonwebtoken'

const secretKey = '@LlaveSecretaDelCubo@'

export const generatejwt = async (payload)=>{
    try{
        return jwt.sign(payload, secretKey, {
            //validar cuanto tiempo puede estar logeado
            expiresIn: '3h',
            //algoritno de firma 
            algorithm: 'HS256'
        })
    }catch(error) {
        console.error(error)
        return error
    }
}
