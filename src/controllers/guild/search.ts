import { Request, RequestHandler } from 'express';
import requestMiddleware from '../../middleware/request-middleware';
import Guild from '../../models/Guild';

/**
 * Builds a mongoose query object to search guilds according to guild variables.
 * @param GuildId String containing the guild id
 * @param Email String containing the guild email
 */
const buildGuildSeachQuery = (GuildId?: string, Email?: string): { [key: string]: any } => {
  const query: any = {};
  if (GuildId) {
    query.GuildId = new RegExp(`.*${GuildId}.*`, 'i');
  }
  if (Email) {
    query.Email = new RegExp(`.*${Email}.*`, 'i');
  }

  return query;
};

interface SearchReqBody {
  GuildId?: string;
  Email?: string;
}

const search: RequestHandler = async (req: Request<{}, {}, {}, SearchReqBody>, res) => {
  const { GuildId: GuildId, Email: Email } = req.query;

  const query = buildGuildSeachQuery(GuildId, Email);
  const guilds = await Guild.find(query);
  res.send({ guilds });
};

export default requestMiddleware(search);
