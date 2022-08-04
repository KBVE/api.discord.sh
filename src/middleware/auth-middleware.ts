/**
 * TODO: Implement passport strategies for each of the ID types in the User schema
 */
import { Request, RequestHandler} from 'express'

//** Passport Libraries */
import passport from 'passport'
import passportJwt from 'passport-jwt'


const authMiddleware = (req: Request) => {
  req.auth = undefined
  return req
}

const pass_jwt = (req: Request) => {

  return req
}



export default authMiddleware;