import {
    Model, Schema, model, Document
} from 'mongoose';

export interface ISocialLinks extends Document {
    /** Twitter */
    Twitter: string;
    /** Reddit */
    Reddit: string;
    /** Telegram */
    Telegram: string;
    /** TikTok */
    TikTok: string;
    /** Instagram */
    Instagram: string;
    /** Facebook */
    Facebook: string;
    /** YouTube */
    YouTube: string;
}


interface SocialLinksModel extends Model<ISocialLinks> { }

const schema = new Schema<ISocialLinks>({
  Twitter: { type: Schema.Types.String },
  Reddit: { type: Schema.Types.String },
  Telegram: { type: Schema.Types.String },
  TikTok: { type: Schema.Types.String },
  Instagram: { type: Schema.Types.String },
  Facebook: { type: Schema.Types.String },
  YouTube: { type: Schema.Types.String }
});

const SocialLinks: SocialLinksModel = model<ISocialLinks, SocialLinksModel>('SocialLinks', schema);

export default SocialLinks;
