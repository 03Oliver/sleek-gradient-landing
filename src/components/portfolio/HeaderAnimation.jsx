
import { useEffect, useState, useRef } from "react";
import { 
  Box, 
  Flex,
  Image,
  Link,
  keyframes
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  50% { border-color: transparent }
`;

const HeaderAnimation = () => {
  const [headerText, setHeaderText] = useState("");
  const fullHeaderText = "collective.vc";
  const headerIndexRef = useRef(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    // Check if animation has already played this session
    const hasAnimationPlayed = sessionStorage.getItem('animationPlayedPortfolio');

    if (hasAnimationPlayed) {
      // If animation has played, set the complete text immediately
      setHeaderText(fullHeaderText);
      setIsTypingComplete(true);
      return;
    }

    const headerInterval = setInterval(() => {
      setHeaderText(fullHeaderText.substring(0, headerIndexRef.current + 1));
      headerIndexRef.current++;
      if (headerIndexRef.current === fullHeaderText.length) {
        clearInterval(headerInterval);
        setIsTypingComplete(true);
        
        // Mark animation as played
        sessionStorage.setItem('animationPlayedPortfolio', 'true');
      }
    }, 50);

    return () => clearInterval(headerInterval);
  }, []);

  return (
    <Flex alignItems="center" justifyContent="center">
      <Image src="/favicon.ico" alt="Favicon" boxSize="24px" mr={2} />
      <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
        <Box 
          as="pre" 
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="bold" 
          whiteSpace="nowrap" 
          overflow="hidden" 
          borderRight={isTypingComplete ? "none" : "2px solid"}
          animation={isTypingComplete ? `${typing} 2s steps(${fullHeaderText.length})` : `${typing} 2s steps(${fullHeaderText.length}), ${blink} 0.75s step-end infinite`}
          color="white"
          letterSpacing="tight"
        >
          {headerText}
        </Box>
      </Link>
    </Flex>
  );
};

export default HeaderAnimation;
