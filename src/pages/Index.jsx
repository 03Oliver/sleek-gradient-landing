
import { useEffect, useState, useRef } from "react";
import { Container, SimpleGrid, Link, Box, Text, keyframes, Flex, Image, VStack, Heading } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaNewspaper, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  50% { border-color: transparent }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
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
      bgGradient="linear(to-r, black, gray.900)" 
      color="white" 
      fontFamily="Roboto, sans-serif" 
      overflow="hidden" 
      p={0}
    >
      <VStack 
        spacing={8} 
        flex="1" 
        width="100%" 
        justifyContent="center"
        px={{ base: 4, md: 6 }}
        position="relative"
      >
        <Box 
          textAlign="center" 
          mb={4}
          animation={isTypingComplete ? `${fadeIn} 1s ease-out` : "none"}
        >
          <Flex alignItems="center" justifyContent="center">
            <Image 
              src="/favicon.ico" 
              alt="Favicon" 
              boxSize="28px" 
              mr={3}
              opacity={0.9}
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.1)" }}
            />
            <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
              <Heading
                as="h1"
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="bold" 
                whiteSpace="nowrap" 
                overflow="hidden" 
                letterSpacing="wide"
                borderRight={isTypingComplete ? "none" : "2px solid"}
                animation={isTypingComplete ? `${typing} 2s steps(${fullHeaderText.length})` : `${typing} 2s steps(${fullHeaderText.length}), ${blink} 0.75s step-end infinite`}
              >
                {headerText}
              </Heading>
            </Link>
          </Flex>
        </Box>
        
        <Box 
          mb={6} 
          textAlign="center" 
          maxW="700px" 
          height="auto" 
          display="flex" 
          alignItems="center" 
          justifyContent="center" 
          fontFamily="Roboto, sans-serif"
          animation={isTypingComplete ? `${fadeIn} 1s ease-out 0.5s` : "none"}
          animationFillMode="both"
        >
          <Text 
            fontSize={{ base: "md", md: "lg" }}
            fontFamily="Roboto, sans-serif"
            whiteSpace="normal"
            overflow="hidden"
            position="relative"
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
            <Link href="https://www.linkedin.com/in/bonallack" isExternal color="blue.300" _hover={{ textDecoration: 'none', color: 'blue.200' }}>
              {bodyText.substring(fullBodyText.length, fullBodyText.length + oliverText.length)}
            </Link>
            {bodyText.substring(fullBodyText.length + oliverText.length, fullBodyText.length + oliverText.length + remainingText.length)}
            <RouterLink to="/portfolio" style={{ color: '#63B3ED', transition: 'color 0.2s ease' }}>
              {bodyText.substring(fullBodyText.length + oliverText.length + remainingText.length, fullBodyText.length + oliverText.length + remainingText.length + portfolioText.length)}
            </RouterLink>
            {bodyText.substring(fullBodyText.length + oliverText.length + remainingText.length + portfolioText.length, fullBodyText.length + oliverText.length + remainingText.length + portfolioText.length + dividerText.length)}
            <RouterLink to="/disclaimer" style={{ color: '#63B3ED', transition: 'color 0.2s ease' }}>
              {bodyText.substring(fullBodyText.length + oliverText.length + remainingText.length + portfolioText.length + dividerText.length, fullBodyText.length + oliverText.length + remainingText.length + portfolioText.length + dividerText.length + disclaimerText.length)}
            </RouterLink>
            {bodyText.substring(fullBodyText.length + oliverText.length + remainingText.length + portfolioText.length + dividerText.length + disclaimerText.length, fullBodyText.length + oliverText.length + remainingText.length + portfolioText.length + dividerText.length + disclaimerText.length + dividerText.length)}
            <RouterLink to="/thesis" style={{ color: '#63B3ED', transition: 'color 0.2s ease' }}>
              {bodyText.substring(fullBodyText.length + oliverText.length + remainingText.length + portfolioText.length + dividerText.length + disclaimerText.length + dividerText.length)}
            </RouterLink>
          </Text>
        </Box>

        <SimpleGrid 
          columns={{ base: 2, md: 4 }} 
          spacing={8} 
          textAlign="center"
          mt={4}
          animation={isTypingComplete ? `${fadeIn} 1s ease-out 1s` : "none"}
          animationFillMode="both"
        >
          <Link 
            href="https://www.linkedin.com/company/collectivevc" 
            isExternal
            display="flex"
            alignItems="center"
            justifyContent="center"
            transition="all 0.3s ease"
            opacity={0.9}
            _hover={{ 
              transform: "scale(1.1)", 
              opacity: 1,
              color: "#0077B5" 
            }}
          >
            <Box as={FaLinkedin} size="36px" />
          </Link>

          <Link 
            href="https://www.youtube.com/@collectivevc" 
            isExternal
            display="flex"
            alignItems="center"
            justifyContent="center"
            transition="all 0.3s ease"
            opacity={0.9}
            _hover={{ 
              transform: "scale(1.1)", 
              opacity: 1,
              color: "#FF0000" 
            }}
          >
            <Box as={FaYoutube} size="36px" />
          </Link>

          <Link 
            href="https://collectivevc.substack.com" 
            isExternal
            display="flex"
            alignItems="center"
            justifyContent="center"
            transition="all 0.3s ease"
            opacity={0.9}
            _hover={{ 
              transform: "scale(1.1)", 
              opacity: 1,
              color: "#FF6719" 
            }}
          >
            <Box as={FaEnvelope} size="36px" />
          </Link>

          <Link 
            href="https://chat.whatsapp.com/CcIGrlvEwuG9pnvl7COITj" 
            isExternal
            display="flex"
            alignItems="center"
            justifyContent="center"
            transition="all 0.3s ease"
            opacity={0.9}
            _hover={{ 
              transform: "scale(1.1)", 
              opacity: 1,
              color: "#25D366" 
            }}
          >
            <Box as={FaWhatsapp} size="36px" />
          </Link>
        </SimpleGrid>
      </VStack>
      
      <Box 
        as="footer" 
        py={4} 
        textAlign="center" 
        fontSize="xs" 
        color="whiteAlpha.700" 
        width="100%" 
        mt="auto"
        animation={isTypingComplete ? `${fadeIn} 1s ease-out 1.5s` : "none"}
        animationFillMode="both"
      >
        built lightweight <Link href="https://www.websitecarbon.com/website/collective-vc/" isExternal color="whiteAlpha.700" _hover={{ color: "whiteAlpha.900" }}>(<b>0.04g CO₂</b>)</Link> with minimalism in mind
      </Box>
    </Container>
  );
};

export default Index;
