import React from "react";
import { Box, VStack, Text, keyframes, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

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
        <Text
          fontSize="6xl"
          animation={`${rotate} 2s linear infinite`}
          display="inline-block"
        >
          💀
        </Text>
        <Text fontSize="2xl">404 - Page Not Found</Text>
        <Text fontSize="md" fontStyle="italic" color="gray.400" mt={2}>
          sometimes I can't believe it
        </Text>
        <Text fontSize="md" fontStyle="italic" color="gray.400">
          I'm moving past the feeling
        </Text>
        <Link as={RouterLink} to="/" color="blue.300" fontSize="xl">
          Return Home
        </Link>
      </VStack>
    </Box>
  );
};

export default NotFound;