import { RequestHandler } from 'express';
import requestMiddleware from '../../middleware/request-middleware';
import User from '../../models/User';

// ** Call -> "All" of Users

const all: RequestHandler = async (req, res) => {
    const users = await User.find();
    res.send({ users });
}

export default requestMiddleware(all);
