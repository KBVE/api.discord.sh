import { Request, RequestHandler } from 'express';
import requestMiddleware from '../../middleware/request-middleware';
import Guild from '../../models/Guild';

const remove: RequestHandler = async (req: Request, res) => {
  const { guildId } = req.params;

  const guild = await Guild.findById(guildId);
  if (!guild) {
    return res.status(404).send({
      error: 'Guild not found'
    });
  }

  await guild.delete();
  return res.status(204).send();
};

export default requestMiddleware(remove);
