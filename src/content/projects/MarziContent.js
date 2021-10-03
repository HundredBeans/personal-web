import { Box, Button, Collapse, SimpleGrid, Text } from '@chakra-ui/react';
import { SiPython, SiGithub, SiHeroku, SiFlask, SiTwitter } from 'react-icons/si';
import { IconLink } from '../../components/IconLink';
import Image from 'next/image';
import { useState } from 'react';

export const MarziContent = () => {
  const [showGif, setShowGif] = useState(false);
  return (
    <>
      <Text fontFamily="heading" fontSize="lg" fontWeight="semibold">
        Period:{' '}
      </Text>
      <Text fontFamily="body">January 2020 - Present (Inactive)</Text>
      <br />
      <Text fontFamily="heading" fontSize="lg" fontWeight="semibold">
        Description:{' '}
      </Text>
      <Text fontFamily="body">
        Bot Marzi (stands for Grammar Nazi) is a Twitter and LINE bot that can detect grammar
        failure and reply it with a correct grammar by using memes. Click &quot;Show GIF
        Button&quot; below to see it in action (.gif)
      </Text>
      <br />
      <Text fontFamily="heading" fontSize="lg" fontWeight="semibold">
        Tech Stacks & Tools:{' '}
      </Text>
      <SimpleGrid minChildWidth="90px">
        <IconLink textAlign="center" showText name="Python" icon={SiPython} />
        <IconLink textAlign="center" showText name="Flask" icon={SiFlask} />
        <IconLink textAlign="center" showText name="Twitter API" icon={SiTwitter} />
        <IconLink textAlign="center" showText name="Github" icon={SiGithub} />
        <IconLink textAlign="center" showText name="Heroku" icon={SiHeroku} />
      </SimpleGrid>
      <br />
      <Text fontFamily="heading" fontSize="lg" fontWeight="semibold">
        Related Links:{' '}
      </Text>
      <br />
      <SimpleGrid minChildWidth="90px">
        <IconLink
          textAlign="center"
          showText
          name="@BotMarzi"
          icon={SiTwitter}
          url="https://twitter.com/BotMarzi"
        />
      </SimpleGrid>
      <br />
      <Box textAlign="center">
        <Button textAlign="center" onClick={() => setShowGif(!showGif)}>
          {!showGif ? 'Show GIF Demo' : 'Hide GIF Demo'}
        </Button>
        <br />
        <Collapse in={showGif}>
          <Image src="/marzi.GIF" alt="Marzi Demo" width={500} height={700} />
        </Collapse>
      </Box>
    </>
  );
};
