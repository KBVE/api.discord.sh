import { Request, RequestHandler } from 'express';
import requestMiddleware from '../../middleware/request-middleware';
import User from '../../models/User';

const remove: RequestHandler = async (req: Request, res) => {
  const { userId } = req.params;

  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).send({
      error: 'User not found'
    });
  }

  await user.delete();
  return res.status(204).send();
};

export default requestMiddleware(remove, {
  protected: true
});
