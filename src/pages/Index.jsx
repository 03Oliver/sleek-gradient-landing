
import { useEffect, useState } from "react";
import { Container, Box, Center } from "@chakra-ui/react";
import MatrixRain from "../components/MatrixRain";
import HomeHeader from "../components/home/HomeHeader";
import HomeBody from "../components/home/HomeBody";
import HomeNavigation from "../components/home/HomeNavigation";
import HomeSocialLinks from "../components/home/HomeSocialLinks";
import HomeFooter from "../components/home/HomeFooter";
import HomeAnimations from "../components/home/HomeAnimations";

const Index = () => {
  const [headerText, setHeaderText] = useState("");
  const [bodyText, setBodyText] = useState("");
  const fullHeaderText = "collective.vc";
  const fullBodyText = "an early-stage climate-syndicate & media organisation led by ";
  const oliverText = "Oliver Bonallack";
  const remainingText = ", working towards capital deployment for the benefit of humanity: ";
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
          <HomeAnimations 
            setHeaderText={setHeaderText}
            setBodyText={setBodyText}
            setIsTypingComplete={setIsTypingComplete}
            fullHeaderText={fullHeaderText}
            fullBodyText={fullBodyText}
            oliverText={oliverText}
            remainingText={remainingText}
          />
          
          <HomeHeader 
            headerText={headerText}
            isTypingComplete={isTypingComplete}
            fullHeaderText={fullHeaderText}
            isMobile={isMobile}
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
