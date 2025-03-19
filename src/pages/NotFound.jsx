
import { 
  Box, 
  VStack, 
  Text, 
  keyframes, 
  Link, 
  Container, 
  Flex, 
  Image, 
  Divider, 
  useColorModeValue 
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  50% { border-color: transparent }
`;

const lyrics = [
  ["eternal rest", "the bloody mess"],
  ["the dragons dance and men are like dust under their feet. and all our fine thoughts… all of our… endeavors are as nothing. we march now toward our annihilation"],
  ["just textbook rhyme style with the raw texture"],
  ["feeling the past moving in", "letting a new day begin", "hold to the time that you know", "you don't have to move on to let go"],
  ["i'm out", "nothing here to care about", "what's that sound?", "what's that song about?", "it's nothing worth me sayin' aloud", "so then why do I seem to", "need to?"],
  ["sometimes, I can't help but feel helpless", "i'm havin' daymares in daytime, wide awake, try to relate", "this can't be happenin' like I'm in a dream while I'm walkin'", "'cause what I'm seein' is hauntin'"],
  ["confusion will be my epitaph", "as I crawl, a cracked and broken path", "and if we make it, we can all sit back and laugh", "but I fear tomorrow I'll be crying", "yes, I fear tomorrow I'll be crying", "yes, I fear tomorrow I'll be crying", "crying!", "crying!"]
];

const NotFound = () => {
  const randomLyrics = lyrics[Math.floor(Math.random() * lyrics.length)];
  const [headerText, setHeaderText] = useState("");
  const fullHeaderText = "collective.vc";
  const headerIndexRef = useRef(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  // Color mode values
  const bgGradient = useColorModeValue("linear(to-r, gray.100, gray.300)", "linear(to-r, black, gray.800)");
  const textColor = useColorModeValue("gray.800", "white");
  const lyricsColor = useColorModeValue("gray.500", "gray.400");
  const dividerColor = useColorModeValue("blue.600", "blue.400");
  const linkColor = useColorModeValue("blue.600", "blue.300");
  const hoverLinkColor = useColorModeValue("blue.800", "blue.100");
  const separatorColor = useColorModeValue("gray.400", "whiteAlpha.600");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const footerColor = useColorModeValue("gray.600", "whiteAlpha.600");

  useEffect(() => {
    const headerInterval = setInterval(() => {
      setHeaderText(fullHeaderText.substring(0, headerIndexRef.current + 1));
      headerIndexRef.current++;
      if (headerIndexRef.current === fullHeaderText.length) {
        clearInterval(headerInterval);
        setIsTypingComplete(true);
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
          <Text
            fontSize="6xl"
            animation={`${rotate} 2s linear infinite`}
            display="inline-block"
          >
            💀
          </Text>
          <Text fontSize="2xl">404</Text>
          <VStack spacing={0}>
            {randomLyrics.map((line, index) => (
              <Text key={index} fontSize="md" fontStyle="italic" color={lyricsColor}>
                {line}
              </Text>
            ))}
          </VStack>

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
            <Link as={RouterLink} to="/portfolio" color={linkColor} _hover={{ color: hoverLinkColor }}>portfolio</Link>
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

export default NotFound;
