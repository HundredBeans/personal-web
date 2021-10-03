import { Container } from '@chakra-ui/react';
import { Hero } from '../components/Hero';

const Index = () => {
  const TextChildren = () => (
    <>
      I am a <b>Software Engineer</b>, <b>Web Developer</b>, and a <b>Lifelong Learner</b> with a
      background of <b>Petroleum and Geothermal Engineering</b>.
    </>
  );
  return (
    <Container>
      <Hero headingText="Hello There!" textChildren={<TextChildren />} height="100vh"></Hero>
    </Container>
  );
};

export default Index;
