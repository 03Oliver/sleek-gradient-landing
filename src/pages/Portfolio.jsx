
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
  SimpleGrid,
  Circle,
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

  // Investments data with colors
  const investments = [
    { name: "element 2 hydrogen", url: "https://element-2.co.uk/", color: "#4440e8" },
    { name: "sustainable ventures sa7", subtitle: "accelerator batch", url: "https://www.sustainableventures.co.uk/", color: "#d0041c" },
    { name: "stratiphy", url: "https://stratiphy.io", color: "#fcc450" },
    { name: "otis ai", url: "https://meetotis.com/", color: "#3c8cfc" },
    { name: "teamignite.ventures", subtitle: "fund i", url: "https://teamignite.ventures", color: "#ef5a2c" },
    { name: "soldera", url: "https://www.soldera.org/", color: "#e0fca4" },
    { name: "mirico", url: "https://www.mirico.co.uk/", color: "#c8141c" }
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
        
        <VStack spacing={8} width="100%" maxW="800px" px={{ base: 4, md: 6 }} textAlign="center">
          <Text fontSize="lg">oliver's personal investments & deals + sweat equity & carry share (assorted)</Text>

          {/* Investment Bubbles */}
          <SimpleGrid 
            columns={{ base: 2, sm: 3, md: 4 }} 
            spacing={6} 
            width="100%" 
            justifyItems="center"
            py={4}
          >
            {investments.map((investment, index) => (
              <Tooltip 
                key={index} 
                label={investment.subtitle ? `${investment.name} (${investment.subtitle})` : investment.name} 
                placement="top"
                hasArrow
              >
                <Link 
                  href={investment.url} 
                  isExternal 
                  _hover={{ textDecoration: 'none', transform: 'scale(1.05)' }}
                  transition="transform 0.2s"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Circle 
                    size={{ base: "70px", sm: "80px", md: "90px" }} 
                    bg={`${investment.color}20`}
                    border="2px solid"
                    borderColor={investment.color}
                    mb={2}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    boxShadow="0 0 15px rgba(0,0,0,0.2)"
                    transition="all 0.3s"
                    _hover={{ boxShadow: `0 0 20px ${investment.color}60` }}
                  >
                    <Text 
                      fontSize={{ base: "xs", md: "sm" }} 
                      fontWeight="bold" 
                      color={investment.color}
                      textAlign="center"
                      px={2}
                    >
                      {investment.name.split(' ')[0]}
                    </Text>
                  </Circle>
                  <Text 
                    fontSize="xs" 
                    color={investment.color}
                    maxW="90px"
                    textAlign="center"
                    noOfLines={1}
                  >
                    {investment.name}
                  </Text>
                </Link>
              </Tooltip>
            ))}
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
