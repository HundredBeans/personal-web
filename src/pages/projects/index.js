import { Container, Text } from '@chakra-ui/react';
import { Fragment } from 'react';
import { OffsetHeader } from '../../components/header/OffsetHeader';
import { Hero } from '../../components/Hero';
import { ProjectList } from '../../components/projects/ProjectList';
import {
  InvitreeContent,
  MarziContent,
  TukulsaContent,
  YoutubeChatDataset
} from '../../content/projects';
import Head from 'next/head';

const Index = () => {
  const projectList = [
    {
      title: 'Invitree.id',
      description: 'Invitree is a web-based invitation ecosystem.',
      content: <InvitreeContent />
    },
    {
      title: 'Livechat Dataset',
      description: 'Scrape Youtube Livechat data and save it to firestore database.',
      content: <YoutubeChatDataset />
    },
    {
      title: 'Tukulsa',
      description: 'Tukulsa is an online chatbot for pulsa payment inside LINE Chat.',
      content: <TukulsaContent />
    },
    {
      title: 'Bot Marzi',
      description: 'Bot Marzi is a bot that can correct grammar with memes',
      content: <MarziContent />
    }
  ];

  return (
    <Fragment>
      <Head>
        <title>Author&apos;s Projects • Hundred Beans</title>
      </Head>
      <OffsetHeader />
      <Container>
        <Hero headingText="Personal Projects" textChildren="These are my 'finished' projects">
          <ProjectList projects={projectList} />
          <Text fontSize="sm" fontStyle="oblique">
            *This doesn&apos;t includes projects in my workplaces. Which mostly are websites for the
            Singapore Government
          </Text>
        </Hero>
      </Container>
      <OffsetHeader />
    </Fragment>
  );
};

export default Index;
