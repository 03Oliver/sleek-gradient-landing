
import { useState, useRef, useEffect } from "react";
import { 
  Box, 
  Text, 
  Flex, 
  Image, 
  Badge,
  Link
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { typing, blink } from "./AnimationKeyframes";

const ThesisHeader = ({ 
  headerText, 
  subheadingText, 
  isHeaderTypingComplete, 
  isBodyTypingComplete, 
  fullHeaderText 
}) => {
  return (
    <Flex alignItems="center" justifyContent="center" mb={4}>
      <Image src="/favicon.ico" alt="Favicon" boxSize={{ base: "24px", md: "30px" }} mr={{ base: 2, md: 3 }} />
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
          display="flex"
        >
          <Text as="span">{headerText}</Text>
          {isHeaderTypingComplete && (
            <Text as="span" color="blue.400" ml={2} fontWeight="normal">
              : {subheadingText}
            </Text>
          )}
        </Box>
      </Link>
    </Flex>
  );
};

export default ThesisHeader;
