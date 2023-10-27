import express from 'express'
import { Login,getUsers, UpdateUser, GetUser, DeleteUser } from '../Controllers/User.js'
import { verifyJwtToken,AuthorizeAdminAccess } from '../middlware/VerifyToken.js'
const Router = express.Router()

Router.get('/users',verifyJwtToken,AuthorizeAdminAccess, getUsers)
Router.put('/:id', verifyJwtToken,AuthorizeAdminAccess, UpdateUser)
Router.delete('/:id', verifyJwtToken,AuthorizeAdminAccess, DeleteUser)
Router.get('/:id', verifyJwtToken,AuthorizeAdminAccess, GetUser)

export default Router