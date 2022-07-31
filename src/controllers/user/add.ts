import { Request, RequestHandler } from 'express';
import Joi from 'joi';
import requestMiddleware from '../../middleware/request-middleware';
import User from '../../models/User';



export const addUserSchema = Joi.object().keys({
  //userid: Joi.string().min(18).max(18).required(),

  Username: Joi.string().required(),
  Email: Joi.string().required(),
  TwitterId: Joi.string(),
  GoogleId: Joi.string(),
  FacebookId: Joi.string(),
  DiscordId: Joi.string(),
  GithubId: Joi.string(),
  SteamId: Joi.string(),
})

interface AddReqBody {
  Username: string;
  Email: string;
  TwitterId: string;
  GoogleId: string;
  FacebookId: string;
  DiscordId: string;
  GithubId: string;
  SteamId: string;
}

const add: RequestHandler = async (req: Request<{}, {}, AddReqBody>, res) => {
  const {
    Username,
    Email,
    TwitterId,
    GoogleId,
    FacebookId,
    DiscordId,
    GithubId,
    SteamId,
  } = req.body;

  if (!Username || !Email)
    return res.status(422).json({
      error: "Missing Username or Email",
      expected: {
        Username: !!Username,
        Email: !!Email,
        TwitterId: !!TwitterId,
        GoogleId: !!GoogleId,
        FacebookId: !!FacebookId,
        DiscordId: !!DiscordId,
        GithubId: !!GithubId,
        SteamId: !!SteamId,
      }
    })

  if ((Username && Email) && (
    !TwitterId &&
    !GoogleId &&
    !FacebookId &&
    !DiscordId &&
    !GithubId &&
    !SteamId
  )) return res.status(422).json({
      error: "Missing Third Party Authentication ID",
      expected: {
        Username: !!Username,
        Email: !!Email,
        TwitterId: !!TwitterId,
        GoogleId: !!GoogleId,
        FacebookId: !!FacebookId,
        DiscordId: !!DiscordId,
        GithubId: !!GithubId,
        SteamId: !!SteamId,
      }
    })

  const user = new User({
    Username,
    Email,
    TwitterId,
    GoogleId,
    FacebookId,
    DiscordId,
    GithubId,
    SteamId,
  });
  await user.save();

  res.send({
    message: 'Saved User',
    user: user.toJSON()
  });
};

export default requestMiddleware(add, { validation: { body: addUserSchema } });
