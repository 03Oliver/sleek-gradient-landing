
import { 
  Box, 
  Container, 
  Text, 
  Link, 
  Flex, 
  Image, 
  VStack, 
  Divider,
  useColorModeValue,
  useMediaQuery,
  HStack,
  Badge,
  useEffect,
  useRef,
  useState
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Mic, MapPin, Speaker, Car, Video, Link as LinkIcon, User } from "lucide-react";
import { typing, blink } from "../components/thesis/AnimationKeyframes";

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
    // Load LinkedIn badge script
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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

  const projects = [
    { 
      icon: <Mic size={20} color="#3182CE" style={{ marginTop: '4px', flexShrink: 0 }} />,
      name: "podcast",
      url: "https://www.youtube.com/@CollectiveVC"
    },
    { 
      icon: <MapPin size={20} color="#E53E3E" style={{ marginTop: '4px', flexShrink: 0 }} />,
      name: "tartu, estonia",
      url: "https://www.linkedin.com/posts/bonallack_climatetech-exploration-estonia-activity-7274763668804845568-v2no?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbNXUABBBu1fZSxkX3tRBbZU_5JAvG1lJs"
    },
    { 
      icon: <Speaker size={20} color="#38A169" style={{ marginTop: '4px', flexShrink: 0 }} />,
      name: "tedx",
      url: "https://www.youtube.com/watch?v=er81yRKCnCA"
    },
    { 
      icon: <Car size={20} color="#DD6B20" style={{ marginTop: '4px', flexShrink: 0 }} />,
      name: "rightcharge",
      url: "https://www.linkedin.com/posts/bonallack_electricvehicles-fleetmanagement-saas-activity-7270779377150316545-Zq8V?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbNXUABBBu1fZSxkX3tRBbZU_5JAvG1lJs"
    },
    { 
      icon: <Video size={20} color="#805AD5" style={{ marginTop: '4px', flexShrink: 0 }} />,
      name: "climateimpact video",
      url: "https://www.linkedin.com/posts/bonallack_we-are-excited-to-launch-the-climateimpact-activity-7285626865074012161-cKWN?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbNXUABBBu1fZSxkX3tRBbZU_5JAvG1lJs"
    },
    { 
      icon: <Video size={20} color="#805AD5" style={{ marginTop: '4px', flexShrink: 0 }} />,
      name: "climateimpact video",
      url: "https://www.linkedin.com/posts/bonallack_climateimpact-startups-innovation-activity-7194259813835382784-P7D5?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbNXUABBBu1fZSxkX3tRBbZU_5JAvG1lJs"
    },
    { 
      icon: <LinkIcon size={20} color="#4FD1C5" style={{ marginTop: '4px', flexShrink: 0 }} />,
      name: "bristol blockchain",
      url: "https://www.linkedin.com/posts/bonallack_blockchain-governance-universityofbristol-activity-7192121121595379713-mm0C?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbNXUABBBu1fZSxkX3tRBbZU_5JAvG1lJs"
    },
    { 
      icon: <User size={20} color="#F6AD55" style={{ marginTop: '4px', flexShrink: 0 }} />,
      name: "dale vince",
      url: "https://www.linkedin.com/posts/bonallack_blockchain-governance-universityofbristol-activity-7192121121595379713-mm0C?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbNXUABBBu1fZSxkX3tRBbZU_5JAvG1lJs"
    }
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
            colorScheme="green" 
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
            {projects.map((project, index) => (
              <Box key={index} mb={6}>
                <HStack align="flex-start" spacing={4}>
                  {project.icon}
                  <Link href={project.url} isExternal color="blue.300" _hover={{ color: "blue.100" }}>
                    {project.name}
                  </Link>
                </HStack>
              </Box>
            ))}
          </Box>

          <Divider maxW="200px" borderColor="green.400" opacity="0.3" mt={6} mb={6} alignSelf="center" />
          
          <Box 
            width="100%" 
            display="flex" 
            justifyContent="center" 
            pt={4}
          >
            <Box className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="bonallack" data-version="v1">
              <Link href="https://uk.linkedin.com/in/bonallack?trk=profile-badge" isExternal>Oliver Bonallack</Link>
            </Box>
          </Box>

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
            <Link as={RouterLink} to="/" color="blue.300" _hover={{ color: "blue.100" }}>home</Link>
            <Text color="whiteAlpha.600">//</Text>
            <Link as={RouterLink} to="/thesis" color="blue.300" _hover={{ color: "blue.100" }}>thesis</Link>
            <Text color="whiteAlpha.600">//</Text>
            <Link as={RouterLink} to="/portfolio" color="blue.300" _hover={{ color: "blue.100" }}>portfolio</Link>
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

export default Projects;
