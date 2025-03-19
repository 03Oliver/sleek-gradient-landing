
import { useState, useEffect } from "react";
import { Box, IconButton, useColorMode, Tooltip } from "@chakra-ui/react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Tooltip label={colorMode === "dark" ? "Light mode" : "Dark mode"} placement="left">
      <IconButton
        aria-label="Toggle theme"
        variant="ghost"
        size="md"
        icon={
          colorMode === "dark" ? (
            <Sun size={18} />
          ) : (
            <Moon size={18} />
          )
        }
        onClick={toggleColorMode}
        borderRadius="full"
        _hover={{ 
          bg: colorMode === "dark" ? "whiteAlpha.200" : "blackAlpha.200" 
        }}
        _active={{ 
          bg: colorMode === "dark" ? "whiteAlpha.300" : "blackAlpha.300" 
        }}
        color={colorMode === "dark" ? "yellow.200" : "blue.700"}
        position="fixed"
        top="4"
        right="4"
        zIndex="100"
      />
    </Tooltip>
  );
};

export default ThemeToggle;
