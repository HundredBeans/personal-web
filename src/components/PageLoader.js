import { Flex, Spinner } from '@chakra-ui/react';

export const PageLoader = ({ ...flexProps }) => {
  return (
    <Flex {...flexProps} justifyContent="center" alignItems="center">
      <Spinner size="xl" />
    </Flex>
  );
};
