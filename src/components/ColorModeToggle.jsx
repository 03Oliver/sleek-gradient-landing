
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Moon, Sun } from "lucide-react";

const ColorModeToggle = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(Moon, Sun);
  const bgColor = useColorModeValue("whiteAlpha.200", "blackAlpha.200");
  const hoverBgColor = useColorModeValue("whiteAlpha.300", "blackAlpha.300");

  return (
    <IconButton
      aria-label="Toggle color mode"
      icon={<SwitchIcon size={16} />}
      onClick={toggleColorMode}
      size="sm"
      borderRadius="full"
      variant="ghost"
      position="fixed"
      top={4}
      right={4}
      zIndex={100}
      bg={bgColor}
      _hover={{ bg: hoverBgColor }}
      backdropFilter="blur(8px)"
      border="1px solid"
      borderColor={useColorModeValue("whiteAlpha.300", "blackAlpha.300")}
      color={useColorModeValue("white", "gray.200")}
    />
  );
};

export default ColorModeToggle;
