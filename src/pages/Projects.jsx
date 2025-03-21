
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
  Heading,
  useColorModeValue,
  Center,
  ScaleFade,
  Badge,
  HStack,
  Tooltip
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { typing, blink } from "../components/thesis/AnimationKeyframes";
import { Mic, MapPin, MessageSquare, Car, Video, Link2, Laptop, TreeDeciduous } from "lucide-react";

const Projects = () => {
  const [headerText, setHeaderText] = useState("");
  const [subheadingText, setSubheadingText] = useState("");
  const fullHeaderText = "collective.vc";
  const fullSubheadingText = "projects (non-exhaustive)";
  const headerIndexRef = useRef(0);
  const subheadingIndexRef = useRef(0);
  const [isHeaderTypingComplete, setIsHeaderTypingComplete] = useState(false);
  const [isSubheadingTypingComplete, setIsSubheadingTypingComplete] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const bgGradient = useColorModeValue(
    "linear(to-r, gray.900, gray.800, gray.900)",
    "linear(to-r, gray.900, gray.800, gray.900)"
  );

  useEffect(() => {
    const hasAnimationPlayed = sessionStorage.getItem('animationPlayedProjects');

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
        
        sessionStorage.setItem('animationPlayedProjects', 'true');
      }
    }, 50);
  };

  // Effect to load LinkedIn badge script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
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
        
        <Divider maxW="400px" borderColor="blue.400" opacity="0.3" mb={6} />
        
        {/* Center the list with max width and center alignment */}
        <VStack spacing={4} width="100%" maxW="600px" align="center" mx="auto">
          {/* Coming soon items at the top */}
          <HStack spacing={3}>
            <Box as={Laptop} size={20} color="blue.300" />
            <Text color="blue.300">
              climateimpact summit hackathon host <Badge colorScheme="green" ml={1} fontSize="xs">coming soon</Badge>
            </Text>
          </HStack>
          
          <HStack spacing={3}>
            <Box as={TreeDeciduous} size={20} color="blue.300" />
            <Text color="blue.300">
              fireside chat with jamie burrows <Badge colorScheme="green" ml={1} fontSize="xs">coming soon</Badge>
            </Text>
          </HStack>
          
          {/* Updated podcast links */}
          <HStack spacing={3}>
            <Box as={Mic} size={20} color="blue.300" />
            <Link href="https://www.youtube.com/@CollectiveVC" isExternal color="blue.300" _hover={{ color: "blue.100" }}>
              collective vc podcast (15+ episodes)
            </Link>
          </HStack>
          
          <HStack spacing={3}>
            <Box as={Mic} size={20} color="blue.300" />
            <Link href="https://linktr.ee/solderahq" isExternal color="blue.300" _hover={{ color: "blue.100" }}>
              soldera markets podcast
            </Link>
          </HStack>
          
          <HStack spacing={3}>
            <Box as={MapPin} size={20} color="blue.300" />
            <Link href="https://www.linkedin.com/posts/bonallack_climatetech-exploration-estonia-activity-7274763668804845568-v2no?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbNXUABBBu1fZSxkX3tRBbZU_5JAvG1lJs" isExternal color="blue.300" _hover={{ color: "blue.100" }}>
              trip to tartu, estonia
            </Link>
          </HStack>
          
          <HStack spacing={3}>
            <Box as={MessageSquare} size={20} color="blue.300" />
            <Link href="https://www.youtube.com/watch?v=er81yRKCnCA" isExternal color="blue.300" _hover={{ color: "blue.100" }}>
              tedx
            </Link>
          </HStack>
          
          <HStack spacing={3}>
            <Box as={Car} size={20} color="blue.300" />
            <Link href="https://www.linkedin.com/posts/bonallack_electricvehicles-fleetmanagement-saas-activity-7270779377150316545-Zq8V?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbNXUABBBu1fZSxkX3tRBbZU_5JAvG1lJs" isExternal color="blue.300" _hover={{ color: "blue.100" }}>
              rightcharge investment
            </Link>
          </HStack>
          
          <HStack spacing={3}>
            <Box as={Video} size={20} color="blue.300" />
            <Link href="https://www.linkedin.com/posts/bonallack_we-are-excited-to-launch-the-climateimpact-activity-7285626865074012161-cKWN?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbNXUABBBu1fZSxkX3tRBbZU_5JAvG1lJs" isExternal color="blue.300" _hover={{ color: "blue.100" }}>
              climateimpact video
            </Link>
          </HStack>
          
          <HStack spacing={3}>
            <Box as={Video} size={20} color="blue.300" />
            <Link href="https://www.linkedin.com/posts/bonallack_climateimpact-startups-innovation-activity-7194259813835382784-P7D5?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbNXUABBBu1fZSxkX3tRBbZU_5JAvG1lJs" isExternal color="blue.300" _hover={{ color: "blue.100" }}>
              climateimpact video
            </Link>
          </HStack>
          
          <HStack spacing={3}>
            <Box as={Link2} size={20} color="blue.300" />
            <Link href="https://www.linkedin.com/posts/bonallack_blockchain-governance-universityofbristol-activity-7192121121595379713-mm0C?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbNXUABBBu1fZSxkX3tRBbZU_5JAvG1lJs" isExternal color="blue.300" _hover={{ color: "blue.100" }}>
              bristol blockchain
            </Link>
          </HStack>
        </VStack>
        
        <Divider maxW="400px" borderColor="blue.400" opacity="0.3" my={6} />
        
        <Center py={2}>
          <div 
            className="badge-base LI-profile-badge" 
            data-locale="en_US" 
            data-size="large" 
            data-theme="dark" 
            data-type="HORIZONTAL" 
            data-vanity="bonallack" 
            data-version="v1"
          >
            <a className="badge-base__link LI-simple-link" href="https://uk.linkedin.com/in/bonallack?trk=profile-badge"></a>
          </div>
        </Center>
        
        <Flex 
          wrap="wrap" 
          justify="center" 
          gap={3} 
          mt={{ base: 8, md: "auto" }}
          borderTop="1px solid"
          borderColor="whiteAlpha.200"
          pt={4}
          width="100%"
          maxW="600px"
        >
          <Link as={RouterLink} to="/" color="blue.300" _hover={{ color: "blue.100" }}>home</Link>
          <Text color="whiteAlpha.600">//</Text>
          <Link as={RouterLink} to="/portfolio" color="blue.300" _hover={{ color: "blue.100" }}>portfolio</Link>
          <Text color="whiteAlpha.600">//</Text>
          <Link as={RouterLink} to="/thesis" color="blue.300" _hover={{ color: "blue.100" }}>thesis</Link>
          <Text color="whiteAlpha.600">//</Text>
          <Link as={RouterLink} to="/disclaimer" color="blue.300" _hover={{ color: "blue.100" }}>disclaimer</Link>
        </Flex>
      </VStack>
      
      <Box as="footer" py={4} textAlign="center" fontSize="xs" color="whiteAlpha.600" width="100%">
        built lightweight <Link href="https://www.websitecarbon.com/website/collective-vc/" isExternal color="whiteAlpha.600">(<b>0.05g CO₂</b>)</Link> with minimalism in mind
      </Box>
    </Container>
  );
};

export default Projects;
