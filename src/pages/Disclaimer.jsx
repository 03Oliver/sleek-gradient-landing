import { Container, VStack, Box, Text } from "@chakra-ui/react";
import Footer from "../components/common/Footer";

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  50% { border-color: transparent }
`;

const Disclaimer = () => {
  const [headerText, setHeaderText] = useState("");
  const fullHeaderText = "collective.vc";
  const headerIndexRef = useRef(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const bgGradient = useColorModeValue(
    "linear(to-r, gray.900, gray.800, gray.900)",
    "linear(to-r, gray.900, gray.800, gray.900)"
  );

  useEffect(() => {
    const hasAnimationPlayed = sessionStorage.getItem('animationPlayedDisclaimer');

    if (hasAnimationPlayed) {
      setHeaderText(fullHeaderText);
      setIsTypingComplete(true);
      return;
    }

    const headerInterval = setInterval(() => {
      setHeaderText(fullHeaderText.substring(0, headerIndexRef.current + 1));
      headerIndexRef.current++;
      if (headerIndexRef.current === fullHeaderText.length) {
        clearInterval(headerInterval);
        setIsTypingComplete(true);
        sessionStorage.setItem('animationPlayedDisclaimer', 'true');
      }
    }, 50);

    return () => clearInterval(headerInterval);
  }, []);

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
      pt={8}
      px={0}
    >
      <VStack spacing={6} width="100%" flex="1" maxW="1200px" px={4}>
        <Box textAlign="center" mb={2}>
          <Flex alignItems="center" justifyContent="center">
            <Image src="/favicon.ico" alt="Favicon" boxSize="24px" mr={2} />
            <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
              <Box 
                as="pre" 
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight="bold" 
                whiteSpace="nowrap" 
                overflow="hidden" 
                borderRight={isTypingComplete ? "none" : "2px solid"}
                animation={isTypingComplete ? `${typing} 2s steps(${fullHeaderText.length})` : `${typing} 2s steps(${fullHeaderText.length}), ${blink} 0.75s step-end infinite`}
                color="white"
                letterSpacing="tight"
              >
                {headerText}
              </Box>
            </Link>
          </Flex>
        </Box>

        <VStack spacing={6} width="100%" maxW="800px" px={{ base: 4, md: 6 }} textAlign="left" alignItems="flex-start">
          <Box 
            position="relative" 
            pl={10} 
            borderLeft="2px solid" 
            borderLeftColor="gray.600"
            _before={{
              content: '""',
              position: 'absolute',
              left: '0',
              top: '0',
              bottom: '0',
              width: '2px',
              boxShadow: '0 0 8px 2px rgba(120, 120, 120, 0.3)',
              zIndex: '1'
            }}
          >
            <HStack align="flex-start" spacing={4}>
              <Brain size={20} color="#3182CE" style={{ marginTop: '4px', flexShrink: 0 }} />
              <Text>
                this website is for informational purposes only and should not be seen as an invitation to invest or a financial promotion. you should not rely on any information provided here. the content is not intended to offer, nor should it be interpreted as, any form of advice.
              </Text>
            </HStack>
            
            <Box h={6} />
            
            <HStack align="flex-start" spacing={4}>
              <AlertTriangle size={20} color="#E53E3E" style={{ marginTop: '4px', flexShrink: 0 }} />
              <Text>
                please note that startup, special-purpose vehicle (spv) and syndicate investments carry significant risks and are only suitable for experienced investors who fully understand them. any independent investment platform used will carry out required checks and verification in line with legal obligations. always seek independent financial advice before making any investment decisions.
              </Text>
            </HStack>
            
            <Box h={6} />
            
            <HStack align="flex-start" spacing={4}>
              <Building size={20} color="#718096" style={{ marginTop: '4px', flexShrink: 0 }} />
              <Text>
                collective vc ltd – 14226589 – sic 64303
              </Text>
            </HStack>
            
            <Box h={6} />
            
            <HStack align="flex-start" spacing={4}>
              <PoundSterling size={20} color="#781c44" style={{ marginTop: '4px', flexShrink: 0 }} />
              <Text>
                not fca regulated – private, networked, relationship-based
              </Text>
            </HStack>
          </Box>

          <Divider maxW="200px" borderColor="blue.400" opacity="0.3" mt={6} mb={6} alignSelf="center" />

          <Flex 
            wrap="wrap" 
            justify="center" 
            gap={3} 
            mt={4}
            borderTop="1px solid"
            borderColor="whiteAlpha.200"
            pt={4}
            width="100%"
            maxW="600px"
            alignSelf="center"
          >
            <Link as={RouterLink} to="/" color="blue.300" _hover={{ color: "blue.100" }}>return home</Link>
            <Text color="whiteAlpha.600">//</Text>
            <Link as={RouterLink} to="/portfolio" color="blue.300" _hover={{ color: "blue.100" }}>portfolio</Link>
            <Text color="whiteAlpha.600">//</Text>
            <Link as={RouterLink} to="/thesis" color="blue.300" _hover={{ color: "blue.100" }}>thesis</Link>
          </Flex>
        </VStack>
      </VStack>
      
      <Footer />
    </Container>
  );
};

export default Disclaimer;
