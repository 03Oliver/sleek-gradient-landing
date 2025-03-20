
import { useEffect, useState, useRef } from "react";
import { 
  Container, 
  Link, 
  Box, 
  Text, 
  Flex, 
  Image, 
  VStack, 
  Divider,
  useMediaQuery,
  useColorModeValue,
  Tag,
  Badge,
  Heading,
  SimpleGrid
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { typing, blink, badgeBlink } from "../components/thesis/AnimationKeyframes";

const Portfolio = () => {
  const [headerText, setHeaderText] = useState("");
  const [subheadingText, setSubheadingText] = useState("");
  const fullHeaderText = "collective.vc";
  const fullSubheadingText = "portfolio";
  const headerIndexRef = useRef(0);
  const subheadingIndexRef = useRef(0);
  const [isHeaderTypingComplete, setIsHeaderTypingComplete] = useState(false);
  const [isSubheadingTypingComplete, setIsSubheadingTypingComplete] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const bgGradient = useColorModeValue(
    "linear(to-r, gray.900, gray.800, gray.900)",
    "linear(to-r, gray.900, gray.800, gray.900)"
  );

  const climateInvestments = [
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

  const generalistInvestments = [
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
      subheading: "fund ii", 
      url: "https://teamignite.ventures", 
      color: "#ef5a2c" 
    }
  ];

  useEffect(() => {
    const hasAnimationPlayed = sessionStorage.getItem('animationPlayedPortfolio');

    if (hasAnimationPlayed) {
      setHeaderText(fullHeaderText);
      setSubheadingText(fullSubheadingText);
      setIsHeaderTypingComplete(true);
      setIsSubheadingTypingComplete(true);
      return;
    }

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
  }, []);

  const startSubheadingTyping = () => {
    const subheadingInterval = setInterval(() => {
      setSubheadingText(fullSubheadingText.substring(0, subheadingIndexRef.current + 1));
      subheadingIndexRef.current++;
      if (subheadingIndexRef.current === fullSubheadingText.length) {
        clearInterval(subheadingInterval);
        setIsSubheadingTypingComplete(true);
        
        sessionStorage.setItem('animationPlayedPortfolio', 'true');
      }
    }, 50);
  };

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
                borderRight={isHeaderTypingComplete ? "none" : "2px solid"}
                animation={isHeaderTypingComplete ? `${typing} 2s steps(${fullHeaderText.length})` : `${typing} 2s steps(${fullHeaderText.length}), ${blink} 0.75s step-end infinite`}
                color="white"
                letterSpacing="tight"
              >
                {headerText}
              </Box>
            </Link>
          </Flex>
        </Box>
        
        <Box mb={4}>
          <Badge 
            colorScheme="blue" 
            fontSize={{ base: "md", md: "lg" }} 
            py={1} 
            px={{ base: 3, md: 4 }} 
            borderRadius="full"
            textTransform="lowercase"
            letterSpacing="wider"
            animation={isSubheadingTypingComplete ? "none" : `${blink} 0.75s step-end infinite`}
          >
            {subheadingText}
          </Badge>
        </Box>
        
        <VStack spacing={6} width="100%" maxW="800px" px={{ base: 4, md: 6 }} textAlign="center">
          <Text fontSize="lg">oliver's personal investments & deals + sweat equity & carry share (assorted)</Text>
          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} width="100%" mt={4}>
            {/* Climate Column */}
            <VStack align="center" spacing={4}>
              <Badge 
                colorScheme="blue" 
                fontSize="sm" 
                py={1} 
                px={3} 
                borderRadius="full"
                textTransform="lowercase"
                letterSpacing="wider"
              >
                climate
              </Badge>
              
              <Flex 
                wrap="wrap" 
                justify="center" 
                gap={4}
                width="100%"
              >
                {climateInvestments.map((investment, index) => (
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
                      bg="rgba(30, 30, 30, 0.6)"
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
                      color="white"
                      transition="all 0.2s"
                      _hover={{ 
                        bg: "rgba(40, 40, 40, 0.7)",
                        boxShadow: "xl"
                      }}
                    >
                      <VStack spacing={0} w="100%">
                        <Text>{investment.name}</Text>
                        {investment.subheading && (
                          <Text 
                            fontSize="xs" 
                            color="whiteAlpha.700" 
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
            </VStack>
            
            {/* Generalist Column */}
            <VStack align="center" spacing={4}>
              <Badge 
                colorScheme="blue" 
                fontSize="sm" 
                py={1} 
                px={3} 
                borderRadius="full"
                textTransform="lowercase"
                letterSpacing="wider"
              >
                generalist
              </Badge>
              
              <Flex 
                wrap="wrap" 
                justify="center" 
                gap={4}
                width="100%"
              >
                {generalistInvestments.map((investment, index) => (
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
                      bg="rgba(30, 30, 30, 0.6)"
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
                      color="white"
                      transition="all 0.2s"
                      _hover={{ 
                        bg: "rgba(40, 40, 40, 0.7)",
                        boxShadow: "xl"
                      }}
                    >
                      <VStack spacing={0} w="100%">
                        <Text>{investment.name}</Text>
                        {investment.subheading && (
                          <Text 
                            fontSize="xs" 
                            color="whiteAlpha.700" 
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
            </VStack>
          </SimpleGrid>
          
          <Text fontSize="lg" mt={4}>syndicate deals</Text>
          <Text fontSize="md">coming very soon</Text>

          <Divider maxW="200px" borderColor="blue.400" opacity="0.3" mt={6} mb={6} />

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
          >
            <Link as={RouterLink} to="/" color="blue.300" _hover={{ color: "blue.100" }}>home</Link>
            <Text color="whiteAlpha.600">//</Text>
            <Link as={RouterLink} to="/thesis" color="blue.300" _hover={{ color: "blue.100" }}>thesis</Link>
            <Text color="whiteAlpha.600">//</Text>
            <Link as={RouterLink} to="/disclaimer" color="blue.300" _hover={{ color: "blue.100" }}>disclaimer</Link>
          </Flex>
        </VStack>
      </VStack>
      
      <Box as="footer" py={4} textAlign="center" fontSize="xs" color="whiteAlpha.600" width="100%">
        built lightweight <Link href="https://www.websitecarbon.com/website/collective-vc/" isExternal color="whiteAlpha.600">(<b>0.05g CO₂</b>)</Link> with minimalism in mind
      </Box>
    </Container>
  );
};

export default Portfolio;
