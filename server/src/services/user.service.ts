import User from "../models/user.model";

export const saveGitHubUser = async (
  githubUser: any,
  accessToken: string
) => {
  const existingUser = await User.findOne({
    githubId: githubUser.id,
  });

  if (existingUser) {
    existingUser.accessToken = accessToken;
    existingUser.username = githubUser.login;
    existingUser.name = githubUser.name || "";
    existingUser.email = githubUser.email || "";
    existingUser.avatarUrl = githubUser.avatar_url;

    await existingUser.save();

    return existingUser;
  }

  const newUser = await User.create({
    githubId: githubUser.id,
    username: githubUser.login,
    name: githubUser.name || "",
    email: githubUser.email || "",
    avatarUrl: githubUser.avatar_url,
    accessToken,
  });

  return newUser;
};