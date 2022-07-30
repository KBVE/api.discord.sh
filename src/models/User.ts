import {
  Model, Schema, model, Document
} from 'mongoose';

export interface LoginActivity {
  ipAddress: string
  browserAgent: string
  timestamp: Date
  strategy: string
}

export interface IUser extends Document {
  username: string
  email: string
  twitterId: string
  googleId: string
  facebookId: string
  discordId: string
  githubId: string
  steamId: string

  loginActivity: [LoginActivity]

  createdAt: Date
  updatedAt: Date
}

interface IUserModel extends Model<IUser> { }

const schema = new Schema<IUser>({
  username: { type: String, index: true, required: true },
  email: { type: String, required: true },
  twitterId: { type: String },
  googleId: { type: String },
  facebookId: { type: String },
  discordId: { type: String },
  githubId: { type: String },
  steamId: { type: String },
  loginActivity: [{
    ipAddress: { type: String, required: true },
    browserAgent: { type: String, required: true },
    timestamp: { type: Date, required: true },
    strategy: { type: String, required: true },
  }],
}, { timestamps: true });

const User: IUserModel = model<IUser, IUserModel>('User', schema);

export default User;
