
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
  Box
} from "@chakra-ui/react";
import { ListPlus } from "lucide-react";

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
        <ModalHeader fontSize="xl" fontWeight="bold">
          <Flex align="center">
            <ListPlus size={20} style={{ marginRight: "10px" }} />
            full list of climate focus areas
          </Flex>
        </ModalHeader>
        <ModalCloseButton />
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
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3} mb={4}>
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
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ThesisModal;
