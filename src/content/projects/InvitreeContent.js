import { SimpleGrid, Text } from '@chakra-ui/react';
import { FaGlobe } from 'react-icons/fa';
import {
  SiFirebase,
  SiGithub,
  SiNuxtDotJs,
  SiVuetify,
  SiNodeDotJs,
  SiReact,
  SiGoogleanalytics,
  SiGooglecloud,
  SiFigma,
  SiNetlify,
  SiInstagram
} from 'react-icons/si';
import { IconLink } from '../../components/IconLink';

export const InvitreeContent = () => {
  return (
    <>
      <Text fontFamily="heading" fontSize="lg" fontWeight="semibold">
        Period:{' '}
      </Text>
      <Text fontFamily="body">October 2020 - Present</Text>
      <br />
      <Text fontFamily="heading" fontSize="lg" fontWeight="semibold">
        Description:{' '}
      </Text>
      <Text fontFamily="body">
        Invitree is a digital invitation website where user can create and view wedding invitation.
        The Invitation cover all the conventational invitation needs, it also can accept gift using
        online payment or bank transfer.
      </Text>
      <br />
      <Text fontFamily="heading" fontSize="lg" fontWeight="semibold">
        Tech Stacks & Tools:{' '}
      </Text>
      <SimpleGrid minChildWidth="90px">
        <IconLink textAlign="center" showText name="Firebase" icon={SiFirebase} />
        <IconLink textAlign="center" showText name="Google Analytics" icon={SiGoogleanalytics} />
        <IconLink textAlign="center" showText name="Cloud Run" icon={SiGooglecloud} />
        <IconLink textAlign="center" showText name="Github" icon={SiGithub} />
        <IconLink textAlign="center" showText name="Node.js" icon={SiNodeDotJs} />
        <IconLink textAlign="center" showText name="Nuxt.js" icon={SiNuxtDotJs} />
        <IconLink textAlign="center" showText name="Vuetify" icon={SiVuetify} />
        <IconLink textAlign="center" showText name="React" icon={SiReact} />
        <IconLink textAlign="center" showText name="Netlify" icon={SiNetlify} />
        <IconLink textAlign="center" showText name="Figma" icon={SiFigma} />
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
          name="Web-app (Main)"
          icon={FaGlobe}
          url="https://invitree.id"
        />
        <IconLink
          textAlign="center"
          showText
          name="Web-app (Dashboard)"
          icon={FaGlobe}
          url="https://dashboard.invitree.id"
        />
        <IconLink
          textAlign="center"
          showText
          name="Instagram"
          icon={SiInstagram}
          url="https://www.instagram.com/invitree.id/"
        />
      </SimpleGrid>
    </>
  );
};
