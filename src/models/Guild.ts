import {
  Model, Schema, model, Document, PopulatedDoc
} from 'mongoose';
import { ISocialLinks } from './SocialLinks'

export interface IGuild {
  GuildId: number;
  LastVote: number | Date;
  MonthlyTotalVote: number;
  LastMonthTotalVote: number;
  GuildToken: number;
  MemberCount: number;
  WebsiteURL: string;
  Tags: string[];
  Languages: string[];
  Verified: boolean; 
  Blacklisted: boolean;
  SocialLinks: PopulatedDoc<ISocialLinks>;
  NSFWLevel: number;
  Private: boolean;
  ApplicationFormURL: string;
  Type: string;
  Platform: string;

  /** Email - We should keep it private */
  Email: string;

  /** Timestamp */
  createdAt: Date;
  updatedAt: Date;
}

interface IGuildModel extends Model<IGuild> { }

const schema = new Schema<IGuild>({
  GuildId: { type: Schema.Types.Number, required: true },
  LastVote: Schema.Types.Number,
  MonthlyTotalVote: Schema.Types.Number,
  GuildToken: Schema.Types.Number,
  MemberCount: Schema.Types.Number,
  WebsiteURL: Schema.Types.String,
  Tags: [Schema.Types.String],
  Languages: [Schema.Types.String],
  Verified: Schema.Types.Boolean,
  Blacklisted: Schema.Types.Boolean,
  SocialLinks: { type: Schema.Types.ObjectId, ref: 'SocialLink' },
  NSFWLevel: Schema.Types.Number,
  Private: Schema.Types.Boolean,
  ApplicationFormURL: Schema.Types.String,
  Type: Schema.Types.String,
  Platform: Schema.Types.String, 
  /** Email - We should keep it private */ 
  Email: Schema.Types.String
}, { timestamps: true });

const Guild: IGuildModel = model<IGuild, IGuildModel>('Guild', schema);

export default Guild;
