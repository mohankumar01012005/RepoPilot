import { Response } from "express";
import User from "../models/user.model";
import { AuthRequest } from "../middlewares/auth.middleware";
import { getUserRepositories } from "../services/github.service";
import { connectRepository } from "../services/repository.service";
import getGitHubClient from "../services/githubClient.service";
import { createGitHubWebhook } from "../services/webhook.service";
import { updateWebhookId } from "../services/repository.service";
export const getRepositories = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });

      return;
    }

    const repositories = await getUserRepositories(
      user.accessToken
    );

    res.status(200).json({
      success: true,
      repositories,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch repositories",
    });
  }
};

export const connectUserRepository = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const { owner, repo } = req.body;

    const { octokit } = await getGitHubClient(req.userId!);

    const response = await octokit.rest.repos.get({
      owner,
      repo,
    });

    const repository = response.data;

   const connectedRepository =
  await connectRepository({
    githubRepoId: repository.id,
    name: repository.name,
    fullName: repository.full_name,
    owner: repository.owner.login,
    defaultBranch: repository.default_branch,
    userId: req.userId!,
  });

const webhook = await createGitHubWebhook({
  owner,
  repo,
  userId: req.userId!,
});

const updatedRepository =
  await updateWebhookId(
    connectedRepository._id.toString(),
    webhook.id
  );

res.status(201).json({
  success: true,
  message: "Repository connected successfully.",
  repository: updatedRepository,
  webhook,
});
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to connect repository.",
    });
  }
};