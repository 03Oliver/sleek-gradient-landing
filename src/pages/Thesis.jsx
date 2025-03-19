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
  SimpleGrid,
  HStack
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { 
  Zap, Lightbulb, Leaf, Cpu, Atom, Droplet, Wind, BarChart, Database,
  Network, Code, CircuitBoard, Server, HardDrive, TreeDeciduous, Flower,
  Sprout, Battery, Plug, PlugZap, Sun, SunMoon, Waves, Fish, Router,
  Terminal, Microchip, Shrub, Flower2, Clover, TreePalm, TreePine
} from "lucide-react";

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

const unravel = keyframes`
  0% { transform: scaleY(0); opacity: 0; }
  100% { transform: scaleY(1); opacity: 1; }
`;

const pulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 rgba(14, 165, 233, 0); }
  50% { transform: scale(1.02); box-shadow: 0 0 10px rgba(14, 165, 233, 0.4); }
  100% { transform: scale(1); box-shadow: 0 0 0 rgba(14, 165, 233, 0); }
`;

const scrollDown = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(20px); }
`;

const scrollUp = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-20px); }
`;

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
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const bgGradient = useColorModeValue(
    "linear(to-r, gray.900, gray.800, gray.900)",
    "linear(to-r, gray.900, gray.800, gray.900)"
  );
  const borderColor = useColorModeValue("blue.400", "blue.400");
  const glowColor = useColorModeValue("0 0 20px #0EA5E9", "0 0 20px #0EA5E9");

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

  const getRandomShade = () => {
    const shades = [
      "rgba(0,0,0,0.25)", 
      "rgba(0,0,0,0.3)", 
      "rgba(0,0,0,0.35)", 
      "rgba(0,0,0,0.4)"
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
    return (3 + Math.random() * 9).toFixed(2);
  };

  const getRandomPulseDuration = () => {
    return (1.6 + Math.random() * 2.4).toFixed(2);
  };

  const getIconForThesisItem = (text) => {
    if (/nature|biodiversity|earth|soil|plant|regeneration|mycelium|algae/.test(text)) {
      if (/soil|regeneration|nutrition/.test(text)) return <Leaf size={18} color="#4ade80" style={{ flexShrink: 0 }} />;
      if (/mycelium/.test(text)) return <Sprout size={18} color="#84cc16" style={{ flexShrink: 0 }} />;
      if (/algae/.test(text)) return <Flower size={18} color="#10b981" style={{ flexShrink: 0 }} />;
      if (/biodiversity/.test(text)) return <TreeDeciduous size={18} color="#22c55e" style={{ flexShrink: 0 }} />;
      if (/nature protection/.test(text)) return <TreePalm size={18} color="#22d3ee" style={{ flexShrink: 0 }} />;
      return <Shrub size={18} color="#4ade80" style={{ flexShrink: 0 }} />;
    }
    
    if (/water|ocean|desalination|hydro|freshwater/.test(text)) {
      if (/ocean/.test(text)) return <Waves size={18} color="#38bdf8" style={{ flexShrink: 0 }} />;
      if (/freshwater/.test(text)) return <Fish size={18} color="#0ea5e9" style={{ flexShrink: 0 }} />;
      return <Droplet size={18} color="#38bdf8" style={{ flexShrink: 0 }} />;
    }
    
    if (/energy|electric|renewables|solar|wind|power|green hydrogen|smart grid/.test(text)) {
      if (/solar/.test(text)) return <Sun size={18} color="#fbbf24" style={{ flexShrink: 0 }} />;
      if (/wind/.test(text)) return <Wind size={18} color="#94a3b8" style={{ flexShrink: 0 }} />;
      if (/grid/.test(text)) return <PlugZap size={18} color="#fb923c" style={{ flexShrink: 0 }} />;
      if (/green hydrogen/.test(text)) return <Atom size={18} color="#a78bfa" style={{ flexShrink: 0 }} />;
      if (/storage/.test(text)) return <Battery size={18} color="#f59e0b" style={{ flexShrink: 0 }} />;
      if (/distribution/.test(text)) return <Plug size={18} color="#f97316" style={{ flexShrink: 0 }} />;
      return <Zap size={18} color="#fbbf24" style={{ flexShrink: 0 }} />;
    }
    
    if (/digital|compute|analytics|tech|data|optimis|infrastructure|network|ai|intelligence/.test(text)) {
      if (/data/.test(text)) return <Database size={18} color="#c084fc" style={{ flexShrink: 0 }} />;
      if (/carbon analytics/.test(text)) return <BarChart size={18} color="#f87171" style={{ flexShrink: 0 }} />;
      if (/network|infrastructure/.test(text)) return <Network size={18} color="#60a5fa" style={{ flexShrink: 0 }} />;
      if (/compute|distributed/.test(text)) return <Cpu size={18} color="#60a5fa" style={{ flexShrink: 0 }} />;
      if (/digital infrastructure/.test(text)) return <Server size={18} color="#818cf8" style={{ flexShrink: 0 }} />;
      if (/legaltech/.test(text)) return <Terminal size={18} color="#a855f7" style={{ flexShrink: 0 }} />;
      if (/web3|refi/.test(text)) return <CircuitBoard size={18} color="#d946ef" style={{ flexShrink: 0 }} />;
      if (/intelligence|supply chain/.test(text)) return <Microchip size={18} color="#8b5cf6" style={{ flexShrink: 0 }} />;
      if (/green data center/.test(text)) return <HardDrive size={18} color="#6366f1" style={{ flexShrink: 0 }} />;
      return <Router size={18} color="#818cf8" style={{ flexShrink: 0 }} />;
    }
    
    if (/creativity|human|health|neurodiversity|education|mental|therapy/.test(text)) {
      if (/creativity|futurism/.test(text)) return <Lightbulb size={18} color="#fcd34d" style={{ flexShrink: 0 }} />;
      if (/health|therapy|mental/.test(text)) return <Flower2 size={18} color="#f472b6" style={{ flexShrink: 0 }} />;
      if (/connection|dialogue/.test(text)) return <Clover size={18} color="#a3e635" style={{ flexShrink: 0 }} />;
      if (/education/.test(text)) return <SunMoon size={18} color="#fde047" style={{ flexShrink: 0 }} />;
      return <Code size={18} color="#a3e635" style={{ flexShrink: 0 }} />;
    }
    
    return <Cpu size={18} color="#60a5fa" style={{ flexShrink: 0 }} />;
  };

  const renderThesisItems = (text) => {
    const items = text.split(" // ");
    const itemsPerColumn = Math.ceil(items.length / 3);
    
    const column1 = items.slice(0, itemsPerColumn);
    const column2 = items.slice(itemsPerColumn, itemsPerColumn * 2);
    const column3 = items.slice(itemsPerColumn * 2);
    
    return (
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={3} mt={6} width="100%">
        <VStack spacing={3} 
          animation={hasAnimated ? `${scrollDown} 60s linear infinite alternate` : "none"}
          transition="all 0.3s"
        >
          {column1.map((item, index) => renderThesisItem(item, index))}
        </VStack>
        
        <VStack spacing={3} 
          animation={hasAnimated ? `${scrollUp} 60s linear infinite alternate` : "none"}
          transition="all 0.3s"
        >
          {column2.map((item, index) => renderThesisItem(item, index))}
        </VStack>
        
        <VStack spacing={3} 
          animation={hasAnimated ? `${scrollDown} 60s linear infinite alternate` : "none"}
          transition="all 0.3s"
        >
          {column3.map((item, index) => renderThesisItem(item, index))}
        </VStack>
      </SimpleGrid>
    );
  };
  
  const renderThesisItem = (item, index) => {
    const duration = getRandomDuration();
    const delay = getRandomDelay();
    const pulseDelay = getRandomPulseDelay();
    const pulseDuration = getRandomPulseDuration();
    const thesisIcon = getIconForThesisItem(item);
    
    return (
      <Box 
        key={index} 
        p={2}
        bg={getRandomShade()}
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
          hasAnimated 
            ? `${unravel} ${duration}s ease-out forwards${isPulsingActive ? `, ${pulse} ${pulseDuration}s ease-in-out ${pulseDelay}s infinite` : ''}`
            : "none"
        }
        animationDelay={`${delay}s`}
        opacity={hasAnimated ? "0" : "1"}
        transformOrigin="top"
        height="auto"
        fontSize="xs"
        width="100%"
      >
        <HStack align="flex-start" spacing={2}>
          {thesisIcon}
          <Text 
            fontSize="sm" 
            fontWeight="medium"
            letterSpacing="wide"
          >
            {item}
          </Text>
        </HStack>
      </Box>
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
      bgGradient="linear(to-r, black, gray.800)"
      color="white" 
      fontFamily="Roboto, sans-serif" 
      pt={8}
      px={0}
      overflowX="hidden"
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

          <Box width="100%" overflow="hidden">
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
