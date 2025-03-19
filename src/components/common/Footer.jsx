
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Flex 
        wrap="wrap" 
        justify="center" 
        gap={3} 
        mt={4}
        borderTop="1px solid"
        borderColor="whiteAlpha.200"
        pt={4}
        width="100%"
        maxW="600px"
      >
        <Link as={RouterLink} to="/" color="blue.300" _hover={{ color: "blue.100" }}>return home</Link>
        <Text color="whiteAlpha.600">//</Text>
        <Link as={RouterLink} to="/disclaimer" color="blue.300" _hover={{ color: "blue.100" }}>disclaimer</Link>
        <Text color="whiteAlpha.600">//</Text>
        <Link as={RouterLink} to="/thesis" color="blue.300" _hover={{ color: "blue.100" }}>thesis</Link>
      </Flex>
      
      <Box as="footer" py={4} textAlign="center" fontSize="xs" color="whiteAlpha.600" width="100%">
        built lightweight <Link href="https://www.websitecarbon.com/website/collective-vc/" isExternal color="whiteAlpha.600">(<b>0.04g CO₂</b>)</Link> with minimalism in mind
      </Box>
    </>
  );
};

export default Footer;
