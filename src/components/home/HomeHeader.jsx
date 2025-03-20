
import { useRef, useState } from "react";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { typing, blink } from "../thesis/AnimationKeyframes";

const HomeHeader = ({ 
  headerText, 
  isHeaderTypingComplete, 
  isMobile, 
  fullHeaderText 
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
            borderRight={isHeaderTypingComplete ? "none" : "2px solid"}
            animation={isHeaderTypingComplete ? `${typing} 2s steps(${fullHeaderText.length})` : `${typing} 2s steps(${fullHeaderText.length}), ${blink} 0.75s step-end infinite`}
          >
            {headerText}
          </Box>
        </Link>
      </Flex>
    </Box>
  );
};

export default HomeHeader;
