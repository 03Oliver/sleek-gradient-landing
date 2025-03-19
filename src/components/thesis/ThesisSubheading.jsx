
import { Box, Badge, keyframes } from "@chakra-ui/react";

const blink = keyframes`
  50% { border-color: transparent }
`;

const ThesisSubheading = ({ subheadingText, isBodyTypingComplete }) => {
  return (
    <Box mb={4}>
      <Badge 
        colorScheme="blue" 
        fontSize={{ base: "md", md: "lg" }} 
        py={1} 
        px={{ base: 3, md: 4 }} 
        borderRadius="full"
        textTransform="lowercase"
        letterSpacing="wider"
        animation={isBodyTypingComplete ? "none" : `${blink} 0.75s step-end infinite`}
      >
        {subheadingText}
      </Badge>
    </Box>
  );
};

export default ThesisSubheading;
