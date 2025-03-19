
import { Text } from "@chakra-ui/react";

const ThesisBody = ({ bodyText }) => {
  return (
    <Text 
      fontSize={{ base: "sm", md: "md" }} 
      mb={4} 
      whiteSpace="pre-wrap" 
      lineHeight={{ base: "1.6", md: "1.8" }}
      maxW="800px"
      fontWeight="medium"
      letterSpacing="wide"
    >
      {bodyText}
    </Text>
  );
};

export default ThesisBody;
