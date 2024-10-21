import { useEffect, useState, useRef } from "react";
import { Container, SimpleGrid, Link, Box, keyframes } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaNewspaper, FaWhatsapp, FaYoutube } from "react-icons/fa";

const typing = keyframes`
  from { width: 0 }
  to { width: 100%; }
`;

const blink = keyframes`
  50% { border-color: transparent }
`;

const Index = () => {
  const [text, setText] = useState("");
  const fullText = "collective.vc";
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(fullText.substring(0, indexRef.current + 1));
      indexRef.current++;
      if (indexRef.current === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <Container centerContent maxW="100vw" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgGradient="linear(to-r, black, gray.800)" color="white" fontFamily="Roboto, sans-serif" overflow="hidden">
      <Box textAlign="center" mb={8}>
        <Box as="pre" fontSize="2xl" whiteSpace="nowrap" overflow="hidden" borderRight="2px solid" animation={`${typing} 4s steps(${fullText.length}), ${blink} 0.75s step-end infinite`}>
          {text}
        </Box>
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
