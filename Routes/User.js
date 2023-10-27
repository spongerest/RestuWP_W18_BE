import express from 'express'
import { Login,getUsers, UpdateUser, GetUser } from '../Controllers/User.js'
import { verifyJwtToken } from '../middlware/VerifyToken.js'
const Router = express.Router()

Router.post('/login', Login)

export default Router