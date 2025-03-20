
import React from "react";
import { 
  Box, 
  VStack,
  Button
} from "@chakra-ui/react";
import { ListPlus } from "lucide-react";
import ThesisHeader from "./ThesisHeader";
import ThesisSubheading from "./ThesisSubheading";
import ThesisBody from "./ThesisBody";
import ThesisFooter from "./ThesisFooter";
import ThesisItemsList from "./ThesisItemsList";

const ThesisMobileView = ({
  headerText,
  subheadingText,
  bodyText,
  isHeaderTypingComplete,
  isBodyTypingComplete,
  fullHeaderText,
  hasAnimated,
  isPulsingActive,
  onOpen
}) => {
  return (
    <>
      <Box textAlign="center" mb={2}>
        <ThesisHeader 
          headerText={headerText} 
          subheadingText={subheadingText} 
          isHeaderTypingComplete={isHeaderTypingComplete} 
          isBodyTypingComplete={isBodyTypingComplete}
          fullHeaderText={fullHeaderText} 
        />
      </Box>

      <VStack spacing={6} width="100%" maxW="1200px" px={{ base: 4, md: 6 }} textAlign="center">
        <Box>
          <ThesisSubheading 
            subheadingText={subheadingText} 
            isBodyTypingComplete={isBodyTypingComplete} 
          />
        </Box>

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

        <Box width="100%" overflow="hidden">
          <ThesisItemsList isMobile={true} hasAnimated={hasAnimated} isPulsingActive={isPulsingActive} />
        </Box>
      </VStack>
      
      <ThesisFooter />
    </>
  );
};

export default ThesisMobileView;
