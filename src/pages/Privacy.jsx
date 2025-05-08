
import { Container, Box, Heading, Text, Link, VStack, UnorderedList, ListItem } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import MatrixRain from "../components/MatrixRain";
import ThesisFooter from "../components/thesis/ThesisFooter";

const Privacy = () => {
  return (
    <Container 
      centerContent 
      maxW="100vw" 
      minH="100vh" 
      display="flex" 
      flexDirection="column" 
      bgGradient="linear(to-r, black, gray.800)" 
      color="white" 
      fontFamily="Roboto, sans-serif" 
      p={0}
      position="relative"
    >
      <MatrixRain />
      
      <Container 
        maxW="800px" 
        p={{ base: 6, md: 12 }} 
        bg="rgba(0,0,0,0.7)"
        backdropFilter="blur(8px)"
        borderRadius="lg"
        boxShadow="dark-lg"
        mt={{ base: 8, md: 16 }}
        mb={{ base: 8, md: 16 }}
        zIndex={10}
        position="relative"
      >
        <VStack spacing={6} align="start">
          <Box mb={6}>
            <Link as={RouterLink} to="/" color="blue.300" _hover={{ color: "blue.100" }}>← back to home</Link>
          </Box>
          
          <Heading as="h1" size="xl" mb={2}>Privacy Policy for Collective VC</Heading>
          <Text color="whiteAlpha.800">Data Compliant Since Incorporation</Text>
          <Text color="whiteAlpha.800" mb={8}>Policy Published Online: 8 May 2025</Text>
          
          <Text>
            At Collective VC, your privacy is important to us. This Privacy Policy outlines how we collect, use, and store personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </Text>
          
          <Box w="100%" mt={4}>
            <Heading as="h2" size="md" mb={3}>1. Data Controller</Heading>
            <Text>Collective VC</Text>
            <Text>Email: <Link href="mailto:oliver@collective.vc" color="blue.300">oliver@collective.vc</Link></Text>
            <Text>Website: <Link href="https://collective.vc" isExternal color="blue.300">https://collective.vc</Link></Text>
          </Box>
          
          <Box w="100%" mt={4}>
            <Heading as="h2" size="md" mb={3}>2. Scope of Data Collection</Heading>
            <Text mb={3}>We do not collect or control personal data in any way beyond the following two specific and limited cases:</Text>
            
            <Box ml={4} mb={3}>
              <Heading as="h3" size="sm" mb={2}>a) Business & Networking Contact Storage</Heading>
              <Text mb={2}>We securely store personal contact details voluntarily shared with us through:</Text>
              <UnorderedList ml={6} spacing={1}>
                <ListItem>Events</ListItem>
                <ListItem>Online messaging platforms (e.g., LinkedIn, email)</ListItem>
                <ListItem>Occasionally, LinkedIn data exports containing connection information</ListItem>
              </UnorderedList>
              <Text mt={2}>These are stored solely for business or personal networking purposes, and are not used for any automated processing, profiling, or unrelated communications.</Text>
            </Box>
            
            <Box ml={4}>
              <Heading as="h3" size="sm" mb={2}>b) Substack Mailing List (podcast.collective.vc)</Heading>
              <Text mb={2}>
                Email addresses voluntarily subscribed to our podcast newsletter are stored and processed exclusively via Substack Inc., under their own 
                <Link href="https://substack.com/privacy" isExternal color="blue.300" ml={1}>privacy policy</Link>.
              </Text>
              <Text>We do not export Substack mailing list data or use it for any other purpose beyond podcast updates.</Text>
            </Box>
          </Box>
          
          <Box w="100%" mt={4}>
            <Heading as="h2" size="md" mb={3}>3. Lawful Basis for Processing</Heading>
            <Text><b>Legitimate Interests:</b> For storing voluntarily shared contact data for direct correspondence or professional networking.</Text>
            <Text mt={2}><b>Consent:</b> For sending emails via our podcast Substack list. You can withdraw consent at any time via the unsubscribe link in any email.</Text>
          </Box>
          
          <Box w="100%" mt={4}>
            <Heading as="h2" size="md" mb={3}>4. How Your Data Is Stored</Heading>
            <Text>Contact data is stored securely using industry-standard practices, including Google Suite with password-protected and access-controlled systems.</Text>
            <Text mt={2}>Only the data controller has access.</Text>
            <Text mt={2}>Substack handles all mailing list data and secures it per their own technical safeguards.</Text>
          </Box>
          
          <Box w="100%" mt={4}>
            <Heading as="h2" size="md" mb={3}>5. Data Sharing & Transfers</Heading>
            <Text>We do not share, sell, or transfer any personal data to third parties unless legally required. Substack acts as a separate data processor under its own policies. No data is exported from Substack for external use.</Text>
          </Box>
          
          <Box w="100%" mt={4}>
            <Heading as="h2" size="md" mb={3}>6. Your Rights</Heading>
            <Text mb={2}>You have the right to:</Text>
            <UnorderedList ml={6} spacing={1}>
              <ListItem>Access the data we hold about you</ListItem>
              <ListItem>Correct inaccuracies</ListItem>
              <ListItem>Request deletion</ListItem>
              <ListItem>Object to or restrict processing</ListItem>
              <ListItem>Withdraw consent (for Substack emails)</ListItem>
              <ListItem>Complain to the ICO (<Link href="https://ico.org.uk" isExternal color="blue.300">https://ico.org.uk</Link>)</ListItem>
            </UnorderedList>
            <Text mt={2}>
              To exercise any of these rights, contact <Link href="mailto:oliver@collective.vc" color="blue.300">oliver@collective.vc</Link>.
            </Text>
          </Box>
          
          <Box w="100%" mt={4}>
            <Heading as="h2" size="md" mb={3}>7. Data Retention</Heading>
            <Text>We retain contact details only while they are relevant for ongoing contact or networking. You may request deletion at any time. Substack manages retention of its mailing list data independently.</Text>
          </Box>
          
          <Box w="100%" mt={4} mb={8}>
            <Heading as="h2" size="md" mb={3}>8. Updates to This Policy</Heading>
            <Text>Any changes will be posted on our website and reflected by a change in the effective date at the top of this page.</Text>
          </Box>
        </VStack>
        
        <ThesisFooter />
      </Container>
    </Container>
  );
};

export default Privacy;
