
import { Container, Box, Heading, Text, VStack, Link } from "@chakra-ui/react";
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
      p={4}
    >
      <Box 
        p={8} 
        borderRadius="lg" 
        bg="rgba(0,0,0,0.7)" 
        backdropFilter="blur(8px)" 
        maxW="800px" 
        width="100%"
        boxShadow="dark-lg"
        my={8}
      >
        <VStack spacing={6} align="start">
          <Heading as="h1" size="xl" textAlign="center" width="100%">Privacy Policy for Collective VC</Heading>
          <Text textAlign="center" width="100%" fontSize="sm" color="whiteAlpha.800">Data Compliant Since Incorporation</Text>
          <Text textAlign="center" width="100%" fontSize="sm" color="whiteAlpha.800">Policy Published Online: 8 May 2025</Text>

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
      </Box>
      <ThesisFooter />
    </Container>
  );
};

export default Privacy;
