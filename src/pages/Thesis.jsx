
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
  useMediaQuery,
  Badge,
  Divider,
  useColorModeValue,
  SimpleGrid
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

// Slowed down unravel animation for a more elegant effect
const unravel = keyframes`
  0% { transform: scaleY(0); opacity: 0; }
  100% { transform: scaleY(1); opacity: 1; }
`;

// Slowed down pulse animation (2x slower)
const pulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 rgba(14, 165, 233, 0); }
  50% { transform: scale(1.02); box-shadow: 0 0 10px rgba(14, 165, 233, 0.4); }
  100% { transform: scale(1); box-shadow: 0 0 0 rgba(14, 165, 233, 0); }
`;

// Ripple animation triggered by cursor
const ripple = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.7); }
  70% { box-shadow: 0 0 0 15px rgba(14, 165, 233, 0); }
  100% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0); }
`;

const Thesis = () => {
  const [headerText, setHeaderText] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [subheadingText, setSubheadingText] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isPulsingActive, setIsPulsingActive] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const fullHeaderText = "collective.vc";
  const fullBodyText = "humans are market animals. within a prediction-prevention-disruption framework of mitigation and adaptation, we seek out imaginative, compelling and scalable opportunities with a climate angle in:";
  const fullSubheadingText = "conquering climate";
  const headerIndexRef = useRef(0);
  const bodyIndexRef = useRef(0);
  const subheadingIndexRef = useRef(0);
  const [isHeaderTypingComplete, setIsHeaderTypingComplete] = useState(false);
  const [isBodyTypingComplete, setIsBodyTypingComplete] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const bgGradient = useColorModeValue(
    "linear(to-r, gray.900, gray.800, gray.900)",
    "linear(to-r, gray.900, gray.800, gray.900)"
  );
  const borderColor = useColorModeValue("blue.400", "blue.400");
  const glowColor = useColorModeValue("0 0 25px #0EA5E9", "0 0 25px #0EA5E9");

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

  const getRandomShade = (index, totalItems) => {
    // Gradually darker shades for items toward the bottom
    const baseOpacity = 0.25;
    const position = index / totalItems;
    
    // Darker at the bottom to entice scrolling
    let darkeningFactor = position > 0.6 ? (position - 0.6) * 0.7 : 0;
    
    const shades = [
      `rgba(0,0,0,${baseOpacity + darkeningFactor})`, 
      `rgba(0,0,0,${baseOpacity + 0.05 + darkeningFactor})`, 
      `rgba(0,0,0,${baseOpacity + 0.1 + darkeningFactor})`, 
      `rgba(0,0,0,${baseOpacity + 0.15 + darkeningFactor})`
    ];
    return shades[Math.floor(Math.random() * shades.length)];
  };

  const getRandomDuration = () => {
    return (0.4 + Math.random() * 0.6).toFixed(2);
  };

  const getRandomDelay = () => {
    return (0.1 + Math.random() * 1.4).toFixed(2);
  };

  const getRandomPulseDelay = () => {
    return (6 + Math.random() * 18).toFixed(2); // Slowed down 2x
  };

  const getRandomPulseDuration = () => {
    return (1.6 + Math.random() * 2.4).toFixed(2); // Slowed down 2x
  };

  // Check if indices are neighbors (including diagonals)
  const isNeighbor = (index1, index2, columns) => {
    if (index1 === null || index2 === null) return false;
    
    const row1 = Math.floor(index1 / columns);
    const col1 = index1 % columns;
    const row2 = Math.floor(index2 / columns);
    const col2 = index2 % columns;
    
    // Check if they're neighbors (including diagonals)
    return Math.abs(row1 - row2) <= 1 && Math.abs(col1 - col2) <= 1;
  };

  const renderThesisItems = (text) => {
    // Balance the text items to ensure "circular economy" is in the middle column
    const items = text.split(" // ");
    const columnCount = isMobile ? 1 : 3;
    
    return (
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={3} mt={6} width="100%">
        {items.map((item, index) => {
          const duration = getRandomDuration();
          const delay = getRandomDelay();
          const pulseDelay = getRandomPulseDelay();
          const pulseDuration = getRandomPulseDuration();
          const isHovered = index === hoveredIndex;
          const isAdjacent = !isMobile && isNeighbor(hoveredIndex, index, 3);
          const totalItems = items.length;
          
          return (
            <Box 
              key={index} 
              p={2}
              bg={getRandomShade(index, totalItems)}
              borderRadius="md"
              borderLeft="3px solid"
              borderColor={borderColor}
              boxShadow="lg"
              transition="all 0.3s"
              _hover={{
                transform: "translateY(-3px) scale(1.05)",
                boxShadow: `xl, ${glowColor}`,
                borderColor: "blue.300",
                zIndex: 1
              }}
              animation={
                isMobile && hasAnimated && isPulsingActive 
                  ? `${unravel} ${duration}s ease-out forwards, ${pulse} ${pulseDuration}s ease-in-out ${pulseDelay}s infinite`
                  : hasAnimated 
                    ? `${unravel} ${duration}s ease-out forwards`
                    : "none"
              }
              css={!isMobile && isHovered ? {
                animation: `${ripple} 3.2s cubic-bezier(0.4, 0, 0.6, 1) infinite`, // 2x slower
              } : isAdjacent ? {
                animation: `${ripple} 3.2s cubic-bezier(0.4, 0, 0.6, 1) 0.2s infinite`, // Delayed and 2x slower
              } : {}}
              animationDelay={`${delay}s`}
              opacity={hasAnimated ? "0" : "1"}
              transformOrigin="top"
              height="auto"
              fontSize="xs"
              onMouseEnter={() => !isMobile && setHoveredIndex(index)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
              onTouchStart={() => isMobile && setHoveredIndex(index)}
              onTouchEnd={() => isMobile && setHoveredIndex(null)}
            >
              <Text 
                fontSize="sm" 
                fontWeight="medium"
                letterSpacing="wide"
              >
                {item}
              </Text>
            </Box>
          );
        })}
      </SimpleGrid>
    );
  };

  return (
    <Container 
      centerContent 
      maxW="100vw" 
      minH="100vh" 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      bgGradient={bgGradient}
      color="white" 
      fontFamily="Roboto, sans-serif" 
      pt={8}
      px={0}
      overflowX="hidden"
      css={{
        // Hide scrollbar but allow scrolling
        '&::-webkit-scrollbar': {
          width: '0px',
        },
        scrollbarWidth: 'none',
      }}
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

        <VStack spacing={6} width="100%" maxW="1200px" px={{ base: 4, md: 6 }} textAlign="center">
          <Box>
            <Badge 
              colorScheme="blue" 
              fontSize="md" 
              py={1} 
              px={3} 
              borderRadius="full"
              textTransform="lowercase"
              letterSpacing="wider"
              animation={isBodyTypingComplete ? "none" : `${blink} 0.75s step-end infinite`}
            >
              {subheadingText}
            </Badge>
          </Box>

          <Text 
            fontSize={{ base: "sm", md: "md" }} 
            mb={4} 
            whiteSpace="pre-wrap" 
            lineHeight="1.6"
            maxW="800px"
            fontWeight="medium"
            letterSpacing="wide"
          >
            {bodyText}
          </Text>

          <Divider maxW="200px" borderColor="blue.400" opacity="0.3" />

          <Box width="100%">
            {renderThesisItems("supply chain intelligence & fortification // resilient digital infrastructure // finance <> climate interface // public goods & stewardship incentivisation // inequality tech // distributed & optimised compute // carbon capture // intelligent energy distribution // human dialogue & political voice // accessible legaltech // nature protection // carbon analytics // anti-consumer // agritech // transport // electric vehicles // industrial decarbonisation // biodiversity & earth synergy // refi & web3 // conservation reward & monitoring // water provision & purity // pollution solutions // renewables at scale // renewables (domestic & modular) // desalination // intelligent solar // macrologistics // infrastructure // longevity // silver economy // health & human function // agetech & assistive tech // biotech // healthtech // data visualisation & connections // optimising human capital // neurodiversity tech // personalised education // waste management // intuitive reducing, reusing, recycling // rehabilitation // packaging & microplastic reduction // energy transition // sustainable development & financing // proptech, management // insulation // wind & hydro // intelligent land use // harnessing creativity // mobility solutions // habitation resilience // futurism & adaptability tech // biomimetics, robotics & automation // freshwater protection // human connection // soil health, regeneration, nutrition & food security // new fertilizers // biopesticides // sustainable refrigerants // plant-based sustenance // petrochemical reduction // green & circular consumer // localised vertical farming // ocean cleanup // green architecture // energy storage & sharing // mycelium usage // clean & cultivated meat // green hydrogen infrastructure & fuel // smart grid // algae // green data centers // carbon capture technologies // indoor air quality technologies // equality // empowerment & opportunity // alternative therapies // mental health // humanising digital experiences // data protection & privacy // optimising key services // circular economy")}
          </Box>

          <Flex 
            wrap="wrap" 
            justify="center" 
            gap={3} 
            mt={8}
            borderTop="1px solid"
            borderColor="whiteAlpha.200"
            pt={4}
            width="100%"
            maxW="600px"
          >
            <Link as={RouterLink} to="/" color="blue.300" _hover={{ color: "blue.100" }}>return home</Link>
            <Text color="whiteAlpha.600">//</Text>
            <Link as={RouterLink} to="/portfolio" color="blue.300" _hover={{ color: "blue.100" }}>portfolio</Link>
            <Text color="whiteAlpha.600">//</Text>
            <Link as={RouterLink} to="/disclaimer" color="blue.300" _hover={{ color: "blue.100" }}>disclaimer</Link>
          </Flex>
        </VStack>
      </VStack>

      <Box as="footer" py={4} textAlign="center" fontSize="xs" color="whiteAlpha.600" width="100%">
        built lightweight <Link href="https://www.websitecarbon.com/website/collective-vc/" isExternal color="whiteAlpha.600">(<b>0.04g CO₂</b>)</Link> with minimalism in mind
      </Box>
    </Container>
  );
};

export default Thesis;
