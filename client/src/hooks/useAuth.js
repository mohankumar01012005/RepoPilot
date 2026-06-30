import { useQuery } from "@tanstack/react-query";

import {
  getCurrentUser,
} from "../services/authService";

export const useCurrentUser = () =>
  useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
  });