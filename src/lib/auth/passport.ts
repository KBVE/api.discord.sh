//** Passport Libraries */
import passport from 'passport'
import passportJwt from 'passport-jwt'

//** User Model */
import User from '../../models/User';

let jwt_key = process.env.JWT_SECRET as string;
  if( jwt_key === 'undefined')  { jwt_key = 'secret' }