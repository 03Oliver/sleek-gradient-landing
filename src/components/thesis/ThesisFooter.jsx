
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";

const ThesisFooter = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
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
        {currentPath !== "/" && (
          <>
            <Link as={RouterLink} to="/" color="blue.300" _hover={{ color: "blue.100" }}>home</Link>
            <Text color="whiteAlpha.600">//</Text>
          </>
        )}
        
        {currentPath !== "/thesis" && (
          <>
            <Link as={RouterLink} to="/thesis" color="blue.300" _hover={{ color: "blue.100" }}>thesis</Link>
            <Text color="whiteAlpha.600">//</Text>
          </>
        )}
        
        {currentPath !== "/portfolio" && (
          <>
            <Link as={RouterLink} to="/portfolio" color="blue.300" _hover={{ color: "blue.100" }}>portfolio</Link>
            <Text color="whiteAlpha.600">//</Text>
          </>
        )}
        
        {currentPath !== "/projects" && (
          <>
            <Link as={RouterLink} to="/projects" color="blue.300" _hover={{ color: "blue.100" }}>projects</Link>
            <Text color="whiteAlpha.600">//</Text>
          </>
        )}
        
        <Link href="https://podcast.collective.vc" isExternal color="blue.300" _hover={{ color: "blue.100" }}>podcast</Link>
        
        {currentPath !== "/disclaimer" && (
          <>
            <Text color="whiteAlpha.600">//</Text>
            <Link as={RouterLink} to="/disclaimer" color="blue.300" _hover={{ color: "blue.100" }}>disclaimer</Link>
          </>
        )}
      </Flex>

      <Box 
        as="footer" 
        py={4} 
        textAlign="center" 
        fontSize="xs" 
        color="whiteAlpha.600" 
        width="100%"
        mt={2}
      >
        built lightweight <Link href="https://www.websitecarbon.com/website/collective-vc/" isExternal color="whiteAlpha.600">(<b>0.05g CO₂</b>)</Link> with minimalism in mind
      </Box>
    </>
  );
};

export default ThesisFooter;
