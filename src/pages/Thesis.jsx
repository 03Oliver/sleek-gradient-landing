import { useEffect, useState, useRef } from "react";
import { 
  Container, 
  Box, 
  VStack, 
  useColorModeValue,
  Center,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import { ListPlus } from "lucide-react";
import ThesisHeader from "../components/thesis/ThesisHeader";
import ThesisSubheading from "../components/thesis/ThesisSubheading";
import ThesisBody from "../components/thesis/ThesisBody";
import ThesisFooter from "../components/thesis/ThesisFooter";
import ThesisItemsList from "../components/thesis/ThesisItemsList";
import ThesisModal from "../components/thesis/ThesisModal";
import { getIconForThesisItem } from "../components/thesis/IconUtils";

const Thesis = () => {
  const [headerText, setHeaderText] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [subheadingText, setSubheadingText] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isPulsingActive, setIsPulsingActive] = useState(false);
  const fullHeaderText = "collective.vc";
  const fullBodyText = "humans are market animals. within a prediction-prevention-disruption framework of mitigation and adaptation, we seek out imaginative, compelling and scalable opportunities with a climate angle in:";
  const fullSubheadingText = "conquering climate";
  const headerIndexRef = useRef(0);
  const bodyIndexRef = useRef(0);
  const subheadingIndexRef = useRef(0);
  const [isHeaderTypingComplete, setIsHeaderTypingComplete] = useState(false);
  const [isBodyTypingComplete, setIsBodyTypingComplete] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const bgGradient = useColorModeValue(
    "linear(to-r, gray.900, gray.800, gray.900)",
    "linear(to-r, gray.900, gray.800, gray.900)"
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const hasShownAnimation = sessionStorage.getItem("hasAnimatedThesis");
    
    if (hasShownAnimation) {
      setHeaderText(fullHeaderText);
      setSubheadingText(fullSubheadingText);
      setBodyText(fullBodyText);
      setIsHeaderTypingComplete(true);
      setIsBodyTypingComplete(true);
      setHasAnimated(true);
      setIsPulsingActive(true);
    } else {
      const headerInterval = setInterval(() => {
        setHeaderText(fullHeaderText.substring(0, headerIndexRef.current + 1));
        headerIndexRef.current++;
        if (headerIndexRef.current === fullHeaderText.length) {
          clearInterval(headerInterval);
          setIsHeaderTypingComplete(true);
          startSubheadingTyping();
        }
      }, 50);

      return () => clearInterval(headerInterval);
    }
  }, []);

  useEffect(() => {
    if (hasAnimated) {
      const pulseTimer = setTimeout(() => {
        setIsPulsingActive(true);
      }, 3000);

      return () => clearTimeout(pulseTimer);
    }
  }, [hasAnimated]);

  const startSubheadingTyping = () => {
    const subheadingInterval = setInterval(() => {
      setSubheadingText(fullSubheadingText.substring(0, subheadingIndexRef.current + 1));
      subheadingIndexRef.current++;
      if (subheadingIndexRef.current === fullSubheadingText.length) {
        clearInterval(subheadingInterval);
        startBodyTyping();
        sessionStorage.setItem("hasAnimatedThesis", "true");
      }
    }, 50);
  };

  const startBodyTyping = () => {
    const bodyInterval = setInterval(() => {
      setBodyText(fullBodyText.substring(0, bodyIndexRef.current + 1));
      bodyIndexRef.current++;
      if (bodyIndexRef.current === fullBodyText.length) {
        clearInterval(bodyInterval);
        setIsBodyTypingComplete(true);
        setHasAnimated(true);
      }
    }, 40);
  };

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
      pt={0}
      px={0}
      overflowX="hidden"
      overflowY={isMobile ? "auto" : "hidden"}
      position="relative"
    >
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
      >
        {isMobile ? (
          <>
            <Box textAlign="center" mb={2}>
              <ThesisHeader 
                headerText={headerText} 
                subheadingText={subheadingText} 
                isHeaderTypingComplete={isHeaderTypingComplete} 
                isBodyTypingComplete={isBodyTypingComplete}
                fullHeaderText={fullHeaderText} 
              />
            </Box>

            <VStack spacing={6} width="100%" maxW="1200px" px={{ base: 4, md: 6 }} textAlign="center">
              <Box>
                <ThesisSubheading 
                  subheadingText={subheadingText} 
                  isBodyTypingComplete={isBodyTypingComplete} 
                />
              </Box>

              <ThesisBody bodyText={bodyText} />

              <Box width="100%" overflow="hidden">
                {isMobile && <ThesisItemsList isMobile={isMobile} hasAnimated={hasAnimated} isPulsingActive={isPulsingActive} />}
              </Box>
            </VStack>
          </>
        ) : (
          <Center 
            height="100vh" 
            width="100%" 
            position="relative" 
            zIndex="10"
            pointerEvents="none"
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
              pointerEvents="auto"
              marginY="auto"
            >
              <ThesisHeader 
                headerText={headerText} 
                subheadingText={subheadingText} 
                isHeaderTypingComplete={isHeaderTypingComplete} 
                isBodyTypingComplete={isBodyTypingComplete}
                fullHeaderText={fullHeaderText} 
              />

              <ThesisSubheading 
                subheadingText={subheadingText} 
                isBodyTypingComplete={isBodyTypingComplete} 
              />

              <ThesisBody bodyText={bodyText} />
              
              <Button 
                variant="outline" 
                colorScheme="blue" 
                size="sm" 
                rightIcon={<ListPlus size={16} />}
                mb={6}
                onClick={onOpen}
                alignSelf="center"
              >
                view full list
              </Button>
              
              <Box mt="auto">
                <ThesisFooter />
              </Box>
            </Box>
          </Center>
        )}

        {isMobile && <ThesisFooter />}
      </VStack>
      
      <ThesisModal isOpen={isOpen} onClose={onClose} getIconForThesisItem={getIconForThesisItem} />
    </Container>
  );
};

export default Thesis;
