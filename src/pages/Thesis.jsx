
import { useEffect, useState, useRef } from "react";
import { Container, Link, Box, Text, keyframes, Flex, Image, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  50% { border-color: transparent }
`;

const Thesis = () => {
  const [headerText, setHeaderText] = useState("");
  const [bodyText, setBodyText] = useState("");
  const fullHeaderText = "collective.vc";
  const fullBodyText = "humans are market animals. within a prediction-prevention-disruption framework of mitigation and adaptation, we seek out imaginative, compelling and scalable opportunities with a climate angle in:";
  const headerIndexRef = useRef(0);
  const bodyIndexRef = useRef(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

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
      setBodyText(fullBodyText.substring(0, bodyIndexRef.current + 1));
      bodyIndexRef.current++;
      if (bodyIndexRef.current === fullBodyText.length) {
        clearInterval(bodyInterval);
        setIsTypingComplete(true);
      }
    }, 40);
  };

  const renderThesisItems = (text) => {
    return text.split(" // ").map((item, index) => (
      <Text
        as="span"
        key={index}
        display="inline-block"
        transition="transform 0.2s, font-size 0.2s"
        position="relative"
        zIndex="1"
        _hover={{
          transform: "scale(3)",
          color: "blue.300",
          zIndex: "10",
          "& > .hover-bg": {
            opacity: 1,
          }
        }}
      >
        {item}
        <Box 
          className="hover-bg"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width="105%"
          height="105%"
          borderRadius="md"
          bg="gray.800"
          opacity="0"
          transition="opacity 0.2s"
          zIndex="-1"
        />
        {index < text.split(" // ").length - 1 && (
          <Text as="span" color="white" _hover={{ transform: "none" }}>
            {" // "}
          </Text>
        )}
      </Text>
    ));
  };

  return (
    <Container centerContent maxW="100vw" minH="100vh" display="flex" flexDirection="column" alignItems="center" bgGradient="linear(to-r, black, gray.800)" color="white" fontFamily="Roboto, sans-serif" pt={8}>
      <VStack spacing={4} width="100%" flex="1">
        <Box textAlign="center" mb={4}>
          <Flex alignItems="center" justifyContent="center">
            <Image src="/favicon.ico" alt="Favicon" boxSize="24px" mr={2} />
            <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
              <Box 
                as="pre" 
                fontSize="4xl" 
                fontWeight="bold" 
                whiteSpace="nowrap" 
                overflow="hidden" 
                borderRight={isTypingComplete ? "none" : "2px solid"}
                animation={isTypingComplete ? `${typing} 2s steps(${fullHeaderText.length})` : `${typing} 2s steps(${fullHeaderText.length}), ${blink} 0.75s step-end infinite`}
              >
                {headerText}
              </Box>
            </Link>
          </Flex>
        </Box>

        <VStack spacing={4} width="100%" maxW="800px" px={4} textAlign="center">
          <Text fontSize="sm" mb={4} whiteSpace="pre-wrap" lineHeight="1.2">
            {bodyText}
          </Text>

          <Text fontSize="xs" lineHeight="1.2" whiteSpace="pre-wrap">
            {renderThesisItems("supply chain intelligence & fortification // resilient digital infrastructure // finance <> climate interface // public goods & stewardship incentivisation // inequality tech // distributed & optimised compute // carbon capture // intelligent energy distribution // human dialogue & political voice // accessible legaltech // nature protection // carbon analytics // anti-consumer // agritech // transport // electric vehicles // industrial decarbonisation // biodiversity & earth synergy // refi & web3 // conservation reward & monitoring // water provision & purity // pollution solutions // renewables at scale // renewables (domestic & modular) // desalination // intelligent solar // macrologistics // infrastructure // longevity // silver economy // health & human function // agetech & assistive tech // biotech // healthtech // data visualisation & connections // optimising human capital // neurodiversity tech // personalised education // waste management // intuitive reducing, reusing, recycling // rehabilitation // packaging & microplastic reduction // energy transition // sustainable development & financing // proptech, management // insulation // wind & hydro // intelligent land use // harnessing creativity // mobility solutions // habitation resilience // futurism & adaptability tech // biomimetics, robotics & automation // freshwater protection // human connection // soil health, regeneration, nutrition & food security // new fertilizers // biopesticides // sustainable refrigerants // plant-based sustenance // petrochemical reduction // green & circular consumer // localised vertical farming // ocean cleanup // green architecture // energy storage & sharing // mycelium usage // clean & cultivated meat // green hydrogen infrastructure & fuel // smart grid // algae // green data centers // carbon capture technologies // indoor air quality technologies // equality // empowerment & opportunity // alternative therapies // mental health // pro-humanising digital experiences & environments (notifications, assistants) // data protection & privacy // optimising key services // circular economy")}
          </Text>

          <Text color="white">
            <Link as={RouterLink} to="/" color="blue.300">return home</Link>
            {" // "}
            <Link as={RouterLink} to="/portfolio" color="blue.300">portfolio</Link>
            {" // "}
            <Link as={RouterLink} to="/disclaimer" color="blue.300">disclaimer</Link>
          </Text>
        </VStack>
      </VStack>

      <Box as="footer" py={4} textAlign="center" fontSize="xs" color="whiteAlpha.600" width="100%">
        built lightweight <Link href="https://www.websitecarbon.com/website/collective-vc/" isExternal color="whiteAlpha.600">(<b>0.04g CO₂</b>)</Link> with minimalism in mind
      </Box>
    </Container>
  );
};

export default Thesis;
