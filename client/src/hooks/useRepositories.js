import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getRepositories,
  connectRepository,
} from "../services/repositoriesService";

export const useRepositories = () =>
  useQuery({
    queryKey: ["repositories"],
    queryFn: getRepositories,
  });

export const useConnectRepository = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: connectRepository,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["repositories"],
      });

      queryClient.invalidateQueries({
        queryKey: ["dashboardRepositories"],
      });

      queryClient.invalidateQueries({
        queryKey: ["dashboardStats"],
      });
    },
  });
};