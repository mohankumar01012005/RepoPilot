import api from "../lib/api";

export const getRepositories = async () => {
  const { data } = await api.get("/repositories");
  return data.repositories;
};

export const connectRepository = async (payload) => {
  const { data } = await api.post(
    "/repositories/connect",
    payload
  );

  return data;
};