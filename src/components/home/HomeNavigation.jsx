
import { Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const HomeNavigation = () => {
  return (
    <Flex 
      wrap="wrap" 
      justify="center" 
      gap={3} 
      mt={{ base: 8, md: "auto" }}
      borderTop="1px solid"
      borderColor="whiteAlpha.200"
      pt={4}
      width="100%"
      maxW={{ base: "600px", md: "100%" }}
    >
      <Link as={RouterLink} to="/thesis" color="blue.300" _hover={{ color: "blue.100" }}>thesis</Link>
      <Text color="whiteAlpha.600">//</Text>
      <Link as={RouterLink} to="/portfolio" color="blue.300" _hover={{ color: "blue.100" }}>portfolio</Link>
      <Text color="whiteAlpha.600">//</Text>
      <Link as={RouterLink} to="/disclaimer" color="blue.300" _hover={{ color: "blue.100" }}>disclaimer</Link>
    </Flex>
  );
};

export default HomeNavigation;
