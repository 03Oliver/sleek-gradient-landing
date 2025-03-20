
import { Box, Link } from "@chakra-ui/react";

const HomeFooter = () => {
  return (
    <Box as="footer" py={4} textAlign="center" fontSize="xs" color="whiteAlpha.600" width="100%" mt={8}>
      built lightweight <Link href="https://www.websitecarbon.com/website/collective-vc/" isExternal color="whiteAlpha.600">(<b>0.04g CO₂</b>)</Link> with minimalism in mind
    </Box>
  );
};

export default HomeFooter;
