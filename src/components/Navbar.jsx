
import { useState } from "react";
import { Box, IconButton, Flex, Link, HStack, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Don't render navbar on homepage
  if (location.pathname === "/") {
    return null;
  }

  return (
    <Box position="relative" zIndex="10">
      <Flex alignItems="center" justifyContent="space-between" mb={4} width="100%">
        <Flex alignItems="center">
          <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
            <Box as="pre" fontSize="4xl" fontWeight="bold">
              collective.vc
            </Box>
          </Link>
        </Flex>
        
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<FaBars />}
            variant="ghost"
            color="white"
            aria-label="menu"
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
          />
          <MenuList 
            bg="rgba(0, 0, 0, 0.7)" 
            backdropFilter="blur(10px)"
            border="none"
            boxShadow="md"
            mt={2}
            right={0}
          >
            <MenuItem as={RouterLink} to="/" bg="transparent" color="white" _hover={{ bg: "whiteAlpha.200" }}>
              home
            </MenuItem>
            <MenuItem as={RouterLink} to="/portfolio" bg="transparent" color="white" _hover={{ bg: "whiteAlpha.200" }}>
              portfolio
            </MenuItem>
            <MenuItem as={RouterLink} to="/disclaimer" bg="transparent" color="white" _hover={{ bg: "whiteAlpha.200" }}>
              disclaimer
            </MenuItem>
            <MenuItem as={RouterLink} to="/thesis" bg="transparent" color="white" _hover={{ bg: "whiteAlpha.200" }}>
              thesis
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default Navbar;
