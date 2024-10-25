import React from "react";
import { Box, VStack, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NotFound = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-r, black, gray.800)"
      color="white"
    >
      <VStack spacing={6}>
        <Text fontSize="2xl">404 - not found</Text>
        <Link as={RouterLink} to="/" color="blue.300" fontSize="xl">
          return home
        </Link>
      </VStack>
    </Box>
  );
};

export default NotFound;