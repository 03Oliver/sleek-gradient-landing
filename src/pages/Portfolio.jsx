import { useEffect, useState, useRef } from "react";
import { Container, Link, Box, Text, keyframes, Flex, Image, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  50% { border-color: transparent }
`;

const Portfolio = () => {
  const [headerText, setHeaderText] = useState("");
  const fullHeaderText = "collective.vc";
  const headerIndexRef = useRef(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const headerInterval = setInterval(() => {
      setHeaderText(fullHeaderText.substring(0, headerIndexRef.current + 1));
      headerIndexRef.current++;
      if (headerIndexRef.current === fullHeaderText.length) {
        clearInterval(headerInterval);
        setIsTypingComplete(true);
      }
    }, 50);

    return () => clearInterval(headerInterval);
  }, []);

  return (
    <Container centerContent maxW="100vw" minH="100vh" display="flex" flexDirection="column" alignItems="center" bgGradient="linear(to-r, black, gray.800)" color="white" fontFamily="Roboto, sans-serif" pt={8}>
      <VStack spacing={6} width="100%">
        <Box textAlign="center" mb={4}>
          <Flex alignItems="center" justifyContent="center">
            <Image src="/favicon.ico" alt="Favicon" boxSize="24px" mr={2} />
            <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
              <Box 
                as="pre" 
                fontSize="4xl" 
                fontWeight="bold" 
                whiteSpace="nowrap" 
                overflow="hidden" 
                borderRight={isTypingComplete ? "none" : "2px solid"}
                animation={isTypingComplete ? `${typing} 2s steps(${fullHeaderText.length})` : `${typing} 2s steps(${fullHeaderText.length}), ${blink} 0.75s step-end infinite`}
              >
                {headerText}
              </Box>
            </Link>
          </Flex>
        </Box>
        
        <VStack spacing={6} alignItems="center" width="100%" maxW="600px" px={4} textAlign="center">
          <Text fontSize="lg">1. oliver's personal investments & deals </Text>
          <Text fontSize="md">
            <Link href="https://element-2.co.uk/" isExternal color="green.300">element 2 hydrogen</Link> // {" "}
            <Link href="https://www.sustainableventures.co.uk/" isExternal color="green.300">sustainable ventures sa7</Link> // {" "}
            <Link href="https://stratiphy.io" isExternal color="yellow.300">stratiphy</Link> // {" "}
            <Link href="https://meetotis.com/" isExternal color="blue.300">otis.ai</Link>
          </Text>
          
          <Text fontSize="lg" mt={4}>2. syndicate deals</Text>
          <Text fontSize="md">coming very soon</Text>

          <Link as={RouterLink} to="/" color="blue.300" mt={4}>
            return home
          </Link>
        </VStack>
      </VStack>
      <Text fontSize="xs" color="gray.500" mt="auto" pb={4}>homecrafted with minimalism in mind</Text>
    </Container>
  );
};

export default Portfolio;