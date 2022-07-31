import {
    Model, Schema, model, Document
  } from 'mongoose';

  // ** Remove Timestamp: Date? Because we have timestamps at line 21, which creates the "CreatedAt?"

  export interface INetworkInfo {
    IPAddress: string
    BrowserAgent: string
    Strategy: string

    createdAt: Date
    updatedAt: Date
  }

  interface INetworkInfoModel extends Model<INetworkInfo> { }

  const schema = new Schema<INetworkInfo>({
    IPAddress: { type: Schema.Types.String, index: true, required: true},
    BrowserAgent: { type: Schema.Types.String },
    Strategy: { type: Schema.Types.String }

  }, { timestamps: true });

  const NetworkInfo: INetworkInfoModel = model<INetworkInfo, INetworkInfoModel>('NetworkInfo', schema);

  export default NetworkInfo;