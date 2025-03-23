import { Box, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      as="header"
      bg="rgb(37, 41, 46)"
      width="100%"
      pl="1.5em"
      pr="1.5em"
      pt="1em"
      pb="1em"
    >
      <Box>
        <Text color="white" fontSize="2.5em">
          Chester Ho
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
