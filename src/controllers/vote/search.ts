import { Request, RequestHandler } from 'express';
import requestMiddleware from '../../middleware/request-middleware';
import VoteEntry from '../../models/VoteEntry';

/**
 * Builds a mongoose query object to search VoteEntry according to Vote Entry variables.
 * @param VoteEntryId String containing the VoteEntryId
 * @param GuildId String containing the guild id
 */
const buildVoteEntrySeachQuery = (VoteEntryId?: string, GuildId?: string): { [key: string]: any } => {
  const query: any = {};
  if (VoteEntryId) {
    query.VoteEntryId = new RegExp(`.*${VoteEntryId}.*`, 'i');
  }
  if (GuildId) {
    query.GuildId = new RegExp(`.*${GuildId}.*`, 'i');
  }

  return query;
};

interface SearchReqBody {
    VoteEntryId?: string;
    GuildId?: string;
}

const search: RequestHandler = async (req: Request<{}, {}, {}, SearchReqBody>, res) => {
  const { VoteEntryId: VoteEntryId, GuildId: GuildId } = req.query;

  const query = buildVoteEntrySeachQuery(VoteEntryId, GuildId);
  const voteenrty = await VoteEntry.find(query);
  res.send({ voteenrty });
};

export default requestMiddleware(search);
