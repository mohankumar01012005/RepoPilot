import api from "../lib/api";

export const getDashboardStats = async () => {
  const { data } = await api.get("/dashboard/stats");
  return data.stats;
};

export const getDashboardEvents = async () => {
  const { data } = await api.get("/dashboard/events");
  return data.events;
};

export const getDashboardActions = async () => {
  const { data } = await api.get("/dashboard/actions");
  return data.actions;
};

export const getDashboardRepositories = async () => {
  const { data } = await api.get(
    "/dashboard/repositories"
  );

  return data.repositories;
};