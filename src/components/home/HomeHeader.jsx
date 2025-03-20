
import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { typing, blink } from "../thesis/AnimationKeyframes";

const HomeHeader = ({ 
  headerText, 
  isTypingComplete, 
  fullHeaderText, 
  isMobile 
}) => {
  return (
    <Box textAlign="center" mb={4}>
      <Flex alignItems="center" justifyContent="center">
        <Image src="/favicon.ico" alt="Favicon" boxSize="24px" mr={2} />
        <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
          <Box 
            as="pre" 
            fontSize={isMobile ? "2xl" : "4xl"}
            fontWeight="bold" 
            whiteSpace="nowrap" 
            overflow="hidden" 
            borderRight={isTypingComplete ? "none" : "2px solid"}
            animation={isTypingComplete ? `${typing} 2s steps(${fullHeaderText.length})` : `${typing} 2s steps(${fullHeaderText.length}), ${blink} 0.75s step-end infinite`}
          >
            {headerText}
          </Box>
        </Link>
      </Flex>
    </Box>
  );
};

export default HomeHeader;
