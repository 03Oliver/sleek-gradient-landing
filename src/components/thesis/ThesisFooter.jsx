
import { Box, Flex, Text, Link, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const ThesisFooter = () => {
  const linkColor = useColorModeValue("blue.600", "blue.300");
  const hoverLinkColor = useColorModeValue("blue.800", "blue.100");
  const separatorColor = useColorModeValue("gray.400", "whiteAlpha.600");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const footerColor = useColorModeValue("gray.600", "whiteAlpha.600");

  return (
    <>
      <Flex 
        wrap="wrap" 
        justify="center" 
        gap={3} 
        mt={{ base: 8, md: "auto" }}
        borderTop="1px solid"
        borderColor={borderColor}
        pt={4}
        width="100%"
        maxW={{ base: "600px", md: "100%" }}
      >
        <Link as={RouterLink} to="/" color={linkColor} _hover={{ color: hoverLinkColor }}>return home</Link>
        <Text color={separatorColor}>//</Text>
        <Link as={RouterLink} to="/portfolio" color={linkColor} _hover={{ color: hoverLinkColor }}>portfolio</Link>
        <Text color={separatorColor}>//</Text>
        <Link as={RouterLink} to="/disclaimer" color={linkColor} _hover={{ color: hoverLinkColor }}>disclaimer</Link>
      </Flex>

      <Box 
        as="footer" 
        py={4} 
        textAlign="center" 
        fontSize="xs" 
        color={footerColor} 
        width="100%"
        mt={2}
      >
        built lightweight <Link href="https://www.websitecarbon.com/website/collective-vc/" isExternal color={footerColor}>(<b>0.04g CO₂</b>)</Link> with minimalism in mind
      </Box>
    </>
  );
};

export default ThesisFooter;
