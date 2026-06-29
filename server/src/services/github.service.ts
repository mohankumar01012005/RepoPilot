import axios from "axios";

export const getGitHubAccessToken = async (code: string) => {
  const response = await axios.post(
    "https://github.com/login/oauth/access_token",
    {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: process.env.GITHUB_CALLBACK_URL,
    },
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  return response.data;
};

export const getGitHubUser = async (accessToken: string) => {
  const response = await axios.get("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/vnd.github+json",
    },
  });

  return response.data;
};

export const getUserRepositories = async (accessToken: string) => {
  const response = await axios.get(
    "https://api.github.com/user/repos",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/vnd.github+json",
      },
      params: {
        sort: "updated",
        per_page: 100,
      },
    }
  );

  return response.data;
};