import { useEffect, useState, useRef } from "react";
import { Container, SimpleGrid, Link, Box, Text, Flex, Image, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaNewspaper, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);

const Index = () => {
  const [headerText, setHeaderText] = useState("");
  const [bodyText, setBodyText] = useState("");
  const fullHeaderText = "collective.vc";
  const fullBodyText = "an early-stage climate-syndicate & media organisation led by ";
  const oliverText = "Oliver Bonallack";
  const remainingText = ", working towards capital deployment for the benefit of humanity: ";
  const portfolioText = "portfolio";
  const dividerText = " // ";
  const disclaimerText = "disclaimer";
  const thesisText = "thesis";
  const headerIndexRef = useRef(0);
  const bodyIndexRef = useRef(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const bgGradient = "linear(to-r, black, gray.900)";
  const linkHoverColor = "blue.400";

  useEffect(() => {
    const headerInterval = setInterval(() => {
      setHeaderText(fullHeaderText.substring(0, headerIndexRef.current + 1));
      headerIndexRef.current++;
      if (headerIndexRef.current === fullHeaderText.length) {
        clearInterval(headerInterval);
        startBodyTyping();
      }
    }, 50);

    return () => clearInterval(headerInterval);
  }, []);

  const startBodyTyping = () => {
    const bodyInterval = setInterval(() => {
      const currentText = fullBodyText + oliverText + remainingText + portfolioText + dividerText + disclaimerText + dividerText + thesisText;
      setBodyText(currentText.substring(0, bodyIndexRef.current + 1));
      bodyIndexRef.current++;
      if (bodyIndexRef.current === currentText.length) {
        clearInterval(bodyInterval);
        setIsTypingComplete(true);
      }
    }, 40);
  };

  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.6 } }
  };

  const socialIconVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: 1.2 + i * 0.1, duration: 0.3, type: "spring", stiffness: 200 }
    }),
    hover: { scale: 1.1, transition: { duration: 0.2 } }
  };

  return (
    <MotionBox
      initial="initial"
      animate="animate"
      exit="exit"
      variants={containerVariants}
      minH="100vh"
      bgGradient={bgGradient}
      color="white"
      overflow="hidden"
      position="relative"
    >
      <Container maxW="container.lg" centerContent py={16}>
        <VStack spacing={8} w="full" position="relative">
          <MotionFlex
            alignItems="center"
            justifyContent="center"
            mb={8}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Image src="/favicon.ico" alt="Favicon" boxSize="32px" mr={3} />
            <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
              <MotionText
                fontSize={{ base: "4xl", md: "5xl" }}
                fontWeight="bold"
                fontFamily="mono"
                bgGradient="linear(to-r, white, gray.300)"
                bgClip="text"
                letterSpacing="tight"
              >
                {headerText}
              </MotionText>
            </Link>
          </MotionFlex>

          <MotionBox
            textAlign="center"
            maxW="800px"
            px={4}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              lineHeight="tall"
              fontFamily="body"
              color="gray.100"
            >
              {bodyText.substring(0, fullBodyText.length)}
              <Link 
                href="https://www.linkedin.com/in/bonallack" 
                isExternal 
                color={linkHoverColor}
                _hover={{ textDecoration: "underline", textUnderlineOffset: "4px" }}
              >
                {bodyText.substring(fullBodyText.length, fullBodyText.length + oliverText.length)}
              </Link>
              {bodyText.substring(fullBodyText.length + oliverText.length, fullBodyText.length + oliverText.length + remainingText.length)}
              <RouterLink to="/portfolio" style={{ color: '#63B3ED', textDecoration: 'none' }}>
                {bodyText.substring(fullBodyText.length + oliverText.length + remainingText.length, fullBodyText.length + oliverText.length + remainingText.length + portfolioText.length)}
              </RouterLink>
              {bodyText.substring(fullBodyText.length + oliverText.length + remainingText.length + portfolioText.length, fullBodyText.length + oliverText.length + remainingText.length + portfolioText.length + dividerText.length)}
              <RouterLink to="/disclaimer" style={{ color: '#63B3ED', textDecoration: 'none' }}>
                {bodyText.substring(fullBodyText.length + oliverText.length + remainingText.length + portfolioText.length + dividerText.length, fullBodyText.length + oliverText.length + remainingText.length + portfolioText.length + dividerText.length + disclaimerText.length)}
              </RouterLink>
              {bodyText.substring(fullBodyText.length + oliverText.length + remainingText.length + portfolioText.length + dividerText.length + disclaimerText.length, fullBodyText.length + oliverText.length + remainingText.length + portfolioText.length + dividerText.length + disclaimerText.length + dividerText.length)}
              <RouterLink to="/thesis" style={{ color: '#63B3ED', textDecoration: 'none' }}>
                {bodyText.substring(fullBodyText.length + oliverText.length + remainingText.length + portfolioText.length + dividerText.length + disclaimerText.length + dividerText.length)}
              </RouterLink>
            </Text>
          </MotionBox>

          <SimpleGrid 
            columns={{ base: 2, md: 4 }} 
            spacing={8} 
            pt={12}
            w="full"
            maxW="400px"
            justifyItems="center"
          >
            {[
              { icon: FaLinkedin, href: "https://www.linkedin.com/company/collectivevc" },
              { icon: FaYoutube, href: "https://www.youtube.com/@collectivevc" },
              { icon: FaEnvelope, href: "https://collectivevc.substack.com" },
              { icon: FaWhatsapp, href: "https://chat.whatsapp.com/CcIGrlvEwuG9pnvl7COITj" }
            ].map((item, i) => (
              <MotionBox
                key={i}
                custom={i}
                variants={socialIconVariants}
                whileHover="hover"
              >
                <Link 
                  href={item.href} 
                  isExternal
                  _hover={{ color: linkHoverColor }}
                  transition="color 0.2s"
                >
                  <Box as={item.icon} size="36px" />
                </Link>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      <Box 
        as="footer" 
        position="absolute" 
        bottom={4} 
        left={0} 
        right={0} 
        textAlign="center" 
        fontSize="xs" 
        color="whiteAlpha.600"
      >
        built lightweight{" "}
        <Link 
          href="https://www.websitecarbon.com/website/collective-vc/" 
          isExternal 
          color="whiteAlpha.600"
          _hover={{ color: "whiteAlpha.800", textDecoration: "underline" }}
        >
          (<b>0.04g CO₂</b>)
        </Link>{" "}
        with minimalism in mind
      </Box>
    </MotionBox>
  );
};

export default Index;