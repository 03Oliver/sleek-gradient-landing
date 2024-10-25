import { Text, Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box position="fixed" bottom="0" width="100%" py={2} textAlign="center" bgGradient="linear(to-r, blackAlpha.800, gray.800)" borderTop="1px solid" borderColor="whiteAlpha.100">
      <Text fontSize="xs" color="whiteAlpha.500">© {new Date().getFullYear()} collective.vc</Text>
    </Box>
  );
};

export default Footer;