import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  githubId: number;
  username: string;
  name?: string;
  email?: string;
  avatarUrl: string;
  accessToken: string;
}

const userSchema = new Schema<IUser>(
  {
    githubId: {
      type: Number,
      required: true,
      unique: true,
    },

    username: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      default: "",
    },

    avatarUrl: {
      type: String,
      required: true,
    },

    accessToken: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IUser>("User", userSchema);