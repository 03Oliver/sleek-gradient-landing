import { useEffect, useState, useRef } from "react";
import { Container, SimpleGrid, Link, Box, Text, keyframes } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaNewspaper, FaWhatsapp, FaYoutube } from "react-icons/fa";

const typing = keyframes`
  from { width: 0 }
  to { width: 100%; }
`;

const blink = keyframes`
  50% { border-color: transparent }
`;

const Index = () => {
  const [headerText, setHeaderText] = useState("");
  const [bodyText, setBodyText] = useState("");
  const fullHeaderText = "collective.vc";
  const fullBodyText = "Collective.VC is an early-stage climate syndicate and media organisation working towards capital deployment for the benefit of humanity.";
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
    }, 100);

    return () => clearInterval(headerInterval);
  }, []);

  const startBodyTyping = () => {
    const bodyInterval = setInterval(() => {
      setBodyText(fullBodyText.substring(0, bodyIndexRef.current + 1));
      bodyIndexRef.current++;
      if (bodyIndexRef.current === fullBodyText.length) {
        clearInterval(bodyInterval);
        setIsTypingComplete(true);
      }
    }, 50);
  };

  return (
    <Container centerContent maxW="100vw" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgGradient="linear(to-r, black, gray.800)" color="white" fontFamily="Roboto, sans-serif" overflow="hidden">
      <Box textAlign="center" mb={12}>
        <Box 
          as="pre" 
          fontSize="4xl" 
          fontWeight="bold" 
          whiteSpace="nowrap" 
          overflow="hidden" 
          borderRight={isTypingComplete ? "none" : "2px solid"}
          animation={isTypingComplete ? `${typing} 4s steps(${fullHeaderText.length})` : `${typing} 4s steps(${fullHeaderText.length}), ${blink} 0.75s step-end infinite`}
        >
          {headerText}
        </Box>
      </Box>
      
      <Box mb={12} textAlign="center" maxW="600px">
        <Text 
          fontSize="lg" 
          fontFamily="Roboto, sans-serif"
          whiteSpace="pre-wrap"
          overflow="hidden"
          borderRight={isTypingComplete ? "none" : "2px solid"}
          animation={isTypingComplete ? `${typing} 8s steps(${fullBodyText.length})` : `${typing} 8s steps(${fullBodyText.length}), ${blink} 0.75s step-end infinite`}
        >
          {bodyText}
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} textAlign="center">
        <Link href="https://www.linkedin.com/company/collectivevc" isExternal>
          <Box as={FaLinkedin} size="48px" _hover={{ transform: "scale(1.1)" }} transition="transform 0.2s" />
        </Link>

        <Link href="https://www.youtube.com/@collectivevc" isExternal>
          <Box as={FaYoutube} size="48px" _hover={{ transform: "scale(1.1)" }} transition="transform 0.2s" />
        </Link>

        <Link href="https://collectivevc.substack.com" isExternal>
          <Box as={FaEnvelope} size="48px" _hover={{ transform: "scale(1.1)" }} transition="transform 0.2s" />
        </Link>

        <Link href="https://chat.whatsapp.com/CcIGrlvEwuG9pnvl7COITj" isExternal>
          <Box as={FaWhatsapp} size="48px" _hover={{ transform: "scale(1.1)" }} transition="transform 0.2s" />
        </Link>
      </SimpleGrid>
    </Container>
  );
};

export default Index;