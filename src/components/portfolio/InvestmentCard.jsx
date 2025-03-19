
import { Box, Link, Text, VStack } from "@chakra-ui/react";

const InvestmentCard = ({ investment }) => {
  return (
    <Link 
      href={investment.url} 
      isExternal 
      _hover={{ textDecoration: "none", transform: "scale(1.05)" }}
      transition="transform 0.2s"
    >
      <Box
        p={3}
        borderRadius="md"
        bg="rgba(30, 30, 30, 0.6)"
        borderLeft={`3px solid ${investment.color}`}
        backdropFilter="blur(10px)"
        boxShadow="lg"
        minWidth="180px"
        height="60px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        fontSize="sm"
        fontWeight="medium"
        color="white"
        transition="all 0.2s"
        _hover={{ 
          bg: "rgba(40, 40, 40, 0.7)",
          boxShadow: "xl"
        }}
      >
        <VStack spacing={0} w="100%">
          <Text>{investment.name}</Text>
          {investment.subheading && (
            <Text 
              fontSize="xs" 
              color="whiteAlpha.700" 
              mt="0 !important"
            >
              ({investment.subheading})
            </Text>
          )}
        </VStack>
      </Box>
    </Link>
  );
};

export default InvestmentCard;
