import { HStack, Icon } from '@chakra-ui/react';
import { NavItem } from './NavItem';

export const SocialMediaLinks = ({ socialMedias }) => (
  <HStack display="flex" justifyContent="center" alignItems="center" spacing="24px">
    {socialMedias.map((item) => (
      <NavItem
        key={item.name}
        href={item.href}
        isExternal={true}
        rel="nofollow noreferrer"
        target="_blank">
        <Icon as={item.icon} w="20px" h="20px" />
      </NavItem>
    ))}
  </HStack>
);
