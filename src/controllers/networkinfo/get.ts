import { Request, RequestHandler } from 'express';
import requestMiddleware from '../../middleware/request-middleware';
import NetworkInfo from '../../models/NetworkInfo';
import logger from '../../logger';

const get: RequestHandler = async (req: Request, res) => {
  const { NetworkInfoId } = req.params;
  logger.silly(`NetworkInfo to get: ${NetworkInfoId}`);

  const networkinfo = await NetworkInfo.findById(NetworkInfoId);
  if (!networkinfo) {
    return res.status(404).send({
      error: 'NetworkInfo not found'
    });
  }

  return res.status(200).send({
    networkinfo: networkinfo.toJSON()
  });
};

export default requestMiddleware(get);
