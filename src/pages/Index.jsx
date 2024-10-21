import { useEffect, useState, useRef } from "react";
import { Container, SimpleGrid, Link, Box, Text, keyframes, Flex, Image, VStack } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaNewspaper, FaWhatsapp, FaYoutube } from "react-icons/fa";

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  50% { border-color: transparent }
`;

const Index = () => {
  const [headerText, setHeaderText] = useState("");
  const [bodyText, setBodyText] = useState("");
  const fullHeaderText = "collective.vc";
  const fullBodyText = "an early-stage climate-syndicate & media organisation led by ";
  const oliverText = "Oliver Bonallack";
  const remainingText = ", working towards capital deployment for the benefit of humanity.";
  const headerIndexRef = useRef(0);
  const bodyIndexRef = useRef(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const headerInterval = setInterval(() => {
      setHeaderText(fullHeaderText.substring(0, headerIndexRef.current + 1));
      headerIndexRef.current++;
      if (headerIndexRef.current === fullHeaderText.length) {
        clearInterval(headerInterval);
        startBodyTyping();
      }
    }, 50); // Reduced from 100 to 50 for faster animation

    return () => clearInterval(headerInterval);
  }, []);

  const startBodyTyping = () => {
    const bodyInterval = setInterval(() => {
      const currentText = fullBodyText + oliverText + remainingText;
      setBodyText(currentText.substring(0, bodyIndexRef.current + 1));
      bodyIndexRef.current++;
      if (bodyIndexRef.current === currentText.length) {
        clearInterval(bodyInterval);
        setIsTypingComplete(true);
      }
    }, 50);
  };

  return (
    <Container centerContent maxW="100vw" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgGradient="linear(to-r, black, gray.800)" color="white" fontFamily="Roboto, sans-serif" overflow="hidden">
      <VStack spacing={6} width="100%"> {/* Increased spacing by 10% */}
        <Box textAlign="center" mb={4}>
          <Flex alignItems="center" justifyContent="center">
            <Image src="/favicon.ico" alt="Favicon" boxSize="24px" mr={2} />
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
          </Flex>
        </Box>
        
        <Box mb={4} textAlign="center" maxW="600px" height="60px" display="flex" alignItems="center" justifyContent="center" fontFamily="Roboto, sans-serif">
          <Text 
            fontSize="lg" 
            fontFamily="Roboto, sans-serif"
            whiteSpace="normal"
            overflow="hidden"
            position="relative"
            _after={{
              content: '""',
              position: "absolute",
              right: 0,
              top: 0,
              height: "100%",
              width: isTypingComplete ? "0" : "2px",
              backgroundColor: "white",
              animation: isTypingComplete ? "none" : `${blink} 0.75s step-end infinite`
            }}
          >
            {bodyText.substring(0, fullBodyText.length)}
            <Link href="https://www.linkedin.com/in/bonallack" isExternal color="blue.300">
              {bodyText.substring(fullBodyText.length, fullBodyText.length + oliverText.length)}
            </Link>
            {bodyText.substring(fullBodyText.length + oliverText.length)}
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={5} textAlign="center"> {/* Increased spacing */}
          <Link href="https://www.linkedin.com/company/collectivevc" isExternal>
            <Box as={FaLinkedin} size="36px" _hover={{ transform: "scale(1.1)" }} transition="transform 0.2s" />
          </Link>

          <Link href="https://www.youtube.com/@collectivevc" isExternal>
            <Box as={FaYoutube} size="36px" _hover={{ transform: "scale(1.1)" }} transition="transform 0.2s" />
          </Link>

          <Link href="https://collectivevc.substack.com" isExternal>
            <Box as={FaEnvelope} size="36px" _hover={{ transform: "scale(1.1)" }} transition="transform 0.2s" />
          </Link>

          <Link href="https://chat.whatsapp.com/CcIGrlvEwuG9pnvl7COITj" isExternal>
            <Box as={FaWhatsapp} size="36px" _hover={{ transform: "scale(1.1)" }} transition="transform 0.2s" />
          </Link>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;