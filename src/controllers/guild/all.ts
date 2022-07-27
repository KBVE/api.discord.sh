import { RequestHandler } from 'express';
import requestMiddleware from '../../middleware/request-middleware';
import Guild from '../../models/Guild';

// ** Call -> "All" of Guilds

const all: RequestHandler = async (req, res) => {
    const guilds = await Guild.find();
    res.send({ guilds });
}

export default requestMiddleware(all);
