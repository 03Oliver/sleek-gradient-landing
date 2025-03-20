
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  SimpleGrid,
  HStack,
  Text,
  Flex,
  Box,
  Heading,
  VStack,
  Divider
} from "@chakra-ui/react";
import { ListPlus, Map, DollarSign } from "lucide-react";

const ThesisModal = ({ isOpen, onClose, getIconForThesisItem }) => {
  const thesisItemsList = "supply chain intelligence & fortification // resilient digital infrastructure // finance <> climate interface // public goods & stewardship incentivisation // inequality tech // distributed & optimised compute // carbon capture // intelligent energy distribution // human dialogue & political voice // accessible legaltech // nature protection // carbon analytics // anti-consumer // agritech // transport // electric vehicles // industrial decarbonisation // biodiversity & earth synergy // refi & web3 // conservation reward & monitoring // water provision & purity // pollution solutions // renewables at scale // renewables (domestic & modular) // desalination // intelligent solar // macrologistics // infrastructure // longevity // silver economy // health & human function // agetech & assistive tech // biotech // healthtech // data visualisation & connections // optimising human capital // neurodiversity tech // personalised education // waste management // intuitive reducing, reusing, recycling // rehabilitation // packaging & microplastic reduction // energy transition // sustainable development & financing // proptech, management // insulation // wind & hydro // intelligent land use // harnessing creativity // mobility solutions // habitation resilience // futurism & adaptability tech // biomimetics, robotics & automation // freshwater protection // human connection // soil health, regeneration, nutrition & food security // new fertilizers // biopesticides // sustainable refrigerants // plant-based sustenance // petrochemical reduction // green & circular consumer // localised vertical farming // ocean cleanup // green architecture // energy storage & sharing // mycelium usage // clean & cultivated meat // green hydrogen infrastructure & fuel // smart grid // algae // green data centers // carbon capture technologies // indoor air quality technologies // equality // empowerment & opportunity // alternative therapies // mental health // humanising digital experiences // data protection & privacy // optimising key services // circular economy";
  const items = thesisItemsList.split(" // ");

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
      <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(8px)" />
      <ModalContent 
        bg="gray.900" 
        color="white" 
        borderColor="blue.400" 
        borderWidth="1px"
        sx={{
          "&::-webkit-scrollbar": {
            width: "6px",
            borderRadius: "8px",
            backgroundColor: "rgba(0, 0, 0, 0.05)"
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "8px",
            backgroundColor: "rgba(255, 255, 255, 0.5)"
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.7)"
          }
        }}
      >
        <ModalHeader fontSize="xl" fontWeight="bold" pb={2}>
          <Flex align="center" justify="space-between">
            <Text>Investment Criteria</Text>
            <ModalCloseButton position="static" />
          </Flex>
        </ModalHeader>
        <ModalBody 
          pb={6}
          sx={{
            "&::-webkit-scrollbar": {
              width: "6px",
              borderRadius: "8px",
              backgroundColor: "rgba(0, 0, 0, 0.05)"
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.5)"
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.7)"
            }
          }}
        >
          {/* Climate Focus Areas Section */}
          <VStack align="flex-start" spacing={4} mb={6}>
            <Flex align="center" mb={1}>
              <ListPlus size={18} style={{ marginRight: "10px" }} />
              <Heading as="h3" size="sm">Climate Focus Areas</Heading>
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3} width="100%">
              {items.map((item, index) => (
                <HStack 
                  key={index} 
                  p={2}
                  bg="rgba(0,0,0,0.3)"
                  borderRadius="md"
                  borderLeft="3px solid"
                  borderColor="blue.400"
                >
                  {getIconForThesisItem(item)}
                  <Text fontSize="sm" fontWeight="medium">
                    {item}
                  </Text>
                </HStack>
              ))}
            </SimpleGrid>
          </VStack>
          
          <Divider my={4} borderColor="gray.700" />
          
          {/* Geographies Section */}
          <VStack align="flex-start" spacing={4} mb={6}>
            <Flex align="center" mb={1}>
              <Map size={18} style={{ marginRight: "10px" }} />
              <Heading as="h3" size="sm">Geographies</Heading>
            </Flex>
            <VStack align="flex-start" pl={2} spacing={2} width="100%">
              <HStack 
                p={2}
                bg="rgba(0,0,0,0.3)"
                borderRadius="md"
                borderLeft="3px solid"
                borderColor="blue.400"
                width="100%"
              >
                <Text fontSize="sm" fontWeight="medium">
                  no purely geographical criteria
                </Text>
              </HStack>
              <HStack 
                p={2}
                bg="rgba(0,0,0,0.3)"
                borderRadius="md"
                borderLeft="3px solid"
                borderColor="blue.400"
                width="100%"
              >
                <Text fontSize="sm" fontWeight="medium">
                  no sanctioned or politically unstable locations
                </Text>
              </HStack>
              <HStack 
                p={2}
                bg="rgba(0,0,0,0.3)"
                borderRadius="md"
                borderLeft="3px solid"
                borderColor="blue.400"
                width="100%"
              >
                <Text fontSize="sm" fontWeight="medium">
                  we travel to meet founders in person
                </Text>
              </HStack>
            </VStack>
          </VStack>
          
          <Divider my={4} borderColor="gray.700" />
          
          {/* Stage Section */}
          <VStack align="flex-start" spacing={4} mb={2}>
            <Flex align="center" mb={1}>
              <DollarSign size={18} style={{ marginRight: "10px" }} />
              <Heading as="h3" size="sm">Stage</Heading>
            </Flex>
            <VStack align="flex-start" pl={2} spacing={2} width="100%">
              <HStack 
                p={2}
                bg="rgba(0,0,0,0.3)"
                borderRadius="md"
                borderLeft="3px solid"
                borderColor="blue.400"
                width="100%"
              >
                <Text fontSize="sm" fontWeight="medium">
                  early stage: f&f, pre-seed, seed
                </Text>
              </HStack>
              <HStack 
                p={2}
                bg="rgba(0,0,0,0.3)"
                borderRadius="md"
                borderLeft="3px solid"
                borderColor="blue.400"
                width="100%"
              >
                <Text fontSize="sm" fontWeight="medium">
                  tickets between 0-$25,000
                </Text>
              </HStack>
              <HStack 
                p={2}
                bg="rgba(0,0,0,0.3)"
                borderRadius="md"
                borderLeft="3px solid"
                borderColor="blue.400"
                width="100%"
              >
                <Text fontSize="sm" fontWeight="medium">
                  engaged and enthusiastic investors
                </Text>
              </HStack>
            </VStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ThesisModal;
