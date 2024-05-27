import User from './user.model.js'
import {generatejwt} from '../utils/jwt.js'

export const createUserDefault = async(req, res)=>{
    try {
        let  userExist = await User.findOne({email: 'admin@zarutravelling.com'})
        if (!userExist) {
        let passwordD = await ('admin123')
        let newUser = new User({
            name: 'Pedro',
            surname: 'Armas',
            username: 'nuestropadre',
            password: passwordD,
            email: 'admin@kinal.com',
            phone: '12352602',
            role: 'ADMIN'
          });
        let user = new User(newUser)
        await user.save()
        console.log('User register correctly');
        } else {
        console.log('The user already exists.');
        }

    } catch (error) {
        console.error(error)
        if(error.keyValue.username) console.log(`username ${error.keyValue.username} is alredy taken ` )
        console.log('fail to add an user')
    }
}

export const register = async(req, res) =>{

}