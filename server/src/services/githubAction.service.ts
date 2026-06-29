import getGitHubClient from "./githubClient.service";

interface AddLabelInput {
  userId: string;
  owner: string;
  repo: string;
  issueNumber: number;
  labels: string[];
}

export const addLabelsToIssue = async (
  data: AddLabelInput
) => {
  const { octokit } = await getGitHubClient(data.userId);

  const response =
    await octokit.rest.issues.addLabels({
      owner: data.owner,
      repo: data.repo,
      issue_number: data.issueNumber,
      labels: data.labels,
    });

  return response.data;
};

interface CommentInput {
  userId: string;
  owner: string;
  repo: string;
  issueNumber: number;
  body: string;
}

export const addCommentToIssue = async (
  data: CommentInput
) => {
  const { octokit } = await getGitHubClient(data.userId);

  const response =
    await octokit.rest.issues.createComment({
      owner: data.owner,
      repo: data.repo,
      issue_number: data.issueNumber,
      body: data.body,
    });

  return response.data;
};