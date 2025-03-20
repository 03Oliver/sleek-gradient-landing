
import { SimpleGrid, Link, Box } from "@chakra-ui/react";
import { FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { Bookmark, Mail, Calendar } from "lucide-react";

const HomeSocialLinks = ({ openCalendly }) => {
  return (
    <SimpleGrid columns={{ base: 3, md: 6 }} spacing={{ base: 2, md: 3 }} textAlign="center" mt={4}>
      <Link href="https://www.linkedin.com/company/collectivevc" isExternal>
        <Box 
          as={FaLinkedin} 
          size="36px" 
          _hover={{ transform: "scale(1.1)" }} 
          transition="transform 0.2s"
          margin="0 auto"
          display="block"
          width="36px"
          height="36px"
          flexShrink={0}
          flexGrow={0}
        />
      </Link>

      <Link href="https://www.youtube.com/@collectivevc" isExternal>
        <Box 
          as={FaYoutube} 
          size="36px" 
          _hover={{ transform: "scale(1.1)" }} 
          transition="transform 0.2s"
          margin="0 auto"
          display="block"
          width="36px"
          height="36px"
          flexShrink={0}
          flexGrow={0}
        />
      </Link>

      <Link href="https://collectivevc.substack.com" isExternal>
        <Box 
          as={Bookmark} 
          size={36} 
          _hover={{ transform: "scale(1.1)" }} 
          transition="transform 0.2s"
          margin="0 auto"
          display="block"
          width="36px"
          height="36px"
          flexShrink={0}
          flexGrow={0}
        />
      </Link>

      <Link href="mailto:oliver@collective.vc" isExternal>
        <Box 
          as={Mail} 
          size={36} 
          _hover={{ transform: "scale(1.1)" }} 
          transition="transform 0.2s"
          margin="0 auto"
          display="block" 
          width="36px"
          height="36px"
          flexShrink={0}
          flexGrow={0}
        />
      </Link>

      <Link href="https://chat.whatsapp.com/CcIGrlvEwuG9pnvl7COITj" isExternal>
        <Box 
          as={FaWhatsapp} 
          size="36px" 
          _hover={{ transform: "scale(1.1)" }} 
          transition="transform 0.2s"
          margin="0 auto"
          display="block"
          width="36px"
          height="36px"
          flexShrink={0}
          flexGrow={0}
        />
      </Link>
      
      <Box 
        as={Link} 
        href="#" 
        onClick={openCalendly} 
        _hover={{ transform: "scale(1.1)" }} 
        transition="transform 0.2s"
        cursor="pointer"
        margin="0 auto"
        display="block"
      >
        <Box 
          as={Calendar} 
          size={36} 
          margin="0 auto" 
          display="block"
          width="36px"
          height="36px"
          flexShrink={0}
          flexGrow={0}
        />
      </Box>
    </SimpleGrid>
  );
};

export default HomeSocialLinks;
