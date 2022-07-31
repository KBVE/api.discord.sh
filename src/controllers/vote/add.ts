import { Request, RequestHandler } from 'express';
import Joi from 'joi';
import requestMiddleware from '../../middleware/request-middleware';
import VoteEntry from '../../models/VoteEntry';

/** Add -> VoteEntry (Schema) -> Joi */
export const addVoteEntrySchema = Joi.object().keys({
    GuildId: Joi.string().default('guest'),
 
})

/** (Interface) AddReqBody ~> VoteEntry */
interface AddReqBody {
    GuildId: string
}

const add: RequestHandler = async (req: Request <{}, {}, AddReqBody>, res) => {
    const {
        GuildId
    } = req.body;

    // Check if IP Voted before, if they did, return error

    //

    /** Approved Vote */

    const voteentry = new VoteEntry({
        GuildId
    });
    await voteentry.save();

    res.send({ 
        message: 'Saved Vote ',
        voteentry: voteentry.toJSON()
    });
};

export default requestMiddleware(add, { validation: { body: addVoteEntrySchema }});
