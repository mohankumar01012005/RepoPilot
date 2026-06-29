import { Request, Response } from "express";
import { getGitHubAccessToken } from "../services/github.service";
import {
  getGitHubUser,
} from "../services/github.service";
import { saveGitHubUser } from "../services/user.service";
import generateToken from "../utils/generateToken";
export const githubLogin = (req: Request, res: Response): void => {
  const params = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID!,
    redirect_uri: process.env.GITHUB_CALLBACK_URL!,
    scope: "read:user user:email repo",
  });

  const githubAuthURL = `https://github.com/login/oauth/authorize?${params.toString()}`;

  res.redirect(githubAuthURL);
};
export const githubCallback = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { code } = req.query;

    if (!code || typeof code !== "string") {
      res.status(400).json({
        success: false,
        message: "Authorization code not found.",
      });

      return;
    }

    const tokenResponse = await getGitHubAccessToken(code);

    const githubUser = await getGitHubUser(
  tokenResponse.access_token
);

const user = await saveGitHubUser(
  githubUser,
  tokenResponse.access_token
);

const token = generateToken(user.id);

   res.status(200).json({
  success: true,
  message: "Login Successful",
  token,
  user: {
    id: user.id,
    githubId: user.githubId,
    username: user.username,
    name: user.name,
    email: user.email,
    avatarUrl: user.avatarUrl,
  },
});
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "GitHub authentication failed.",
    });
  }
};