import { Stack } from '@chakra-ui/react';
import { ProjectCard } from './ProjectCard';

export const ProjectList = ({ projects }) => {
  return (
    <Stack paddingY="24px" spacing="20px" overflowX="auto" maxWidth="90vw" align="start">
      {projects.map((item, index) => (
        <ProjectCard
          key={index}
          title={item.title}
          description={item.description}
          content={item.content}
          width="100%"
        />
      ))}
    </Stack>
  );
};
