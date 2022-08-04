import passport from 'passport'
import passportJwt from 'passport-jwt'



let jwt_key = process.env.JWT_SECRET as string;
  if( jwt_key === 'undefined')  { jwt_key = 'secret' }