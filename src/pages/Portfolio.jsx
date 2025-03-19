
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
  Grid,
  GridItem,
  Tag,
  HStack,
  Tooltip
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  50% { border-color: transparent }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const Portfolio = () => {
  const [headerText, setHeaderText] = useState("");
  const fullHeaderText = "collective.vc";
  const headerIndexRef = useRef(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const bgGradient = useColorModeValue(
    "linear(to-r, gray.900, gray.800, gray.900)",
    "linear(to-r, gray.900, gray.800, gray.900)"
  );

  const portfolioItems = [
    { 
      name: "element 2 hydrogen", 
      url: "https://element-2.co.uk/", 
      color: "#4440e8",
      description: "Green hydrogen infrastructure",
      type: "equity"
    },
    { 
      name: "sustainable ventures sa7", 
      url: "https://www.sustainableventures.co.uk/", 
      color: "#d0041c",
      description: "Accelerator batch",
      type: "accelerator"
    },
    { 
      name: "stratiphy", 
      url: "https://stratiphy.io", 
      color: "#fcc450",
      description: "AI-powered financial tools",
      type: "equity"
    },
    { 
      name: "otis ai", 
      url: "https://meetotis.com/", 
      color: "#3c8cfc",
      description: "Conversational AI",
      type: "equity"
    },
    { 
      name: "teamignite.ventures", 
      url: "https://teamignite.ventures", 
      color: "#ef5a2c",
      description: "Fund I",
      type: "fund"
    },
    { 
      name: "soldera", 
      url: "https://www.soldera.org/", 
      color: "#e0fca4",
      description: "Sustainable solutions",
      type: "equity" 
    },
    { 
      name: "mirico", 
      url: "https://www.mirico.co.uk/", 
      color: "#c8141c",
      description: "Gas monitoring technology",
      type: "equity"
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
        
        <VStack spacing={10} width="100%" maxW="900px" px={{ base: 4, md: 6 }} textAlign="left">
          <Box>
            <Text fontSize="xl" textAlign="center" mb={8} fontWeight="medium" color="blue.200">
              oliver's personal investments & deals + sweat equity & carry share (assorted)
            </Text>
            
            {!isMobile ? (
              <Grid 
                templateColumns="repeat(auto-fill, minmax(260px, 1fr))" 
                gap={6}
                width="100%"
              >
                {portfolioItems.map((item, index) => (
                  <GridItem 
                    key={index}
                    borderRadius="md"
                    overflow="hidden"
                    bg="rgba(255,255,255,0.05)"
                    backdropFilter="blur(10px)"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    p={4}
                    transition="all 0.3s"
                    _hover={{
                      transform: "translateY(-5px)",
                      boxShadow: `0 10px 20px -10px ${item.color}50`,
                      borderColor: `${item.color}80`,
                    }}
                  >
                    <Link 
                      href={item.url} 
                      isExternal 
                      _hover={{ textDecoration: 'none' }}
                    >
                      <VStack spacing={2} align="flex-start">
                        <Text 
                          fontWeight="bold" 
                          fontSize="lg" 
                          color={item.color}
                          mb={1}
                        >
                          {item.name}
                        </Text>
                        <Text fontSize="sm" color="whiteAlpha.800">
                          {item.description}
                        </Text>
                        <Tag 
                          size="sm" 
                          mt={2} 
                          variant="subtle" 
                          colorScheme={
                            item.type === "equity" ? "blue" : 
                            item.type === "fund" ? "purple" : "green"
                          }
                        >
                          {item.type}
                        </Tag>
                      </VStack>
                    </Link>
                  </GridItem>
                ))}
              </Grid>
            ) : (
              <Text fontSize="md">
                <Link href="https://element-2.co.uk/" isExternal color="#4440e8">element 2 hydrogen</Link> // {" "}
                <Link href="https://www.sustainableventures.co.uk/" isExternal color="#d0041c">sustainable ventures sa7 (accelerator batch)</Link> // {" "}
                <Link href="https://stratiphy.io" isExternal color="#fcc450">stratiphy</Link> // {" "}
                <Link href="https://meetotis.com/" isExternal color="#3c8cfc">otis ai</Link> // {" "}
                <Link href="https://teamignite.ventures" isExternal color="#ef5a2c">teamignite.ventures (fund i)</Link> // {" "}
                <Link href="https://www.soldera.org/" isExternal color="#e0fca4">soldera</Link> // {" "}
                <Link href="https://www.mirico.co.uk/" isExternal color="#c8141c">mirico</Link>
              </Text>
            )}
          </Box>
          
          <Box width="100%" textAlign="center" mt={6}>
            <Text fontSize="xl" fontWeight="medium" color="blue.300" mb={4}>syndicate deals</Text>
            
            <Box
              p={6}
              borderRadius="lg"
              bg="whiteAlpha.100"
              backdropFilter="blur(8px)"
              border="1px dashed"
              borderColor="blue.400"
              position="relative"
              overflow="hidden"
              _after={{
                content: '""',
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                background: 'radial-gradient(circle, transparent 20%, rgba(0,0,0,0.4) 120%)',
                pointerEvents: 'none',
              }}
            >
              <Text 
                fontSize="md" 
                opacity={0.8}
                animation={`${pulse} 4s infinite ease-in-out`}
              >
                coming very soon
              </Text>
            </Box>
          </Box>

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
            <Link as={RouterLink} to="/" color="blue.300" _hover={{ color: "blue.100" }}>return home</Link>
            <Text color="whiteAlpha.600">//</Text>
            <Link as={RouterLink} to="/disclaimer" color="blue.300" _hover={{ color: "blue.100" }}>disclaimer</Link>
            <Text color="whiteAlpha.600">//</Text>
            <Link as={RouterLink} to="/thesis" color="blue.300" _hover={{ color: "blue.100" }}>thesis</Link>
          </Flex>
        </VStack>
      </VStack>
      
      <Box as="footer" py={4} textAlign="center" fontSize="xs" color="whiteAlpha.600" width="100%">
        built lightweight <Link href="https://www.websitecarbon.com/website/collective-vc/" isExternal color="whiteAlpha.600">(<b>0.04g CO₂</b>)</Link> with minimalism in mind
      </Box>
    </Container>
  );
};

export default Portfolio;
