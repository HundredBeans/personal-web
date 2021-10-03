import { Box } from '@chakra-ui/react';
import { HEADER_HEIGHT } from '../../helpers/constants';

export const OffsetHeader = ({ ...boxProps }) => (
  <Box {...boxProps} paddingTop={HEADER_HEIGHT}></Box>
);
