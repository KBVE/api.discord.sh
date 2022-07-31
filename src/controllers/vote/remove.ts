import { Request, RequestHandler } from 'express';
import requestMiddleware from '../../middleware/request-middleware';
import VoteEntry from '../../models/VoteEntry';

const remove: RequestHandler = async (req: Request, res) => {
  const { VoteEntryId } = req.params;

  const voteentry = await VoteEntry.findById(VoteEntryId);
  if (!voteentry) {
    return res.status(404).send({
      error: 'Vote Entry not found'
    });
  }

  await voteentry.delete();
  return res.status(204).send();
};

export default requestMiddleware(remove);