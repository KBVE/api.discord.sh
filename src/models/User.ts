import {
  Model, Schema, model, Document
} from 'mongoose';

export interface LoginActivity {
  IPAddress: string
  BrowserAgent: string
  Timestamp: Date
  Strategy: string
}

export interface IUser extends Document {
  Username: string
  Email: string
  TwitterId: string
  GoogleId: string
  FacebookId: string
  DiscordId: string
  GithubId: string
  SteamId: string

  LoginActivity: [LoginActivity]

  createdAt: Date
  updatedAt: Date
}

interface IUserModel extends Model<IUser> { }

const schema = new Schema<IUser>({
  Username: { type: String, index: true, required: true },
  Email: { type: String, required: true },
  TwitterId: { type: String },
  GoogleId: { type: String },
  FacebookId: { type: String },
  DiscordId: { type: String },
  GithubId: { type: String },
  SteamId: { type: String },
  LoginActivity: [{
    IPAddress: { type: String, required: true },
    BrowserAgent: { type: String, required: true },
    Timestamp: { type: Date, required: true },
    Strategy: { type: String, required: true },
  }],
}, { timestamps: true });

const User: IUserModel = model<IUser, IUserModel>('User', schema);

export default User;
