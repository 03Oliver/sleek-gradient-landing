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
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Brain, AlertTriangle, Building, PoundSterling, Lock } from "lucide-react";
import { typing, blink, badgeBlink } from "../components/thesis/AnimationKeyframes";
import { useLocation } from "react-router-dom";

const Disclaimer = () => {
  const [headerText, setHeaderText] = useState("");
  const [subheadingText, setSubheadingText] = useState("");
  const fullHeaderText = "collective.vc";
  const fullSubheadingText = "legal information";
  const headerIndexRef = useRef(0);
  const subheadingIndexRef = useRef(0);
  const [isHeaderTypingComplete, setIsHeaderTypingComplete] = useState(false);
  const [isSubheadingTypingComplete, setIsSubheadingTypingComplete] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const bgGradient = useColorModeValue(
    "linear(to-r, gray.900, gray.800, gray.900)",
    "linear(to-r, gray.900, gray.800, gray.900)"
  );
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const hasAnimationPlayed = sessionStorage.getItem('animationPlayedDisclaimer');

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
        sessionStorage.setItem('animationPlayedDisclaimer', 'true');
      }
    }, 50);
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
            colorScheme="purple" 
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

        <Tabs variant="unstyled" colorScheme="blue" width="100%" maxW="800px">
          <TabList justifyContent="center" mb={6}>
            <Tab 
              color="whiteAlpha.700" 
              _selected={{ color: "white", fontWeight: "bold" }}
              mx={2}
              py={2}
              px={4}
            >
              Disclaimer
            </Tab>
            <Tab 
              color="whiteAlpha.700" 
              _selected={{ color: "white", fontWeight: "bold" }}
              mx={2}
              py={2}
              px={4}
            >
              Privacy
            </Tab>
          </TabList>
          
          <TabPanels>
            <TabPanel>
              <VStack spacing={6} width="100%" textAlign="left" alignItems="flex-start">
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
                  <HStack align="flex-start" spacing={4}>
                    <Brain size={20} color="#3182CE" style={{ marginTop: '4px', flexShrink: 0 }} />
                    <Text>
                      this website is for informational purposes only and should not be seen as an invitation to invest or a financial promotion. you should not rely on any information provided here. the content is not intended to offer, nor should it be interpreted as, any form of advice.
                    </Text>
                  </HStack>
                  
                  <Box h={6} />
                  
                  <HStack align="flex-start" spacing={4}>
                    <AlertTriangle size={20} color="#E53E3E" style={{ marginTop: '4px', flexShrink: 0 }} />
                    <Text>
                      please note that startup, special-purpose vehicle (spv) and syndicate investments carry significant risks and are only suitable for experienced investors who fully understand them. any independent investment platform used will carry out required checks and verification in line with legal obligations. always seek independent financial advice before making any investment decisions.
                    </Text>
                  </HStack>
                  
                  <Box h={6} />
                  
                  <HStack align="flex-start" spacing={4}>
                    <Building size={20} color="#718096" style={{ marginTop: '4px', flexShrink: 0 }} />
                    <Text>
                      collective vc ltd – 14226589 – sic 64303
                    </Text>
                  </HStack>
                  
                  <Box h={6} />
                  
                  <HStack align="flex-start" spacing={4}>
                    <PoundSterling size={20} color="#781c44" style={{ marginTop: '4px', flexShrink: 0 }} />
                    <Text>
                      not fca regulated – private, networked, relationship-based
                    </Text>
                  </HStack>
                </Box>
              </VStack>
            </TabPanel>
            
            <TabPanel>
              <VStack spacing={6} align="start" width="100%">
                <Box textAlign="center" width="100%" mb={2}>
                  <Text mt={2} fontSize="sm" color="whiteAlpha.800">data compliant since incorporation</Text>
                  <Text fontSize="sm" color="whiteAlpha.800">policy published online: 8 may 2025</Text>
                </Box>

                <Text>
                  at collective vc, your privacy is important to us. this privacy policy outlines how we collect, use, and store personal data in compliance with the uk general data protection regulation (uk gdpr) and the data protection act 2018.
                </Text>

                <Box width="100%">
                  <Heading as="h2" size="md" mb={2}>1. data controller</Heading>
                  <Text>collective vc</Text>
                  <Text>email: <Link href="mailto:oliver@collective.vc" color="blue.300">oliver@collective.vc</Link></Text>
                  <Text>website: <Link href="https://collective.vc" color="blue.300">https://collective.vc</Link></Text>
                </Box>

                <Box width="100%">
                  <Heading as="h2" size="md" mb={2}>2. scope of data collection</Heading>
                  <Text mb={2}>we do not collect or control personal data in any way beyond the following two specific and limited cases:</Text>
                  
                  <Box pl={4} mb={3}>
                    <Heading as="h3" size="sm" mb={2}>a) business & networking contact storage</Heading>
                    <Text mb={2}>we securely store personal contact details voluntarily shared with us through:</Text>
                    <Box pl={4}>
                      <Text>• events</Text>
                      <Text>• online messaging platforms (e.g., linkedin, email)</Text>
                      <Text mb={2}>• occasionally, linkedin data exports containing connection information</Text>
                    </Box>
                    <Text>these are stored solely for business or personal networking purposes and are not used for any automated processing, profiling, or unrelated communications.</Text>
                  </Box>
                  
                  <Box pl={4}>
                    <Heading as="h3" size="sm" mb={2}>b) substack mailing list (podcast.collective.vc)</Heading>
                    <Text mb={2}>email addresses voluntarily subscribed to our podcast newsletter are stored and processed exclusively via substack inc., under their privacy policy.</Text>
                    <Text>we do not export substack mailing list data or use it for any purpose beyond podcast updates.</Text>
                  </Box>
                </Box>

                <Box width="100%">
                  <Heading as="h2" size="md" mb={2}>3. lawful basis for processing</Heading>
                  <Text>• <strong>legitimate interests:</strong> for storing voluntarily shared contact data for direct correspondence or professional networking.</Text>
                  <Text>• <strong>consent:</strong> for sending emails via our podcast substack list. you can withdraw consent at any time via the unsubscribe link in any email.</Text>
                </Box>

                <Box width="100%">
                  <Heading as="h2" size="md" mb={2}>4. how your data is stored</Heading>
                  <Text>contact data is stored securely using google suite, protected by passwords and restricted access in line with industry best practices.</Text>
                  <Text>only the data controller has access.</Text>
                  <Text>substack handles all mailing list data using their own technical safeguards.</Text>
                </Box>

                <Box width="100%">
                  <Heading as="h2" size="md" mb={2}>5. data sharing & transfers</Heading>
                  <Text>• we do not share, sell, or transfer any personal data to third parties unless legally required.</Text>
                  <Text>• substack acts as a separate data processor under its own policies.</Text>
                  <Text>• no data is exported from substack for external use, nor do we import data into substack for marketing purposes without consent.</Text>
                </Box>

                <Box width="100%">
                  <Heading as="h2" size="md" mb={2}>6. your rights</Heading>
                  <Text mb={2}>you have the right to:</Text>
                  <Box pl={4}>
                    <Text>• access the data we hold about you</Text>
                    <Text>• correct inaccuracies</Text>
                    <Text>• request deletion</Text>
                    <Text>• object to or restrict processing</Text>
                    <Text>• withdraw consent (for substack emails)</Text>
                    <Text mb={2}>• complain to the ico: <Link href="https://ico.org.uk" isExternal color="blue.300">https://ico.org.uk</Link></Text>
                  </Box>
                  <Text>to exercise any of these rights, contact <Link href="mailto:oliver@collective.vc" color="blue.300">oliver@collective.vc</Link>.</Text>
                </Box>

                <Box width="100%">
                  <Heading as="h2" size="md" mb={2}>7. data retention</Heading>
                  <Text>• we retain contact details only while they are relevant for ongoing contact or networking.</Text>
                  <Text>• substack manages retention of its mailing list data independently.</Text>
                </Box>

                <Box width="100%">
                  <Heading as="h2" size="md" mb={2}>8. updates to this policy</Heading>
                  <Text>any changes will be posted on our website and reflected by a change in the effective date at the top of this page.</Text>
                </Box>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Divider maxW="200px" borderColor="blue.400" opacity="0.3" mt={6} mb={6} alignSelf="center" />

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
          {currentPath !== "/" && (
            <>
              <Link as={RouterLink} to="/" color="blue.300" _hover={{ color: "blue.100" }}>home</Link>
              <Text color="whiteAlpha.600">//</Text>
            </>
          )}
          
          {currentPath !== "/thesis" && (
            <>
              <Link as={RouterLink} to="/thesis" color="blue.300" _hover={{ color: "blue.100" }}>thesis</Link>
              <Text color="whiteAlpha.600">//</Text>
            </>
          )}
          
          {currentPath !== "/portfolio" && (
            <>
              <Link as={RouterLink} to="/portfolio" color="blue.300" _hover={{ color: "blue.100" }}>portfolio</Link>
              <Text color="whiteAlpha.600">//</Text>
            </>
          )}
          
          {currentPath !== "/projects" && (
            <>
              <Link as={RouterLink} to="/projects" color="blue.300" _hover={{ color: "blue.100" }}>projects</Link>
              {currentPath !== "/disclaimer" && <Text color="whiteAlpha.600">//</Text>}
            </>
          )}
        </Flex>
      </VStack>
      
      <Box as="footer" py={4} textAlign="center" fontSize="xs" color="whiteAlpha.600" width="100%">
        built lightweight <Link href="https://www.websitecarbon.com/website/collective-vc/" isExternal color="whiteAlpha.600">(<b>0.05g CO₂</b>)</Link> with minimalism in mind
      </Box>
    </Container>
  );
};

export default Disclaimer;
