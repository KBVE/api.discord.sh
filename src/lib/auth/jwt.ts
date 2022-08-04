import { sign, SignOptions, verify, JsonWebTokenError, decode } from 'jsonwebtoken';
import * as fs from 'fs';
import * as path from 'path';


let jwt_key = process.env.JWT_SECRET as string;
  if( jwt_key === 'undefined')  { jwt_key = 'secret' }

// interface JWTData {  userId: string;  }


export function generateToken(userId : string) {

  const signInOptions: SignOptions = {
        algorithm: 'HS256',
        expiresIn: '999h'
      };
    
  return sign({ userId }, jwt_key, signInOptions);
};

// From JSGuru

export const isTokenExpired = (token: string): boolean => {
  try {
      const { exp } = decode(token) as {
          exp: number;
      };
      const expirationDatetimeInSeconds = exp * 1000;

      return Date.now() >= expirationDatetimeInSeconds;
    } catch {
      
    return true;
  }
};

export default function verifyToken( token : string)
{
  var payload;
  try {
    payload = verify(token, jwt_key)
    } catch (e) {
     
    if (e instanceof JsonWebTokenError) {
			
      return false;
    }

    return false;
  }

  return payload;
};

// Reference point of interest -> https://github.com/auth0/jwt-decode/issues/53

