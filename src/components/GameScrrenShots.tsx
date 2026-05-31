import { Image, SimpleGrid } from "@chakra-ui/react";
import useScrrenshots from "../hooks/useScrrenshots";

interface Props {
  gameId: number;
}
const GameScrrenShots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScrrenshots(gameId);
  if (isLoading) return null;
  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScrrenShots;
