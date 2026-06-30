import { useQuery } from "@tanstack/react-query";

import {
  getDashboardStats,
  getDashboardEvents,
  getDashboardActions,
  getDashboardRepositories,
} from "../services/dashboardService";

export const useDashboardStats = () =>
  useQuery({
    queryKey: ["dashboardStats"],
    queryFn: getDashboardStats,
  });

export const useDashboardEvents = () =>
  useQuery({
    queryKey: ["dashboardEvents"],
    queryFn: getDashboardEvents,
  });

export const useDashboardActions = () =>
  useQuery({
    queryKey: ["dashboardActions"],
    queryFn: getDashboardActions,
    refetchInterval: 5000,
  });

export const useDashboardRepositories = () =>
  useQuery({
    queryKey: ["dashboardRepositories"],
    queryFn: getDashboardRepositories,
  });