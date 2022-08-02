import {
  Model, Schema, model, Document, PopulatedDoc
} from 'mongoose';

import { INetworkInfo } from './NetworkInfo'

export interface IUser extends Document {
  Username: string
  Email: string
  TwitterId: string
  GoogleId: string
  FacebookId: string
  DiscordId: string
  GithubId: string
  SteamId: string

  LoginActivity: [PopulatedDoc<INetworkInfo>]

  createdAt: Date
  updatedAt: Date
}

interface IUserModel extends Model<IUser> { }

const schema = new Schema<IUser>({
  Username: { type: String, required: true },
  Email: { type: String, required: true },
  TwitterId: { type: String },
  GoogleId: { type: String },
  FacebookId: { type: String },
  DiscordId: { type: String },
  GithubId: { type: String },
  SteamId: { type: String },
  LoginActivity: [{
    type: Schema.Types.ObjectId,
    ref: 'NetworkInfo',
  }],
}, { timestamps: true });

const User: IUserModel = model<IUser, IUserModel>('User', schema);

export default User;
