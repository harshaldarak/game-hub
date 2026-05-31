import { useQuery } from "@tanstack/react-query";
import { scrrenshots } from "../entities/Scrrenshots";
import APIClient from "../services/api-client";
const useScrrenshots = (gameId: number) => {
  const apiClient = new APIClient<scrrenshots>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["game-scrrenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScrrenshots;
