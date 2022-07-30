import {
  Model, Schema, model, Document, PopulatedDoc
} from 'mongoose';
import { IUser } from './User'
import { IGuild } from './Guild'

export interface IUserProfile extends Document {
  user: PopulatedDoc<IUser>

  credits: number
  attributedGuild: PopulatedDoc<IGuild>

  createdAt: Date
  updatedAt: Date
}

interface IUserProfileModel extends Model<IUserProfile> { }


const schema = new Schema<IUserProfile>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    required: true
  },
  credits: {
    type: Number,
    default: 0
  },
  attributedGuild: {
    type: Schema.Types.ObjectId,
    ref: 'Guild'
  }
}, { timestamps: true });

const UserProfile: IUserProfileModel = model<IUserProfile, IUserProfileModel>('UserProfile', schema);

export default UserProfile;
