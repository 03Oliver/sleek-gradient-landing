
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
                  <Heading as="h1" size="lg">Privacy Policy for Collective VC</Heading>
                  <Text mt={2} fontSize="sm" color="whiteAlpha.800">Data Compliant Since Incorporation</Text>
                  <Text fontSize="sm" color="whiteAlpha.800">Policy Published Online: 8 May 2025</Text>
                </Box>

                <Text>
                  At Collective VC, your privacy is important to us. This Privacy Policy outlines how we collect, use, and store personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                </Text>

                <Box width="100%">
                  <Heading as="h2" size="md" mb={2}>1. Data Controller</Heading>
                  <Text>Collective VC</Text>
                  <Text>Email: <Link href="mailto:oliver@collective.vc" color="blue.300">oliver@collective.vc</Link></Text>
                  <Text>Website: <Link href="https://collective.vc" color="blue.300">https://collective.vc</Link></Text>
                </Box>

                <Box width="100%">
                  <Heading as="h2" size="md" mb={2}>2. Scope of Data Collection</Heading>
                  <Text mb={2}>We do not collect or control personal data in any way beyond the following two specific and limited cases:</Text>
                  
                  <Box pl={4} mb={3}>
                    <Heading as="h3" size="sm" mb={2}>a) Business & Networking Contact Storage</Heading>
                    <Text mb={2}>We securely store personal contact details voluntarily shared with us through:</Text>
                    <Box pl={4}>
                      <Text>• Events</Text>
                      <Text>• Online messaging platforms (e.g., LinkedIn, email)</Text>
                      <Text mb={2}>• Occasionally, LinkedIn data exports containing connection information</Text>
                    </Box>
                    <Text>These are stored solely for business or personal networking purposes and are not used for any automated processing, profiling, or unrelated communications.</Text>
                  </Box>
                  
                  <Box pl={4}>
                    <Heading as="h3" size="sm" mb={2}>b) Substack Mailing List (podcast.collective.vc)</Heading>
                    <Text mb={2}>Email addresses voluntarily subscribed to our podcast newsletter are stored and processed exclusively via Substack Inc., under their privacy policy.</Text>
                    <Text>We do not export Substack mailing list data or use it for any purpose beyond podcast updates.</Text>
                  </Box>
                </Box>

                <Box width="100%">
                  <Heading as="h2" size="md" mb={2}>3. Lawful Basis for Processing</Heading>
                  <Text>• <strong>Legitimate Interests:</strong> For storing voluntarily shared contact data for direct correspondence or professional networking.</Text>
                  <Text>• <strong>Consent:</strong> For sending emails via our podcast Substack list. You can withdraw consent at any time via the unsubscribe link in any email.</Text>
                </Box>

                <Box width="100%">
                  <Heading as="h2" size="md" mb={2}>4. How Your Data Is Stored</Heading>
                  <Text>Contact data is stored securely using Google Suite, protected by passwords and restricted access in line with industry best practices.</Text>
                  <Text>Only the data controller has access.</Text>
                  <Text>Substack handles all mailing list data using their own technical safeguards.</Text>
                </Box>

                <Box width="100%">
                  <Heading as="h2" size="md" mb={2}>5. Data Sharing & Transfers</Heading>
                  <Text>• We do not share, sell, or transfer any personal data to third parties unless legally required.</Text>
                  <Text>• Substack acts as a separate data processor under its own policies.</Text>
                  <Text>• No data is exported from Substack for external use, nor do we import data into Substack for marketing purposes without consent.</Text>
                </Box>

                <Box width="100%">
                  <Heading as="h2" size="md" mb={2}>6. Your Rights</Heading>
                  <Text mb={2}>You have the right to:</Text>
                  <Box pl={4}>
                    <Text>• Access the data we hold about you</Text>
                    <Text>• Correct inaccuracies</Text>
                    <Text>• Request deletion</Text>
                    <Text>• Object to or restrict processing</Text>
                    <Text>• Withdraw consent (for Substack emails)</Text>
                    <Text mb={2}>• Complain to the ICO: <Link href="https://ico.org.uk" isExternal color="blue.300">https://ico.org.uk</Link></Text>
                  </Box>
                  <Text>To exercise any of these rights, contact <Link href="mailto:oliver@collective.vc" color="blue.300">oliver@collective.vc</Link>.</Text>
                </Box>

                <Box width="100%">
                  <Heading as="h2" size="md" mb={2}>7. Data Retention</Heading>
                  <Text>• We retain contact details only while they are relevant for ongoing contact or networking.</Text>
                  <Text>• Substack manages retention of its mailing list data independently.</Text>
                </Box>

                <Box width="100%">
                  <Heading as="h2" size="md" mb={2}>8. Updates to This Policy</Heading>
                  <Text>Any changes will be posted on our website and reflected by a change in the effective date at the top of this page.</Text>
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
          <Link as={RouterLink} to="/" color="blue.300" _hover={{ color: "blue.100" }}>home</Link>
          <Text color="whiteAlpha.600">//</Text>
          <Link as={RouterLink} to="/thesis" color="blue.300" _hover={{ color: "blue.100" }}>thesis</Link>
          <Text color="whiteAlpha.600">//</Text>
          <Link as={RouterLink} to="/portfolio" color="blue.300" _hover={{ color: "blue.100" }}>portfolio</Link>
        </Flex>
      </VStack>
      
      <Box as="footer" py={4} textAlign="center" fontSize="xs" color="whiteAlpha.600" width="100%">
        built lightweight <Link href="https://www.websitecarbon.com/website/collective-vc/" isExternal color="whiteAlpha.600">(<b>0.05g CO₂</b>)</Link> with minimalism in mind
      </Box>
    </Container>
  );
};

export default Disclaimer;
