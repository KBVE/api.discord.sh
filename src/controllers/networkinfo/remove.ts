import { Request, RequestHandler } from 'express';
import requestMiddleware from '../../middleware/request-middleware';
import NetworkInfo from '../../models/NetworkInfo';

const remove: RequestHandler = async (req: Request, res) => {
  const { NetworkInfoId } = req.params;

  const networkinfo = await NetworkInfo.findById(NetworkInfoId);
  if (!networkinfo) {
    return res.status(404).send({
      error: 'NetworkInfo not found'
    });
  }

  await networkinfo.delete();
  return res.status(204).send();
};

export default requestMiddleware(remove);
