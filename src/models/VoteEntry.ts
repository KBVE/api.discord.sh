import {
  Model, Schema, model, Document, PopulatedDoc
} from 'mongoose';
import { IUser } from './User'
import { IGuild } from './Guild'
import { INetworkInfo } from './NetworkInfo'

export interface IVoteEntry extends Document {
  User: PopulatedDoc<IUser>
  Guild: PopulatedDoc<IGuild>
  VoteEvent: string
  NetworkInfo: PopulatedDoc<INetworkInfo>

  createdAt: Date
  updatedAt: Date
}

interface IVoteEntryModel extends Model<IVoteEntry> { }

const schema = new Schema<IVoteEntry>({
  User: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  Guild: {
    type: Schema.Types.ObjectId,
    ref: 'Guild',
    required: true
  },
  VoteEvent: String,
  NetworkInfo: {
    type: Schema.Types.ObjectId,
    ref: 'NetworkInfo',
    required: true
  }
}, { timestamps: true });

const VoteEntry: IVoteEntryModel = model<IVoteEntry, IVoteEntryModel>('VoteEntry', schema);

export default VoteEntry;
