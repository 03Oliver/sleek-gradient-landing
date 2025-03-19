
import { useState } from "react";
import { Box, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack, Link, Flex, Image } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box position="relative" zIndex="10">
      <Flex alignItems="center" justifyContent="center" mb={4}>
        <Image src="/favicon.ico" alt="Favicon" boxSize="24px" mr={2} />
        <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
          <Box as="pre" fontSize="4xl" fontWeight="bold">
            collective.vc
          </Box>
        </Link>
        <IconButton
          icon={<FaBars />}
          variant="ghost"
          color="white"
          position="absolute"
          right="10px"
          top="10px"
          onClick={handleToggle}
          aria-label="Open menu"
          _hover={{ bg: "whiteAlpha.200" }}
        />
      </Flex>

      <Drawer placement="right" onClose={handleToggle} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="gray.900" color="white">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Navigation</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} mt={4} align="stretch">
              <Link as={RouterLink} to="/" color="blue.300" onClick={handleToggle}>
                Home
              </Link>
              <Link as={RouterLink} to="/portfolio" color="blue.300" onClick={handleToggle}>
                Portfolio
              </Link>
              <Link as={RouterLink} to="/disclaimer" color="blue.300" onClick={handleToggle}>
                Disclaimer
              </Link>
              <Link as={RouterLink} to="/thesis" color="blue.300" onClick={handleToggle}>
                Thesis
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
