import { useEffect, useState, useRef } from "react";
import { Container, Link, Box, Text, keyframes, Flex, Image, VStack } from "@chakra-ui/react";

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  50% { border-color: transparent }
`;

const Portfolio = () => {
  const [headerText, setHeaderText] = useState("");
  const [links, setLinks] = useState([]);
  const fullHeaderText = "collective.vc";
  const headerIndexRef = useRef(0);
  const linksRef = useRef(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  const linksList = [
    { text: "element 2 hydrogen", url: "https://element-2.co.uk/" },
    { text: "sustainable ventures sa7", url: "https://www.sustainableventures.co.uk/" },
    { text: "stratiphy", url: "https://stratiphy.io" },
    { text: "otis.ai", url: "https://meetotis.com/" }
  ];

  useEffect(() => {
    const headerInterval = setInterval(() => {
      setHeaderText(fullHeaderText.substring(0, headerIndexRef.current + 1));
      headerIndexRef.current++;
      if (headerIndexRef.current === fullHeaderText.length) {
        clearInterval(headerInterval);
        startLinksTyping();
      }
    }, 50);

    return () => clearInterval(headerInterval);
  }, []);

  const startLinksTyping = () => {
    const linksInterval = setInterval(() => {
      setLinks([...linksList.slice(0, linksRef.current + 1)]);
      linksRef.current++;
      if (linksRef.current === linksList.length) {
        clearInterval(linksInterval);
        setIsTypingComplete(true);
      }
    }, 500);
  };

  return (
    <Container centerContent maxW="100vw" minH="100vh" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center" bgGradient="linear(to-r, black, gray.800)" color="white" fontFamily="Roboto, sans-serif" pt={8}>
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
            {links.map((link, index) => (
              <React.Fragment key={index}>
                <Link href={link.url} isExternal color="blue.300">{link.text}</Link>
                {index < links.length - 1 && " // "}
              </React.Fragment>
            ))}
          </Text>
          
          <Text fontSize="lg" mt={4}>2. syndicate deals</Text>
          <Text fontSize="md">coming very soon</Text>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Portfolio;