import { Container } from '@chakra-ui/react';
import { Hero } from '../components/Hero';
import Head from 'next/head';

const Index = () => {
  const TextChildren = () => (
    <>
      I am a <b>Software Engineer</b>, <b>Web Developer</b>, and a <b>Lifelong Learner</b> with a
      background of <b>Petroleum and Geothermal Engineering</b>.
    </>
  );
  return (
    <>
      <Head>
        <title>Author&apos;s Home • Hundred Beans</title>
      </Head>
      <Container>
        <Hero headingText="Hello There!" textChildren={<TextChildren />} height="100vh"></Hero>
      </Container>
    </>
  );
};

export default Index;
