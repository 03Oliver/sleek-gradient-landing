import { useEffect, useState, useRef } from "react";
import { Container, Link, Box, Text, keyframes, Flex, Image, VStack } from "@chakra-ui/react";

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  50% { border-color: transparent }
`;

const Disclaimer = () => {
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
      <VStack spacing={6} width="100%">
        <Box textAlign="center" mb={4}>
          <Flex alignItems="center" justifyContent="center">
            <Image src="/favicon.ico" alt="Favicon" boxSize="24px" mr={2} />
            <Link href="https://www.collective.vc" isExternal _hover={{ textDecoration: 'none' }}>
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
        
        <VStack spacing={6} alignItems="center" width="100%" maxW="800px" px={4} textAlign="left">
          <Text fontSize="md" lineHeight="tall">
            This website is intended for informational purposes only and should not be seen as an invitation to invest or as a financial promotion. You should not rely on any information provided here. The content is not intended to offer, nor should it be interpreted as, any form of advice.
          </Text>
          
          <Text fontSize="md" lineHeight="tall">
            Please note that startup, special-purpose-vehicle (SPV) and syndicate investments carry significant risks and are only suitable for experienced investors who fully understand these risks. Any independent investment software platform utilised will execute all relevant checks and vetting on network members as are required by law to protect and verify the identity and experience of potential investors. It is essential to seek independent financial advice before making any investment decisions.
          </Text>
          
          <Text fontSize="md" mt={4}>
            Collective VC Ltd - 14226589 - SIC64303
          </Text>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Disclaimer;