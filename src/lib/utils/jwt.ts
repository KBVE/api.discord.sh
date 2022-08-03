import { sign, SignOptions } from 'jsonwebtoken';
import * as fs from 'fs';
import * as path from 'path';

export default function  generateToken() {
    const payload = {
        name: 'Andrés Reales',
        userId: 123,
        accessTypes: [
          'getTeams',
          'addTeams',
          'updateTeams',
          'deleteTeams'
        ]
      };
      
      // read private key value
      
      // let privateKey: string = (process.env.JWT_PRIVATE_KEY as string);
      // privateKey = Buffer.from((process.env.JWT_PRIVATE_KEY as string), 'base64').toString('ascii');
     //   var base64key: string = (process.env.JWT_PRIVATE_KEY as string);
     //   let buff = Buffer.from(base64key, 'base64');
     //   let privateKey = buff.toString('ascii');
     const privateKey = fs.readFileSync(path.join(__dirname, './../../../private.key'));

      const signInOptions: SignOptions = {
        // RS256 uses a public/private key pair. The API provides the private key
        // to generate the JWT. The client gets a public key to validate the
        // signature
        algorithm: 'RS256',
        expiresIn: '1h'
      };
    
      // generate JWT
      return sign(payload, privateKey, signInOptions);
};