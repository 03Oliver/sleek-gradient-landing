
import { useEffect, useState, useRef } from "react";
import { Container, Link, Box, Text, keyframes, Flex, Image, VStack, HStack, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  50% { border-color: transparent }
`;

const Media = () => {
  const [headerText, setHeaderText] = useState("");
  const fullHeaderText = "collective.vc";
  const headerIndexRef = useRef(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Sample media items (you can replace with your actual content)
  const mediaItems = [
    {
      type: "youtube",
      embedUrl: "https://www.youtube.com/embed/ur9JHXirUBQ",
      title: "Collective VC Introduction"
    },
    {
      type: "youtube",
      embedUrl: "https://www.youtube.com/embed/tFmkL7zs1ZE",
      title: "Climate Tech Insights"
    },
    {
      type: "image",
      src: "/lovable-uploads/d2a42c29-0400-4693-a125-436300552cec.png",
      alt: "Media Gallery Layout"
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1569163139599-0f4522e36c2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Climate Tech"
    }
  ];

  useEffect(() => {
    // Check if animation has already played this session
    const hasAnimationPlayed = sessionStorage.getItem('animationPlayed');

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
      }
    }, 50);

    return () => clearInterval(headerInterval);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => 
      prev === mediaItems.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? mediaItems.length - 1 : prev - 1
    );
  };

  const renderMediaItem = (item) => {
    if (item.type === "youtube") {
      return (
        <Box 
          width="100%" 
          height={{ base: "200px", md: "400px" }}
          borderRadius="md"
          overflow="hidden"
        >
          <iframe
            width="100%"
            height="100%"
            src={item.embedUrl}
            title={item.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>
      );
    } else if (item.type === "image") {
      return (
        <Image
          src={item.src}
          alt={item.alt}
          width="100%"
          height={{ base: "200px", md: "400px" }}
          objectFit="cover"
          borderRadius="md"
        />
      );
    }
    return null;
  };

  return (
    <Container centerContent maxW="100vw" minH="100vh" display="flex" flexDirection="column" alignItems="center" bgGradient="linear(to-r, black, gray.800)" color="white" fontFamily="Roboto, sans-serif" pt={8}>
      <VStack spacing={6} width="100%" maxW="800px" px={4} flex="1">
        <Box textAlign="center" mb={4}>
          <Flex alignItems="center" justifyContent="center">
            <Image src="/favicon.ico" alt="Favicon" boxSize="24px" mr={2} />
            <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
              <Box 
                as="pre" 
                fontSize="4xl" 
                fontWeight="bold" 
                whiteSpace="nowrap" 
                overflow="hidden" 
                borderRight={isTypingComplete ? "none" : "2px solid"}
                animation={isTypingComplete ? `${typing} 2s steps(${fullHeaderText.length})` : `${typing} 2s steps(${fullHeaderText.length}), ${blink} 0.75s step-end infinite`}
              >
                {headerText}
              </Box>
            </Link>
          </Flex>
        </Box>

        <Text fontSize="lg" mb={2}>media gallery</Text>
        
        <Box position="relative" width="100%" my={4}>
          <Box 
            width="100%" 
            position="relative"
            transition="transform 0.3s ease"
          >
            {renderMediaItem(mediaItems[currentSlide])}
          </Box>

          {/* Mobile Controls (Vertical) */}
          {isMobile ? (
            <VStack position="absolute" right="10px" top="50%" transform="translateY(-50%)" spacing={2} zIndex={2}>
              <IconButton
                aria-label="Previous slide"
                icon={<ChevronUpIcon boxSize={6} />}
                onClick={handlePrev}
                colorScheme="blackAlpha"
                borderRadius="full"
                size="md"
              />
              <IconButton
                aria-label="Next slide"
                icon={<ChevronDownIcon boxSize={6} />}
                onClick={handleNext}
                colorScheme="blackAlpha"
                borderRadius="full"
                size="md"
              />
            </VStack>
          ) : (
            /* Desktop Controls (Horizontal) */
            <HStack position="absolute" top="50%" width="100%" transform="translateY(-50%)" justifyContent="space-between" px={2} zIndex={2}>
              <IconButton
                aria-label="Previous slide"
                icon={<ChevronLeftIcon boxSize={6} />}
                onClick={handlePrev}
                colorScheme="blackAlpha"
                borderRadius="full"
                size="md"
              />
              <IconButton
                aria-label="Next slide"
                icon={<ChevronRightIcon boxSize={6} />}
                onClick={handleNext}
                colorScheme="blackAlpha"
                borderRadius="full"
                size="md"
              />
            </HStack>
          )}

          {/* Dots indicator */}
          <HStack justifyContent="center" mt={4} spacing={2}>
            {mediaItems.map((_, index) => (
              <Box
                key={index}
                w="8px"
                h="8px"
                borderRadius="full"
                bg={currentSlide === index ? "blue.300" : "gray.500"}
                onClick={() => setCurrentSlide(index)}
                cursor="pointer"
                transition="background 0.3s ease"
              />
            ))}
          </HStack>
        </Box>

        <Text color="white" mt={4}>
          <Link as={RouterLink} to="/" color="blue.300">return home</Link>
          {" // "}
          <Link as={RouterLink} to="/portfolio" color="blue.300">portfolio</Link>
          {" // "}
          <Link as={RouterLink} to="/disclaimer" color="blue.300">disclaimer</Link>
          {" // "}
          <Link as={RouterLink} to="/thesis" color="blue.300">thesis</Link>
        </Text>
      </VStack>
      <Box as="footer" py={4} textAlign="center" fontSize="xs" color="whiteAlpha.600" width="100%">
        built lightweight <Link href="https://www.websitecarbon.com/website/collective-vc/" isExternal color="whiteAlpha.600">(<b>0.04g CO₂</b>)</Link> with minimalism in mind
      </Box>
    </Container>
  );
};

export default Media;
