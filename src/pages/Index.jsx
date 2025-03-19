
import { useEffect, useState, useRef } from "react";
import { Container, Box, Text, keyframes, Flex, Image, VStack, Link, SimpleGrid, Center } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaNewspaper, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Check if animation has already played this session
    const hasAnimationPlayed = sessionStorage.getItem('animationPlayed');

    if (hasAnimationPlayed) {
      // If animation has played, set the complete text immediately
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

    // Mark animation as played
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
    <Container 
      centerContent 
      maxW="100vw" 
      minH="100vh" 
      display="flex" 
      flexDirection="column" 
      bgGradient="linear(to-r, black, gray.800)" 
      color="white" 
      fontFamily="Roboto, sans-serif" 
      overflow="hidden" 
      p={0}
    >
      <Center 
        height="100vh" 
        width="100%" 
        position="relative" 
        zIndex="10"
      >
        <Box 
          p={8} 
          borderRadius="lg" 
          bg="rgba(0,0,0,0.7)" 
          backdropFilter="blur(8px)" 
          maxW="600px" 
          textAlign="center"
          boxShadow="dark-lg"
          display="flex"
          flexDirection="column"
        >
          <VStack spacing={6} flex="1" width="100%" justifyContent="center">
            <Box textAlign="center" mb={4}>
              <Flex alignItems="center" justifyContent="center">
                <Image src="/favicon.ico" alt="Favicon" boxSize="24px" mr={2} />
                <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
                  <Box 
                    as="pre" 
                    fontSize={isMobile ? "2xl" : "4xl"}
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
            
            <Box 
              mb={4} 
              textAlign="center" 
              maxW="600px" 
              minH="60px" 
              display="flex" 
              alignItems="center" 
              justifyContent="center" 
              fontFamily="Roboto, sans-serif"
            >
              <Text 
                fontSize={isMobile ? "sm" : "lg"}
                fontFamily="Roboto, sans-serif"
                whiteSpace="normal"
                overflow="hidden"
                position="relative"
                letterSpacing="wide"
                lineHeight="1.6"
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

            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={5} textAlign="center" mt={2}>
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
          
          <Box as="footer" py={4} textAlign="center" fontSize="xs" color="whiteAlpha.600" width="100%" mt={8}>
            built lightweight <Link href="https://www.websitecarbon.com/website/collective-vc/" isExternal color="whiteAlpha.600">(<b>0.04g CO₂</b>)</Link> with minimalism in mind
          </Box>
        </Box>
      </Center>
    </Container>
  );
};

export default Index;
