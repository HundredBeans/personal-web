import { SimpleGrid, Text } from '@chakra-ui/react';
import { FaGlobe } from 'react-icons/fa';
import {
  SiAmazonaws,
  SiFlask,
  SiGithub,
  SiLine,
  SiMaterialui,
  SiMysql,
  SiPython,
  SiReact,
  SiTensorflow,
  SiTravisci,
  SiYoutube
} from 'react-icons/si';
import { IconLink } from '../../components/IconLink';

export const TukulsaContent = () => {
  return (
    <>
      <Text fontFamily="heading" fontSize="lg" fontWeight="semibold">
        Period:{' '}
      </Text>
      <Text fontFamily="body">February 2020 - June 2020 (Suspended)</Text>
      <br />
      <Text fontFamily="heading" fontSize="lg" fontWeight="semibold">
        Description:{' '}
      </Text>
      <Text fontFamily="body">
        Tukulsa is an online chatbot which can automatically respond to users&apos; chat and
        requests in order to make purchase of a prepaid voucher for all cellular operators within
        Indonesia. This project contains chatbot using NLP build with Tensorflow, and security
        feature for admin to login via chatroom using face recognition (build with openCV).
      </Text>
      <br />
      <Text fontFamily="heading" fontSize="lg" fontWeight="semibold">
        Tech Stacks & Tools:{' '}
      </Text>
      <SimpleGrid minChildWidth="90px">
        <IconLink textAlign="center" showText name="AWS" icon={SiAmazonaws} />
        <IconLink textAlign="center" showText name="Travis CI" icon={SiTravisci} />
        <IconLink textAlign="center" showText name="Github" icon={SiGithub} />
        <IconLink textAlign="center" showText name="Python" icon={SiPython} />
        <IconLink textAlign="center" showText name="Tensor Flow" icon={SiTensorflow} />
        <IconLink textAlign="center" showText name="Flask" icon={SiFlask} />
        <IconLink textAlign="center" showText name="My SQL" icon={SiMysql} />
        <IconLink textAlign="center" showText name="LINE Liff" icon={SiLine} />
        <IconLink textAlign="center" showText name="React" icon={SiReact} />
        <IconLink textAlign="center" showText name="Material UI" icon={SiMaterialui} />
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
          name="Demo"
          icon={SiYoutube}
          url="https://www.youtube.com/watch?v=J13q0YFri2U"
        />
        <IconLink
          textAlign="center"
          showText
          name="Chatbot"
          icon={SiGithub}
          url="https://github.com/hundredbeans/tukulsa-linebot"
        />
        <IconLink
          textAlign="center"
          showText
          name="Backend"
          icon={SiGithub}
          url="https://github.com/hundredbeans/tukulsa-backend"
        />
        <IconLink
          textAlign="center"
          showText
          name="Dashboard"
          icon={SiGithub}
          url="https://github.com/hundredbeans/tukulsa-admin"
        />
        <IconLink
          textAlign="center"
          showText
          name="Line-UI"
          icon={SiGithub}
          url="https://github.com/hundredbeans/tukulsa-liff"
        />
        <IconLink
          textAlign="center"
          showText
          name="Website"
          icon={FaGlobe}
          url="https://bit.ly/tukulsa"
        />
      </SimpleGrid>
    </>
  );
};
