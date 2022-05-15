import { SimpleGrid, Text } from '@chakra-ui/react';
import {
  SiDigitalocean,
  SiPm2,
  SiGithub,
  SiNodedotjs,
  SiFirebase,
  SiTelegram
} from 'react-icons/si';
import { IconLink } from '../../components/IconLink';

export const YoutubeChatDataset = () => {
  return (
    <>
      <Text fontFamily="heading" fontSize="lg" fontWeight="semibold">
        Period:{' '}
      </Text>
      <Text fontFamily="body">January 2022 - Present</Text>
      <br />
      <Text fontFamily="heading" fontSize="lg" fontWeight="semibold">
        Description:{' '}
      </Text>
      <Text fontFamily="body">
        Collect Youtube livechat data and save it to Firestore database that also integrated with
        Telegram API for the notification. Personally use to scrape youtube livechat from Dota 2
        Indonesia Broadcasters such as anonim and WXC Indonesia. Later those dataset can be used to
        determine average viewers behavior in livechat using sentimental analysis. I built this out
        of curiosity to see how many toxic viewers compared to normal/supportive viewers.
      </Text>
      <br />
      <Text fontFamily="heading" fontSize="lg" fontWeight="semibold">
        Tech Stacks & Tools:{' '}
      </Text>
      <SimpleGrid minChildWidth="90px">
        <IconLink textAlign="center" showText name="Digital Ocean" icon={SiDigitalocean} />
        <IconLink textAlign="center" showText name="Node.js" icon={SiNodedotjs} />
        <IconLink textAlign="center" showText name="Github" icon={SiGithub} />
        <IconLink textAlign="center" showText name="PM2" icon={SiPm2} />
        <IconLink textAlign="center" showText name="Firestore" icon={SiFirebase} />
        <IconLink textAlign="center" showText name="Telegram API" icon={SiTelegram} />
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
          name="Source Code"
          icon={SiGithub}
          url="https://github.com/HundredBeans/yt-livechat-scrapper"
        />
      </SimpleGrid>
    </>
  );
};
