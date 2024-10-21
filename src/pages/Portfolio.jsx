import React, { useEffect, useState, useRef } from "react";
import { Container, Heading, Text, VStack, UnorderedList, ListItem, Link, Box, keyframes } from "@chakra-ui/react";

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
    <Container centerContent maxW="100vw" minH="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgGradient="linear(to-r, black, gray.800)" color="white" fontFamily="Roboto, sans-serif">
      <VStack spacing={8} width="100%" maxW="800px">
        <Box textAlign="center" mb={6}>
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
        </Box>

        <VStack align="start" spacing={6} width="100%">
          <Heading as="h2" size="xl">1. Oliver's Personal Investments</Heading>
          <UnorderedList spacing={3}>
            <ListItem>
              <Link href="https://element-2.co.uk/" isExternal color="blue.300">
                Element 2 Hydrogen
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.sustainableventures.co.uk/" isExternal color="blue.300">
                Sustainable Ventures SA7
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://stratiphy.io" isExternal color="blue.300">
                Stratiphy
              </Link>
            </ListItem>
          </UnorderedList>

          <Heading as="h2" size="xl" mt={8}>2. Syndicate Deals</Heading>
          <Text fontSize="lg">Coming soon</Text>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Portfolio;