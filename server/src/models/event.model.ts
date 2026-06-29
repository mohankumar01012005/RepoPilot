import { Schema, model, Document } from "mongoose";

export interface IEvent extends Document {
  githubEvent: string;
  action: string;
  deliveryId: string;
  repository: string;
  payload: Record<string, any>;
  processed: boolean;
}

const eventSchema = new Schema<IEvent>(
  {
    githubEvent: {
      type: String,
      required: true,
    },

    action: {
      type: String,
      default: "",
    },

    deliveryId: {
      type: String,
      required: true,
      unique: true,
    },

    repository: {
  type: String,
  required: false,
},

    payload: {
      type: Schema.Types.Mixed,
      required: true,
    },

    processed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IEvent>(
  "Event",
  eventSchema
);