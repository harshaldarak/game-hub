import { Card, CardBody, Skeleton } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width='280px' borderRadius={10} overflow='hidden'>
      <Skeleton height='260px' />
      <CardBody>
        <Skeleton />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
