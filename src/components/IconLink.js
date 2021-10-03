import { Box, Icon, Link, Text } from '@chakra-ui/react';

export const IconLink = ({
  url,
  name,
  icon,
  showText,
  highlightColor,
  isHighlighted,
  ...boxProps
}) => {
  return (
    <Box p={2} {...boxProps}>
      <Link href={url} target="_blank">
        <Icon title={name} boxSize="8" as={icon} color={isHighlighted && highlightColor} />
        {showText && (
          <Text fontFamily="mono" fontSize="sm">
            {name}
          </Text>
        )}
      </Link>
    </Box>
  );
};
