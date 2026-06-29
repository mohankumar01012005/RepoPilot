import { Octokit } from "@octokit/rest";
import User from "../models/user.model";

const getGitHubClient = async (userId: string) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  const octokit = new Octokit({
    auth: user.accessToken,
  });

  return {
    octokit,
    githubUser: user,
  };
};

export default getGitHubClient;