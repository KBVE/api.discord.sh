import {
  Model, Schema, model, Document, PopulatedDoc
} from 'mongoose';
import { IUser } from './User'
import { IGuild } from './Guild'

export interface IVoteEntry extends Document {
  user: PopulatedDoc<IUser>
  guild: PopulatedDoc<IGuild>
  voteEvent: string
  networkInfo: object

  createdAt: Date
  updatedAt: Date
}

interface IVoteEntryModel extends Model<IVoteEntry> { }

const schema = new Schema<IVoteEntry>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  guild: {
    type: Schema.Types.ObjectId,
    ref: 'Guild',
    required: true
  },
  voteEvent: String,
  networkInfo: Schema.Types.Mixed
}, { timestamps: true });

const VoteEntry: IVoteEntryModel = model<IVoteEntry, IVoteEntryModel>('VoteEntry', schema);

export default VoteEntry;
