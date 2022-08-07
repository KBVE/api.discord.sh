//** Passport Libraries */
import passport from 'passport'
import passportJwt from 'passport-jwt'

//** User Model */
import User from '../../models/User';

const JwtStrategy = passportJwt.Strategy
const ExtractJwt = passportJwt.ExtractJwt

let jwt_key: string = process.env.JWT_SECRET
  ? process.env.JWT_SECRET
  : 'secret';

passport.use(
  new JwtStrategy(
    {
      secretOrKey: jwt_key,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

    },
    async (jwtToken, done) => {
      try {
        console.log(JSON.stringify(jwtToken))
        let userId = jwtToken.userId.toLowerCase()
        // User.findOne({ Email: jwtToken.email.toLowerCase() }, function (err, user) {   if (err) {      return done(err, false)   }            if (user) {     return done(undefined, user, jwtToken)            } else {        return done(undefined, false)   }          })        
        let user = await User.findById({ userId })
        if (!user) {
          return done(undefined, false, { message: 'UserId was not found' })
        }
        return done(undefined, user, jwtToken)
      } catch (error) {
        return done(error);
      }
    }
  ))

