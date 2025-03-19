
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
  HStack,
  Tag,
  TagLabel
} from "@chakra-ui/react";
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

const Portfolio = () => {
  const [headerText, setHeaderText] = useState("");
  const fullHeaderText = "collective.vc";
  const headerIndexRef = useRef(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isVisible, setIsVisible] = useState(false);
  const bgGradient = useColorModeValue(
    "linear(to-r, gray.900, gray.800, gray.900)",
    "linear(to-r, gray.900, gray.800, gray.900)"
  );

  const linkHoverStyle = {
    transition: "all 0.3s ease",
    textDecoration: "none",
    transform: "translateY(-2px)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

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

    // Trigger the fade-in animation after a short delay
    const fadeTimer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => {
      clearInterval(headerInterval);
      clearTimeout(fadeTimer);
    };
  }, []);

  // Portfolio items grouped by category
  const portfolioItems = [
    { name: "element 2 hydrogen", href: "https://element-2.co.uk/", color: "#4440e8", category: "energy" },
    { name: "sustainable ventures sa7 (accelerator batch)", href: "https://www.sustainableventures.co.uk/", color: "#d0041c", category: "accelerator" },
    { name: "stratiphy", href: "https://stratiphy.io", color: "#fcc450", category: "fintech" },
    { name: "otis ai", href: "https://meetotis.com/", color: "#3c8cfc", category: "ai" },
    { name: "teamignite.ventures (fund i)", href: "https://teamignite.ventures", color: "#ef5a2c", category: "fund" },
    { name: "soldera", href: "https://www.soldera.org/", color: "#e0fca4", category: "sustainability" },
    { name: "mirico", href: "https://www.mirico.co.uk/", color: "#c8141c", category: "hardware" },
  ];

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
        
        <VStack 
          spacing={8} 
          width="100%" 
          maxW="800px" 
          px={{ base: 4, md: 6 }} 
          textAlign="center"
          opacity={isVisible ? 1 : 0}
          transform={isVisible ? "translateY(0)" : "translateY(20px)"}
          transition="all 0.6s ease-out"
        >
          <Text 
            fontSize="lg" 
            bgGradient="linear(to-r, blue.200, purple.200)" 
            bgClip="text"
            fontWeight="medium"
          >
            oliver's personal investments & deals + sweat equity & carry share (assorted)
          </Text>
          
          {!isMobile ? (
            <Flex 
              wrap="wrap" 
              justify="center" 
              gap={4} 
              width="100%"
            >
              {portfolioItems.map((item, index) => (
                <Box 
                  key={index} 
                  borderWidth="1px" 
                  borderColor="whiteAlpha.200" 
                  borderRadius="md" 
                  p={3}
                  bg="rgba(0,0,0,0.3)"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: "translateY(-5px)",
                    boxShadow: `0 8px 16px rgba(0, 0, 0, 0.2), 0 0 0 1px ${item.color}40`,
                    borderColor: `${item.color}60`,
                  }}
                  animation={`${fadeIn} 0.5s ease-out ${0.1 + index * 0.1}s both`}
                  width="auto"
                  maxW="250px"
                >
                  <VStack spacing={2}>
                    <Link 
                      href={item.href} 
                      isExternal 
                      color={item.color}
                      fontWeight="medium"
                      _hover={linkHoverStyle}
                      display="inline-block"
                    >
                      {item.name}
                    </Link>
                    <Tag size="sm" variant="subtle" colorScheme="gray" opacity={0.7}>
                      <TagLabel>{item.category}</TagLabel>
                    </Tag>
                  </VStack>
                </Box>
              ))}
            </Flex>
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
          
          <Text 
            fontSize="lg" 
            mt={4}
            bgGradient="linear(to-r, blue.200, teal.200)" 
            bgClip="text"
            fontWeight="medium"
            animation={`${fadeIn} 0.5s ease-out 0.8s both`}
          >
            syndicate deals
          </Text>
          <Text 
            fontSize="md" 
            animation={`${fadeIn} 0.5s ease-out 0.9s both`}
          >
            coming very soon
          </Text>

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
            animation={`${fadeIn} 0.5s ease-out 1s both`}
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
