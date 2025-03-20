
import { useState, useEffect } from "react";
import { 
  SimpleGrid, 
  VStack, 
  Box, 
  Text, 
  HStack, 
  useColorModeValue 
} from "@chakra-ui/react";
import { 
  Zap, Lightbulb, Leaf, Cpu, Atom, Droplet, Wind, BarChart, Database,
  Network, Code, CircuitBoard, Server, HardDrive, TreeDeciduous, Flower,
  Sprout, Battery, Plug, PlugZap, Sun, SunMoon, Waves, Fish, Router,
  Terminal, Microchip, Shrub, Flower2, Clover, TreePalm, TreePine
} from "lucide-react";
import { pulse, scrollDown, scrollUp, unravel } from "./AnimationKeyframes";
import { getIconForThesisItem } from "./IconUtils";

const ThesisItemsList = ({ isMobile, hasAnimated, isPulsingActive }) => {
  const borderColor = useColorModeValue("blue.400", "blue.400");
  const glowColor = useColorModeValue("0 0 20px #0EA5E9", "0 0 20px #0EA5E9");
  const thesisItemsList = "supply chain intelligence & fortification // resilient digital infrastructure // finance <> climate interface // public goods & stewardship incentivisation // inequality tech // distributed & optimised compute // carbon capture // intelligent energy distribution // human dialogue & political voice // accessible legaltech // nature protection // carbon analytics // anti-consumer // agritech // transport // electric vehicles // industrial decarbonisation // biodiversity & earth synergy // refi & web3 // conservation reward & monitoring // water provision & purity // pollution solutions // renewables at scale // renewables (domestic & modular) // desalination // intelligent solar // macrologistics // infrastructure // longevity // silver economy // health & human function // agetech & assistive tech // biotech // healthtech // data visualisation & connections // optimising human capital // neurodiversity tech // personalised education // waste management // intuitive reducing, reusing, recycling // rehabilitation // packaging & microplastic reduction // energy transition // sustainable development & financing // proptech, management // insulation // wind & hydro // intelligent land use // harnessing creativity // mobility solutions // habitation resilience // futurism & adaptability tech // biomimetics, robotics & automation // freshwater protection // human connection // soil health, regeneration, nutrition & food security // new fertilizers // biopesticides // sustainable refrigerants // plant-based sustenance // petrochemical reduction // green & circular consumer // localised vertical farming // ocean cleanup // green architecture // energy storage & sharing // mycelium usage // clean & cultivated meat // green hydrogen infrastructure & fuel // smart grid // algae // green data centers // carbon capture technologies // indoor air quality technologies // equality // empowerment & opportunity // alternative therapies // mental health // humanising digital experiences // data protection & privacy // optimising key services // circular economy";

  const getRandomShade = () => {
    const shades = [
      "rgba(0,0,0,0.25)", 
      "rgba(0,0,0,0.3)", 
      "rgba(0,0,0,0.35)", 
      "rgba(0,0,0,0.4)"
    ];
    return shades[Math.floor(Math.random() * shades.length)];
  };

  const getRandomDuration = () => {
    return (0.4 + Math.random() * 0.6).toFixed(2);
  };

  const getRandomDelay = () => {
    return (0.1 + Math.random() * 1.4).toFixed(2);
  };

  const getRandomPulseDelay = () => {
    return (3 + Math.random() * 9).toFixed(2);
  };

  const getRandomPulseDuration = () => {
    return (1.6 + Math.random() * 2.4).toFixed(2);
  };

  const renderThesisItem = (item, index) => {
    const duration = getRandomDuration();
    const delay = getRandomDelay();
    const pulseDelay = getRandomPulseDelay();
    const pulseDuration = getRandomPulseDuration();
    const thesisIcon = getIconForThesisItem(item);
    
    // Create animation string for React
    const animationStr = hasAnimated 
      ? `${unravel} ${duration}s ease-out forwards${isPulsingActive ? `, ${pulse} ${pulseDuration}s ease-in-out infinite` : ''}`
      : "none";
    
    return (
      <Box 
        key={index} 
        p={2}
        bg={getRandomShade()}
        borderRadius="md"
        borderLeft="3px solid"
        borderColor={borderColor}
        boxShadow="lg"
        transition="all 0.3s"
        _hover={{
          transform: "translateY(-3px) scale(1.05)",
          boxShadow: `xl, ${glowColor}`,
          borderColor: "blue.300",
          zIndex: 1
        }}
        animation={animationStr}
        style={{ animationDelay: `${delay}s` }}
        opacity={hasAnimated ? "0" : "1"}
        transformOrigin="top"
        height="auto"
        fontSize="xs"
        width="100%"
      >
        <HStack align="flex-start" spacing={2}>
          {thesisIcon}
          <Text 
            fontSize="sm" 
            fontWeight="medium"
            letterSpacing="wide"
          >
            {item}
          </Text>
        </HStack>
      </Box>
    );
  };

  const renderThesisItems = (text) => {
    const items = text.split(" // ");
    
    if (isMobile) {
      const itemsPerColumn = Math.ceil(items.length / 3);
      
      const column1 = items.slice(0, itemsPerColumn);
      const column2 = items.slice(itemsPerColumn, itemsPerColumn * 2);
      const column3 = items.slice(itemsPerColumn * 2);
      
      return (
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={3} mt={6} width="100%" px={3}>
          <VStack spacing={3} 
            animation={hasAnimated ? `${scrollDown} 60s linear infinite alternate` : "none"}
            transition="all 0.3s"
            width="100%"
          >
            {column1.map((item, index) => renderThesisItem(item, index))}
          </VStack>
          
          <VStack spacing={3} 
            animation={hasAnimated ? `${scrollUp} 60s linear infinite alternate` : "none"}
            transition="all 0.3s"
            width="100%"
          >
            {column2.map((item, index) => renderThesisItem(item, index))}
          </VStack>
          
          <VStack spacing={3} 
            animation={hasAnimated ? `${scrollDown} 60s linear infinite alternate` : "none"}
            transition="all 0.3s"
            width="100%"
          >
            {column3.map((item, index) => renderThesisItem(item, index))}
          </VStack>
        </SimpleGrid>
      );
    } else {
      return (
        <Box 
          position="absolute" 
          top="0" 
          left="0" 
          right="0" 
          bottom="0" 
          overflow="hidden"
          zIndex="0"
        >
          <SimpleGrid 
            columns={5} 
            spacing={3} 
            width="120%" 
            height="120%"
            position="absolute"
            top="-10%"
            left="-10%"
          >
            {items.map((item, index) => {
              const isEvenColumn = Math.floor(index / Math.ceil(items.length / 5)) % 2 === 0;
              return (
                <Box 
                  key={index}
                  animation={isEvenColumn ? `${scrollDown} 30s linear infinite` : `${scrollUp} 30s linear infinite`}
                  transition="all 0.3s"
                >
                  {renderThesisItem(item, index)}
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>
      );
    }
  };

  return renderThesisItems(thesisItemsList);
};

export default ThesisItemsList;
