
import { Flex, Text, VStack } from "@chakra-ui/react";
import InvestmentCard from "./InvestmentCard";

const InvestmentGrid = ({ investments, title, subtitle }) => {
  return (
    <VStack spacing={4} width="100%" textAlign="center">
      <Text fontSize="lg">{title}</Text>
      {subtitle && <Text fontSize="md">{subtitle}</Text>}
      
      <Flex 
        wrap="wrap" 
        justify="center" 
        gap={4}
        width="100%"
        mt={2}
      >
        {investments.map((investment, index) => (
          <InvestmentCard key={index} investment={investment} />
        ))}
      </Flex>
    </VStack>
  );
};

export default InvestmentGrid;
