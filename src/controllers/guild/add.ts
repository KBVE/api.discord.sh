import { Request, RequestHandler } from 'express';
import Joi from 'joi';
import requestMiddleware from '../../middleware/request-middleware';
import Guild from '../../models/Guild';

export const addGuildSchema = Joi.object().keys({
    GuildId: Joi.number().required(),
    author: Joi.string().required()
});

interface AddReqBody {
  GuildId: string;
  author: string;
}

const add: RequestHandler = async (req: Request<{}, {}, AddReqBody>, res) => {
  const { GuildId, author } = req.body;

  const guild = new Guild({ GuildId, author });
  await guild.save();

  res.send({
    message: 'Saved',
    guild: guild.toJSON()
  });
};

export default requestMiddleware(add, { validation: { body: addGuildSchema } });
