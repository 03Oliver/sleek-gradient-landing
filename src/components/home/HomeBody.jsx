
import { Box, Text, Link } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import { blink } from "../thesis/AnimationKeyframes";

const HomeBody = ({ 
  bodyText, 
  isTypingComplete, 
  fullBodyText,
  oliverText, 
  isMobile 
}) => {
  return (
    <Box 
      mb={4} 
      textAlign="center" 
      maxW="600px" 
      minH="60px" 
      display="flex" 
      alignItems="center" 
      justifyContent="center" 
      fontFamily="Roboto, sans-serif"
    >
      <Text 
        fontSize={isMobile ? "sm" : "lg"}
        fontFamily="Roboto, sans-serif"
        whiteSpace="normal"
        overflow="hidden"
        position="relative"
        letterSpacing="wide"
        lineHeight="1.6"
        _after={{
          content: '""',
          position: "absolute",
          right: 0,
          top: 0,
          height: "100%",
          width: isTypingComplete ? "0" : "2px",
          backgroundColor: "white",
          animation: isTypingComplete ? "none" : `${blink} 0.75s step-end infinite`
        }}
      >
        {bodyText.substring(0, fullBodyText.length)}
        <Link href="https://www.linkedin.com/in/bonallack" isExternal color="blue.300">
          {bodyText.substring(fullBodyText.length, fullBodyText.length + oliverText.length)}
        </Link>
        {bodyText.substring(fullBodyText.length + oliverText.length)}
      </Text>
    </Box>
  );
};

export default HomeBody;
