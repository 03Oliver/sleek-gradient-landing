import { useEffect, useState } from "react";
import { Container, Text, VStack, Link, Box } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { keyframes } from "@emotion/react";

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  50% { border-color: transparent }
`;

const Index = () => {
  const [text, setText] = useState("");
  const fullText = "collective.vc ... loading ... ... reinventing ourselves";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container centerContent maxW="100vw" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgGradient="linear(to-r, black, gray.800)" color="white" fontFamily="Roboto, sans-serif">
      <VStack spacing={8} textAlign="center">
        <Box as="pre" fontSize="2xl" whiteSpace="pre-wrap" overflow="hidden" borderRight="2px solid" animation={`${typing} 4s steps(${fullText.length}), ${blink} 0.75s step-end infinite`}>
          {text}
        </Box>
        <Link href="https://www.linkedin.com/company/collectivevc" isExternal>
          <Box as={FaLinkedin} size="48px" />
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;
