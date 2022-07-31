/**
 * TODO: Implement passport strategies for each of the ID types in the User schema
 */
import { Request } from 'express'

const authMiddleware = (req: Request) => {
  req.auth = undefined
  return req
}

export default authMiddleware