
import React from "react";
import {
  Center,
  Box,
  Button
} from "@chakra-ui/react";
import { ListPlus } from "lucide-react";
import ThesisHeader from "./ThesisHeader";
import ThesisSubheading from "./ThesisSubheading";
import ThesisBody from "./ThesisBody";
import ThesisFooter from "./ThesisFooter";

const ThesisDesktopView = ({
  headerText,
  subheadingText,
  bodyText,
  isHeaderTypingComplete,
  isBodyTypingComplete,
  fullHeaderText,
  onOpen
}) => {
  return (
    <Center 
      height="100vh" 
      width="100%" 
      position="relative" 
      zIndex="10"
      pointerEvents="none"
    >
      <Box 
        p={8} 
        borderRadius="lg" 
        bg="rgba(0,0,0,0.7)" 
        backdropFilter="blur(8px)" 
        maxW="600px" 
        textAlign="center"
        boxShadow="dark-lg"
        display="flex"
        flexDirection="column"
        pointerEvents="auto"
        marginY="auto"
      >
        <ThesisHeader 
          headerText={headerText} 
          subheadingText={subheadingText} 
          isHeaderTypingComplete={isHeaderTypingComplete} 
          isBodyTypingComplete={isBodyTypingComplete}
          fullHeaderText={fullHeaderText} 
        />

        <ThesisSubheading 
          subheadingText={subheadingText} 
          isBodyTypingComplete={isBodyTypingComplete} 
        />

        <ThesisBody bodyText={bodyText} />
        
        <Button 
          variant="outline" 
          colorScheme="blue" 
          size="sm" 
          rightIcon={<ListPlus size={16} />}
          mb={6}
          onClick={onOpen}
          alignSelf="center"
        >
          see criteria
        </Button>
        
        <Box mt="auto">
          <ThesisFooter />
        </Box>
      </Box>
    </Center>
  );
};

export default ThesisDesktopView;
