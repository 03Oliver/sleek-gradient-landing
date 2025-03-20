
import { useEffect, useState, useRef } from "react";
import { Container, Box, Center } from "@chakra-ui/react";
import MatrixRain from "../components/MatrixRain";
import HomeHeader from "../components/home/HomeHeader";
import HomeBody from "../components/home/HomeBody";
import HomeNavigation from "../components/home/HomeNavigation";
import HomeSocialLinks from "../components/home/HomeSocialLinks";
import HomeFooter from "../components/home/HomeFooter";

const Index = () => {
  const [headerText, setHeaderText] = useState("");
  const [bodyText, setBodyText] = useState("");
  const fullHeaderText = "collective.vc";
  const fullBodyText = "an early-stage climate-syndicate & media organisation led by ";
  const oliverText = "Oliver Bonallack";
  const remainingText = ", working towards capital deployment for the benefit of humanity: ";
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
    const hasAnimationPlayed = sessionStorage.getItem('animationPlayed');

    if (hasAnimationPlayed) {
      setHeaderText(fullHeaderText);
      setBodyText(fullBodyText + oliverText + remainingText);
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
    const currentText = fullBodyText + oliverText + remainingText;
    const bodyInterval = setInterval(() => {
      setBodyText(currentText.substring(0, bodyIndexRef.current + 1));
      bodyIndexRef.current++;
      if (bodyIndexRef.current === currentText.length) {
        clearInterval(bodyInterval);
        setIsTypingComplete(true);
      }
    }, 40);
  };

  const openCalendly = (e) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/oliverbonallack/30min'
      });
      return false;
    }
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
      position="relative"
    >
      <MatrixRain />
      
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
          marginY="auto"
        >
          <HomeHeader 
            headerText={headerText}
            isHeaderTypingComplete={isTypingComplete}
            isMobile={isMobile}
            fullHeaderText={fullHeaderText}
          />
          
          <HomeBody 
            bodyText={bodyText}
            isTypingComplete={isTypingComplete}
            fullBodyText={fullBodyText}
            oliverText={oliverText}
            isMobile={isMobile}
          />

          <HomeNavigation />

          <HomeSocialLinks openCalendly={openCalendly} />
          
          <HomeFooter />
        </Box>
      </Center>
    </Container>
  );
};

export default Index;
