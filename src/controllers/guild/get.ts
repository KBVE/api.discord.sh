import { Request, RequestHandler } from 'express';
import requestMiddleware from '../../middleware/request-middleware';
import Guild from '../../models/Guild';
import logger from '../../logger';

const get: RequestHandler = async (req: Request, res) => {
  const { guildId } = req.params;
  logger.silly(`Guild to get: ${guildId}`);

  const guild = await Guild.findById(guildId);
  if (!guild) {
    return res.status(404).send({
      error: 'Guild not found'
    });
  }

  return res.status(200).send({
    guild: guild.toJSON()
  });
};

export default requestMiddleware(get);
