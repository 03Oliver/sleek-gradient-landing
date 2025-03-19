
import { useEffect, useState, useRef } from "react";
import { 
  Container, 
  Link, 
  Box, 
  Text, 
  keyframes, 
  Flex, 
  Image, 
  VStack, 
  Divider,
  useMediaQuery,
  useColorModeValue,
  Tag
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  50% { border-color: transparent }
`;

const Portfolio = () => {
  const [headerText, setHeaderText] = useState("");
  const fullHeaderText = "collective.vc";
  const headerIndexRef = useRef(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  
  // Color mode values
  const bgGradient = useColorModeValue("linear(to-r, gray.100, gray.300)", "linear(to-r, black, gray.800)");
  const cardBg = useColorModeValue("rgba(255, 255, 255, 0.6)", "rgba(30, 30, 30, 0.6)");
  const cardHoverBg = useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(40, 40, 40, 0.7)");
  const textColor = useColorModeValue("gray.800", "white");
  const subTextColor = useColorModeValue("gray.600", "whiteAlpha.700");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const dividerColor = useColorModeValue("blue.600", "blue.400");
  const linkColor = useColorModeValue("blue.600", "blue.300");
  const hoverLinkColor = useColorModeValue("blue.800", "blue.100");
  const separatorColor = useColorModeValue("gray.400", "whiteAlpha.600");
  const footerColor = useColorModeValue("gray.600", "whiteAlpha.600");

  const investments = [
    { 
      name: "element 2 hydrogen", 
      subheading: "", 
      url: "https://element-2.co.uk/", 
      color: "#4440e8" 
    },
    { 
      name: "sustainable ventures sa7", 
      subheading: "accelerator batch", 
      url: "https://www.sustainableventures.co.uk/", 
      color: "#d0041c" 
    },
    { 
      name: "stratiphy", 
      subheading: "", 
      url: "https://stratiphy.io", 
      color: "#fcc450" 
    },
    { 
      name: "otis ai", 
      subheading: "", 
      url: "https://meetotis.com/", 
      color: "#3c8cfc" 
    },
    { 
      name: "teamignite.ventures", 
      subheading: "fund i", 
      url: "https://teamignite.ventures", 
      color: "#ef5a2c" 
    },
    { 
      name: "soldera", 
      subheading: "", 
      url: "https://www.soldera.org/", 
      color: "#e0fca4" 
    },
    { 
      name: "mirico", 
      subheading: "", 
      url: "https://www.mirico.co.uk/", 
      color: "#c8141c" 
    }
  ];

  useEffect(() => {
    // Check if animation has already played this session
    const hasAnimationPlayed = sessionStorage.getItem('animationPlayedPortfolio');

    if (hasAnimationPlayed) {
      // If animation has played, set the complete text immediately
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
        
        // Mark animation as played
        sessionStorage.setItem('animationPlayedPortfolio', 'true');
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
      bgGradient={bgGradient}
      color={textColor}
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
                color={textColor}
                letterSpacing="tight"
              >
                {headerText}
              </Box>
            </Link>
          </Flex>
        </Box>
        
        <VStack spacing={6} width="100%" maxW="800px" px={{ base: 4, md: 6 }} textAlign="center">
          <Text fontSize="lg">oliver's personal investments & deals + sweat equity & carry share (assorted)</Text>
          
          <Flex 
            wrap="wrap" 
            justify="center" 
            gap={4}
            width="100%"
            mt={2}
          >
            {investments.map((investment, index) => (
              <Link 
                key={index}
                href={investment.url} 
                isExternal 
                _hover={{ textDecoration: "none", transform: "scale(1.05)" }}
                transition="transform 0.2s"
              >
                <Box
                  p={3}
                  borderRadius="md"
                  bg={cardBg}
                  borderLeft={`3px solid ${investment.color}`}
                  backdropFilter="blur(10px)"
                  boxShadow="lg"
                  minWidth="180px"
                  height="60px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  fontSize="sm"
                  fontWeight="medium"
                  color={textColor}
                  transition="all 0.2s"
                  _hover={{ 
                    bg: cardHoverBg,
                    boxShadow: "xl"
                  }}
                >
                  <VStack spacing={0} w="100%">
                    <Text>{investment.name}</Text>
                    {investment.subheading && (
                      <Text 
                        fontSize="xs" 
                        color={subTextColor}
                        mt="0 !important"
                      >
                        ({investment.subheading})
                      </Text>
                    )}
                  </VStack>
                </Box>
              </Link>
            ))}
          </Flex>
          
          <Text fontSize="lg" mt={4}>syndicate deals</Text>
          <Text fontSize="md">coming very soon</Text>

          <Divider maxW="200px" borderColor={dividerColor} opacity="0.3" mt={6} mb={6} />

          <Flex 
            wrap="wrap" 
            justify="center" 
            gap={3} 
            mt={4}
            borderTop="1px solid"
            borderColor={borderColor}
            pt={4}
            width="100%"
            maxW="600px"
          >
            <Link as={RouterLink} to="/" color={linkColor} _hover={{ color: hoverLinkColor }}>return home</Link>
            <Text color={separatorColor}>//</Text>
            <Link as={RouterLink} to="/disclaimer" color={linkColor} _hover={{ color: hoverLinkColor }}>disclaimer</Link>
            <Text color={separatorColor}>//</Text>
            <Link as={RouterLink} to="/thesis" color={linkColor} _hover={{ color: hoverLinkColor }}>thesis</Link>
          </Flex>
        </VStack>
      </VStack>
      
      <Box as="footer" py={4} textAlign="center" fontSize="xs" color={footerColor} width="100%">
        built lightweight <Link href="https://www.websitecarbon.com/website/collective-vc/" isExternal color={footerColor}>(<b>0.04g CO₂</b>)</Link> with minimalism in mind
      </Box>
    </Container>
  );
};

export default Portfolio;
