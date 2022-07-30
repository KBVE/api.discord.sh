import { Request, RequestHandler } from 'express';
import Joi from 'joi';
import requestMiddleware from '../../middleware/request-middleware';
import Guild from '../../models/Guild';

export const addGuildSchema = Joi.object().keys({
  guildid: Joi.string().min(18).max(18).required(),
  Email: Joi.string().min(3).email().required()
});

interface AddReqBody {
  guildid: string;
  Email: string;
}

const add: RequestHandler = async (req: Request<{}, {}, AddReqBody>, res) => {
  const { guildid, Email } = req.body;
  const GuildId = Number(guildid);
  const guild = new Guild({ GuildId, Email });
  await guild.save();

  res.send({
    message: 'Saved Guild',
    guild: guild.toJSON()
  });
};

export default requestMiddleware(add, { validation: { body: addGuildSchema } });
