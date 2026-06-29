import { Schema, model, Document } from "mongoose";

export interface IAction extends Document {
  eventId: string;
  actionType: string;
  status: string;
  details?: string;
}

const actionSchema = new Schema<IAction>(
  {
    eventId: {
      type: String,
      required: true,
    },

    actionType: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: [
        "SUCCESS",
        "FAILED",
      ],
      required: true,
    },

    details: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default model<IAction>(
  "Action",
  actionSchema
);