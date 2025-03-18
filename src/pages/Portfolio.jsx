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
    <Container centerContent maxW="100vw" minH="100vh" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center" bgGradient="linear(to-r, black, gray.800)" color="white" fontFamily="Roboto, sans-serif" pt={8}>
      <VStack spacing={6} width="100%" flex="1">
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
          <Text fontSize="lg">oliver's personal investments & deals + sweat equity & carry share (assorted)</Text>
          <Text fontSize="md">
            <Link href="https://element-2.co.uk/" isExternal color="#4440e8">element 2 hydrogen</Link> // {" "}
            <Link href="https://www.sustainableventures.co.uk/" isExternal color="#d0041c">sustainable ventures sa7 (accelerator batch)</Link> // {" "}
            <Link href="https://stratiphy.io" isExternal color="#fcc450">stratiphy</Link> // {" "}
            <Link href="https://meetotis.com/" isExternal color="#3c8cfc">otis ai</Link> // {" "}
            <Link href="https://teamignite.ventures" isExternal color="#ef5a2c">teamignite.ventures (fund i)</Link> // {" "}
            <Link href="https://www.soldera.org/" isExternal color="#e0fca4">soldera</Link> // {" "}
            <Link href="https://www.mirico.co.uk/" isExternal color="#c8141c">mirico</Link>
          </Text>
          
          <Text fontSize="lg" mt={4}>syndicate deals</Text>
          <Text fontSize="md">coming very soon</Text>

          <Text color="white">
            <Link as={RouterLink} to="/" color="blue.300">return home</Link>
            {" // "}
            <Link as={RouterLink} to="/disclaimer" color="blue.300">disclaimer</Link>
            {" // "}
            <Link as={RouterLink} to="/thesis" color="blue.300">thesis</Link>
          </Text>
        </VStack>
      </VStack>
      <Box as="footer" py={4} textAlign="center" fontSize="xs" color="whiteAlpha.600" width="100%">
        built lightweight <Link href="https://www.websitecarbon.com/website/collective-vc/" isExternal color="whiteAlpha.600">(<b>0.04g CO₂</b>)</Link> with minimalism in mind
      </Box>
    </Container>
  );
};

export default Portfolio;