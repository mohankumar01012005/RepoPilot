import { Schema, model, Document, Types } from "mongoose";

export interface IRepository extends Document {
  githubRepoId: number;
  name: string;
  fullName: string;
  owner: string;
  defaultBranch: string;
  webhookId?: number;
  isActive: boolean;
  user: Types.ObjectId;
}

const repositorySchema = new Schema<IRepository>(
  {
    githubRepoId: {
      type: Number,
      required: true,
      unique: true,
    },

    name: {
      type: String,
      required: true,
    },

    fullName: {
      type: String,
      required: true,
    },

    owner: {
      type: String,
      required: true,
    },

    defaultBranch: {
      type: String,
      required: true,
    },

    webhookId: {
      type: Number,
      default: null,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IRepository>(
  "Repository",
  repositorySchema
);