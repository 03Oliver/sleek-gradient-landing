
import { 
  Container, 
  Box, 
  Text, 
  VStack, 
  Divider,
  useMediaQuery,
  useColorModeValue,
} from "@chakra-ui/react";
import HeaderAnimation from "../components/portfolio/HeaderAnimation";
import InvestmentGrid from "../components/portfolio/InvestmentGrid";
import Footer from "../components/common/Footer";
import { personalInvestments } from "../data/investments";

const Portfolio = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const bgGradient = useColorModeValue(
    "linear(to-r, gray.900, gray.800, gray.900)",
    "linear(to-r, gray.900, gray.800, gray.900)"
  );

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
          <HeaderAnimation />
        </Box>
        
        <VStack spacing={6} width="100%" maxW="800px" px={{ base: 4, md: 6 }} textAlign="center">
          <Text fontSize="lg">oliver's personal investments & deals + sweat equity & carry share (assorted)</Text>
          
          <InvestmentGrid 
            investments={personalInvestments} 
            title="" 
          />
          
          <InvestmentGrid 
            title="syndicate deals"
            subtitle="coming very soon"
          />

          <Divider maxW="200px" borderColor="blue.400" opacity="0.3" mt={6} mb={6} />

          <Footer />
        </VStack>
      </VStack>
    </Container>
  );
};

export default Portfolio;
