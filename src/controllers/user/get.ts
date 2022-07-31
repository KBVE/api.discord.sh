import { Request, RequestHandler } from 'express';
import requestMiddleware from '../../middleware/request-middleware';
import User from '../../models/User';
import logger from '../../logger';

const get: RequestHandler = async (req: Request, res) => {
  const { userId } = req.params;
  logger.silly(`User to get: ${userId}`);

  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).send({
      error: 'User not found'
    });
  }

  return res.status(200).send({
    user: user.toJSON()
  });
};

export default requestMiddleware(get);
