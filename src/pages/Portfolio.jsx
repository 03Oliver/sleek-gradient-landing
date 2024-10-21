import React from 'react';
import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const Portfolio = () => {
  return (
    <Container centerContent maxW="100vw" minH="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgGradient="linear(to-r, black, gray.800)" color="white" fontFamily="Roboto, sans-serif">
      <VStack spacing={6} width="100%">
        <Heading as="h1" size="2xl" mb={4}>Our Portfolio</Heading>
        <Text fontSize="xl" textAlign="center">
          Welcome to the collective.vc portfolio page. Here you'll find information about our investments and projects.
        </Text>
        {/* Add more content about the portfolio here */}
      </VStack>
    </Container>
  );
};

export default Portfolio;