
import { Box, Container, Text, Link, VStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const Disclaimer = () => {
  return (
    <Container centerContent maxW="100vw" minH="100vh" display="flex" flexDirection="column" alignItems="center" bgGradient="linear(to-r, black, gray.800)" color="white" fontFamily="Roboto, sans-serif" pt={8}>
      <VStack spacing={8} width="100%" maxW="800px" px={4} flex="1">
        <Navbar />

        <VStack spacing={6} textAlign="center">
          <Text>
            this website is intended for informational purposes only and should not be seen as an invitation to invest or as a financial promotion. you should not rely on any information provided here. the content is not intended to offer, nor should it be interpreted as, any form of advice.
          </Text>
          
          <Text>
            please note that startup, special-purpose-vehicle (spv) and syndicate investments carry significant risks and are only suitable for experienced investors who fully understand these risks. any independent investment software platform utilised will execute all relevant checks and vetting on network members as are required by law to protect and verify the identity and experience of potential investors. it is essential to seek independent financial advice before making any investment decisions.
          </Text>
          
          <Text>
            collective vc ltd - 14226589 - sic 64303
          </Text>
        </VStack>
      </VStack>
      <Box as="footer" py={4} textAlign="center" fontSize="xs" color="whiteAlpha.600" width="100%">
        built lightweight <Link href="https://www.websitecarbon.com/website/collective-vc/" isExternal color="whiteAlpha.600">(<b>0.04g CO₂</b>)</Link> with minimalism in mind
      </Box>
    </Container>
  );
};

export default Disclaimer;
