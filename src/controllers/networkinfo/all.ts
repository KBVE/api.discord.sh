import { RequestHandler } from 'express';
import requestMiddleware from '../../middleware/request-middleware';
import NetworkInfo from '../../models/NetworkInfo';

// ** Call -> "All" of NetworkInfo

const all: RequestHandler = async (req, res) => {
    const networks = await NetworkInfo.find();
    res.send({ networks });
}

export default requestMiddleware(all, { protected : true });