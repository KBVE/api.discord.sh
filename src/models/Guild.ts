import {
  Model, Schema, model, Document, PopulatedDoc
} from 'mongoose';
import { ISocialLinks } from './SocialLinks'

export interface Guild {
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

  /** Timestamp */
  createdAt: Date;
  updatedAt: Date;
}

interface GuildModel extends Model<Guild> { }

const schema = new Schema<Guild>({
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
  Platform: Schema.Types.String
}, { timestamps: true });

const Guild: GuildModel = model<Guild, GuildModel>('Guild', schema);

export default Guild;
