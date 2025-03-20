
import { Box, Container, Center, Text, VStack, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import ThesisFooter from "../components/thesis/ThesisFooter";
import MatrixRain from "../components/MatrixRain";

const Media = () => {
  return (
    <Container 
      centerContent 
      maxW="100vw" 
      minH="100vh" 
      display="flex" 
      flexDirection="column" 
      bgGradient="linear(to-r, black, gray.800)" 
      color="white" 
      fontFamily="Roboto, sans-serif" 
      overflow="hidden" 
      p={0}
      position="relative"
    >
      <MatrixRain />
      
      <Center 
        height="100vh" 
        width="100%" 
        position="relative" 
        zIndex="10"
      >
        <Box 
          p={8} 
          borderRadius="lg" 
          bg="rgba(0,0,0,0.7)" 
          backdropFilter="blur(8px)" 
          maxW="600px" 
          textAlign="center"
          boxShadow="dark-lg"
          display="flex"
          flexDirection="column"
          marginY="auto"
        >
          <VStack spacing={6} flex="1" width="100%" justifyContent="center">
            <Text fontSize="4xl" fontWeight="bold">collective.vc</Text>
            <Text fontSize="xl" letterSpacing="wide" mb={8}>under development - check back soon</Text>
            
            <ThesisFooter />
          </VStack>
        </Box>
      </Center>
    </Container>
  );
};

export default Media;
