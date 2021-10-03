import React from 'react';
import { Flex, Box, Spacer, Text, HStack, Divider } from '@chakra-ui/react';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { NavItem } from './NavItem';
import { SocialMediaLinks } from './SocialMediaLinks';
import { HEADER_HEIGHT } from '../../helpers/constants';
// import { NavLogo } from './NavLogo';

export const Header = () => {
  const NAV_ITEMS = [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'Projects',
      href: '/projects'
    }
  ];
  const SOCIAL_MEDIAS = [
    {
      name: 'Email',
      icon: FaEnvelope,
      href: 'mailto:gm.daffa100@gmail.com'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedinIn,
      href: 'https://www.linkedin.com/in/mohammad-daffa/'
    },
    {
      name: 'Github',
      icon: FaGithub,
      href: 'https://github.com/hundredbeans'
    }
  ];

  return (
    <Box as="header" position="fixed" width="100%" backdropFilter="blur(10px)">
      <Flex
        as="nav"
        marginInline="auto"
        padding="4"
        justifyContent="center"
        alignContent="center"
        height={HEADER_HEIGHT}>
        {/* <NavLogo /> */}
        <Spacer />
        <HStack spacing="24px">
          <HStack
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontWeight="bold"
            spacing="24px">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.text} href={item.href}>
                <Text>{item.text}</Text>
              </NavItem>
            ))}
          </HStack>
          <Divider orientation="vertical" />
          <SocialMediaLinks socialMedias={SOCIAL_MEDIAS} />
        </HStack>
      </Flex>
    </Box>
  );
};
