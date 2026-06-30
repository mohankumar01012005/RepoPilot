import api from "../lib/api";

export const getRepositories =
  async () => {
    const { data } = await api.get(
      "/dashboard/repositories"
    );

    return data.repositories;
  };