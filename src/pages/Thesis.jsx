import { useState, useEffect } from "react";
import { 
  Container, 
  Box, 
  VStack, 
  useColorModeValue,
  useDisclosure,
  Text,
  Link
} from "@chakra-ui/react";
import ThesisItemsList from "../components/thesis/ThesisItemsList";
import ThesisModal from "../components/thesis/ThesisModal";
import { getIconForThesisItem } from "../components/thesis/IconUtils";
import ThesisAnimations from "../components/thesis/ThesisAnimations";
import ThesisDesktopView from "../components/thesis/ThesisDesktopView";
import ThesisMobileView from "../components/thesis/ThesisMobileView";
import ThesisFooter from "../components/thesis/ThesisFooter";

const Thesis = () => {
  const [headerText, setHeaderText] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [subheadingText, setSubheadingText] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isPulsingActive, setIsPulsingActive] = useState(false);
  const [isHeaderTypingComplete, setIsHeaderTypingComplete] = useState(false);
  const [isBodyTypingComplete, setIsBodyTypingComplete] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const fullHeaderText = "collective.vc";
  const fullBodyText = "humans are market animals. within a prediction-prevention-disruption framework of mitigation and adaptation, we seek out imaginative, compelling and scalable opportunities with a climate angle in:";
  const fullSubheadingText = "conquering climate";

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (hasAnimated) {
      const pulseTimer = setTimeout(() => {
        setIsPulsingActive(true);
      }, 3000);

      return () => clearTimeout(pulseTimer);
    }
  }, [hasAnimated]);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    
    if (!isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isMobile]);

  return (
    <Container 
      centerContent 
      maxW="100vw" 
      minH="100vh" 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      bgGradient="linear(to-r, black, gray.800)"
      color="white" 
      fontFamily="Roboto, sans-serif" 
      pt={isMobile ? 4 : 0}
      px={0}
      overflowX="hidden"
      overflowY={isMobile ? "auto" : "hidden"}
      position="relative"
    >
      <ThesisAnimations 
        setHeaderText={setHeaderText}
        setBodyText={setBodyText}
        setSubheadingText={setSubheadingText}
        setIsHeaderTypingComplete={setIsHeaderTypingComplete}
        setIsBodyTypingComplete={setIsBodyTypingComplete}
        setHasAnimated={setHasAnimated}
        fullHeaderText={fullHeaderText}
        fullBodyText={fullBodyText}
        fullSubheadingText={fullSubheadingText}
      />

      {!isMobile && <ThesisItemsList isMobile={isMobile} hasAnimated={hasAnimated} isPulsingActive={isPulsingActive} />}

      <VStack 
        spacing={6} 
        width="100%" 
        flex="1" 
        maxW="1200px" 
        px={4}
        position={isMobile ? "static" : "relative"}
        zIndex={isMobile ? "auto" : 10}
        h={isMobile ? "auto" : "100vh"}
        justifyContent={isMobile ? "flex-start" : "center"}
        pt={isMobile ? 2 : 0}
      >
        {isMobile ? (
          <ThesisMobileView 
            headerText={headerText}
            subheadingText={subheadingText}
            bodyText={bodyText}
            isHeaderTypingComplete={isHeaderTypingComplete}
            isBodyTypingComplete={isBodyTypingComplete}
            fullHeaderText={fullHeaderText}
            hasAnimated={hasAnimated}
            isPulsingActive={isPulsingActive}
            onOpen={onOpen}
          />
        ) : (
          <ThesisDesktopView 
            headerText={headerText}
            subheadingText={subheadingText}
            bodyText={bodyText}
            isHeaderTypingComplete={isHeaderTypingComplete}
            isBodyTypingComplete={isBodyTypingComplete}
            fullHeaderText={fullHeaderText}
            onOpen={onOpen}
          />
        )}
      </VStack>
      
      <ThesisModal isOpen={isOpen} onClose={onClose} getIconForThesisItem={getIconForThesisItem} />
    </Container>
  );
};

export default Thesis;
