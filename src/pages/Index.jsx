
import { useEffect, useState, useRef } from "react";
import { Container, SimpleGrid, Link, Box, Text, keyframes, Flex, Image, VStack } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaNewspaper, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import MatrixRain from "../components/MatrixRain";

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
  const remainingText = ", working towards capital deployment for the benefit of humanity: ";
  const portfolioText = "portfolio";
  const dividerText = " // ";
  const disclaimerText = "disclaimer";
  const thesisText = "thesis";
  const headerIndexRef = useRef(0);
  const bodyIndexRef = useRef(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const hasAnimationPlayed = sessionStorage.getItem('animationPlayed');

    if (hasAnimationPlayed) {
      setHeaderText(fullHeaderText);
      setBodyText(fullBodyText + oliverText + remainingText + portfolioText + dividerText + disclaimerText + dividerText + thesisText);
      setIsTypingComplete(true);
      return;
    }

    const headerInterval = setInterval(() => {
      setHeaderText(fullHeaderText.substring(0, headerIndexRef.current + 1));
      headerIndexRef.current++;
      if (headerIndexRef.current === fullHeaderText.length) {
        clearInterval(headerInterval);
        startBodyTyping();
      }
    }, 50);

    sessionStorage.setItem('animationPlayed', 'true');

    return () => clearInterval(headerInterval);
  }, []);

  const startBodyTyping = () => {
    const bodyInterval = setInterval(() => {
      const currentText = fullBodyText + oliverText + remainingText + portfolioText + dividerText + disclaimerText + dividerText + thesisText;
      setBodyText(currentText.substring(0, bodyIndexRef.current + 1));
      bodyIndexRef.current++;
      if (bodyIndexRef.current === currentText.length) {
        clearInterval(bodyInterval);
        setIsTypingComplete(true);
      }
    }, 40);
  };

  return (
    <Container centerContent maxW="100vw" minH="100vh" display="flex" flexDirection="column" bgGradient="linear(to-r, black, gray.800)" color="white" fontFamily="Roboto, sans-serif" overflow="hidden" p={0} position="relative">
      <MatrixRain />
      
      <VStack spacing={6} flex="1" width="100%" justifyContent="center" zIndex="1">
        <Box as="nav" width="100%" display="flex" justifyContent="center" mb={4}>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
            <Box as="pre" fontSize="4xl" fontWeight="bold">
              collective.vc
            </Box>
          </Link>
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
            {bodyText.substring(fullBodyText.length + oliverText.length, fullBodyText.length + oliverText.length + remainingText.length)}
            <RouterLink to="/portfolio" style={{ color: '#63B3ED' }}>
              {bodyText.substring(fullBodyText.length + oliverText.length + remainingText.length, fullBodyText.length + oliverText.length + remainingText.length + portfolioText.length)}
            </RouterLink>
            {bodyText.substring(fullBodyText.length + oliverText.length + remainingText.length + portfolioText.length, fullBodyText.length + oliverText.length + remainingText.length + portfolioText.length + dividerText.length)}
            <RouterLink to="/disclaimer" style={{ color: '#63B3ED' }}>
              {bodyText.substring(fullBodyText.length + oliverText.length + remainingText.length + portfolioText.length + dividerText.length, fullBodyText.length + oliverText.length + remainingText.length + portfolioText.length + dividerText.length + disclaimerText.length)}
            </RouterLink>
            {bodyText.substring(fullBodyText.length + oliverText.length + remainingText.length + portfolioText.length + dividerText.length + disclaimerText.length, fullBodyText.length + oliverText.length + remainingText.length + portfolioText.length + dividerText.length + disclaimerText.length + dividerText.length)}
            <RouterLink to="/thesis" style={{ color: '#63B3ED' }}>
              {bodyText.substring(fullBodyText.length + oliverText.length + remainingText.length + portfolioText.length + dividerText.length + disclaimerText.length + dividerText.length)}
            </RouterLink>
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={5} textAlign="center">
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
      
      <Box as="footer" py={4} textAlign="center" fontSize="xs" color="whiteAlpha.600" width="100%" mt="auto" zIndex="1">
        built lightweight <Link href="https://www.websitecarbon.com/website/collective-vc/" isExternal color="whiteAlpha.600">(<b>0.04g CO₂</b>)</Link> with minimalism in mind
      </Box>
    </Container>
  );
};

export default Index;
