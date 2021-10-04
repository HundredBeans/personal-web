import {
  Box,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack
} from '@chakra-ui/react';

const ProjectModal = ({ isOpen, onClose, title, content }) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} scrollBehavior="inside" isCentered>
      <ModalOverlay />
      <ModalContent maxWidth="600">
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{content}</ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export const ProjectCard = ({ title, description, content, ...boxProps }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        as="button"
        shadow="md"
        borderWidth="1px"
        borderRadius="lg"
        p={5}
        {...boxProps}
        onClick={onOpen}>
        <VStack textAlign="left" alignItems="start" width="100%">
          <Heading width="250px">{title}</Heading>
          <Text>{description}</Text>
        </VStack>
      </Box>
      <ProjectModal title={title} isOpen={isOpen} onClose={onClose} content={content} />
    </>
  );
};
