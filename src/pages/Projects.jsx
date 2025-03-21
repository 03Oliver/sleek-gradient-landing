
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
  ScaleFade
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
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
          <Text 
            fontSize={{ base: "xl", md: "2xl" }} 
            fontWeight="bold"
            textTransform="lowercase"
            letterSpacing="wider"
            textAlign="center"
            opacity={isSubheadingTypingComplete ? 1 : 0.7}
            animation={isSubheadingTypingComplete ? "none" : `${blink} 0.75s step-end infinite`}
          >
            {subheadingText}
          </Text>
        </Box>
        
        <Divider maxW="400px" borderColor="blue.400" opacity="0.3" mb={6} />
        
        <Center py={6}>
          <Box 
            dangerouslySetInnerHTML={{
              __html: `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="bonallack" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://uk.linkedin.com/in/bonallack?trk=profile-badge">Oliver Bonallack</a></div>`
            }}
          />
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
