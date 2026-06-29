import getGitHubClient from "./githubClient.service";

interface CreateWebhookInput {
  owner: string;
  repo: string;
  userId: string;
}

export const createGitHubWebhook = async ({
  owner,
  repo,
  userId,
}: CreateWebhookInput) => {
  const { octokit } = await getGitHubClient(userId);

  const webhook = await octokit.rest.repos.createWebhook({
    owner,
    repo,
    config: {
      url: `${process.env.WEBHOOK_BASE_URL}/api/webhooks/github`,
      content_type: "json",
      secret: process.env.GITHUB_WEBHOOK_SECRET!,
      insecure_ssl: "0",
    },
    events: [
      "issues",
      "pull_request",
      "push",
    ],
    active: true,
  });

  return webhook.data;
};