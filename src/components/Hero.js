import { Flex, Container, Text, Heading, VStack } from '@chakra-ui/react';

export const Hero = ({ headingText, textChildren, children, ...flexProps }) => {
  return (
    <Container maxW="3xl">
      <Flex justifyContent="center" alignItems="center" {...flexProps}>
        <VStack>
          <Heading
            py={5}
            fontSize="5xl"
            textAlign="center"
            fontFamily="heading"
            fontWeight="extrabold">
            {headingText}
          </Heading>
          <Text fontSize="xl" textAlign="center">
            {textChildren}
          </Text>
          {children}
        </VStack>
      </Flex>
    </Container>
  );
};
