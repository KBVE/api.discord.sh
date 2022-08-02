import { Request, RequestHandler } from 'express';
import requestMiddleware from '../../middleware/request-middleware';
import User from '../../models/User';

/**
 * Builds a mongoose query object to search users according to user variables.
 * @param UserId Created by MongoDB
 * @param Username String containing the username
 * @param Email String containing the user's email
 * @param TwitterId Taken from Twitter
 * @param GoogleId Taken from Google
 * @param FacebookId Taken from Facebook
 * @param DiscordId Taken from Discord
 * @param GithubId Taken from Github
 * @param SteamId Taken from Steam
 */
const buildUserSeachQuery = (
  UserId?: string,
  Username?: string,
  Email?: string,
  TwitterId?: string,
  GoogleId?: string,
  FacebookId?: string,
  DiscordId?: string,
  GithubId?: string,
  SteamId?: string,
): { [key: string]: any } => {
  const query: any = {};
  if (UserId) {
    query._id = UserId
  }
  if (Username) {
    query.Username = new RegExp(`.*${Username}.*`, 'i');
  }
  if (Email) {
    query.Email = new RegExp(`.*${Email}.*`, 'i');
  }
  if (TwitterId) {
    query.TwitterId = TwitterId
  }
  if (GoogleId) {
    query.GoogleId = GoogleId
  }
  if (FacebookId) {
    query.FacebookId = FacebookId
  }
  if (DiscordId) {
    query.DiscordId = DiscordId
  }
  if (GithubId) {
    query.GithubId = GithubId
  }
  if (SteamId) {
    query.SteamId = SteamId
  }

  return query;
};

interface SearchReqBody {
  UserId?: string,
  Username?: string,
  Email?: string,
  TwitterId?: string,
  GoogleId?: string,
  FacebookId?: string,
  DiscordId?: string,
  GithubId?: string,
  SteamId?: string,
}

const search: RequestHandler = async (req: Request<{}, {}, {}, SearchReqBody>, res) => {
  const {
    UserId: UserId,
    Username: Username,
    Email: Email,
    TwitterId: TwitterId,
    GoogleId: GoogleId,
    FacebookId: FacebookId,
    DiscordId: DiscordId,
    GithubId: GithubId,
    SteamId: SteamId,
  } = req.query;

  const query = buildUserSeachQuery(UserId, Username, Email, TwitterId, GoogleId, FacebookId, DiscordId, GithubId, SteamId);
  const users = await User.find(query).lean();
  res.send({ users });
};

export default requestMiddleware(search);
