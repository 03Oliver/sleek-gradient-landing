import { useState, useEffect } from "react";
import { 
  SimpleGrid, 
  VStack, 
  Box, 
  Text, 
  HStack, 
  keyframes, 
  useColorModeValue 
} from "@chakra-ui/react";
import { 
  Zap, Lightbulb, Leaf, Cpu, Atom, Droplet, Wind, BarChart, Database,
  Network, Code, CircuitBoard, Server, HardDrive, TreeDeciduous, Flower,
  Sprout, Battery, Plug, PlugZap, Sun, SunMoon, Waves, Fish, Router,
  Terminal, Microchip, Shrub, Flower2, Clover, TreePalm, TreePine
} from "lucide-react";

const unravel = keyframes`
  0% { transform: scaleY(0); opacity: 0; }
  100% { transform: scaleY(1); opacity: 1; }
`;

const pulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 rgba(14, 165, 233, 0); }
  50% { transform: scale(1.02); box-shadow: 0 0 10px rgba(14, 165, 233, 0.4); }
  100% { transform: scale(1); box-shadow: 0 0 0 rgba(14, 165, 233, 0); }
`;

const scrollDown = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(40px); }
`;

const scrollUp = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-40px); }
`;

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

  const getIconForThesisItem = (text) => {
    if (/nature|biodiversity|earth|soil|plant|regeneration|mycelium|algae/.test(text)) {
      if (/soil|regeneration|nutrition/.test(text)) return <Leaf size={18} color="#4ade80" style={{ flexShrink: 0 }} />;
      if (/mycelium/.test(text)) return <Sprout size={18} color="#84cc16" style={{ flexShrink: 0 }} />;
      if (/algae/.test(text)) return <Flower size={18} color="#10b981" style={{ flexShrink: 0 }} />;
      if (/biodiversity/.test(text)) return <TreeDeciduous size={18} color="#22c55e" style={{ flexShrink: 0 }} />;
      if (/nature protection/.test(text)) return <TreePalm size={18} color="#22d3ee" style={{ flexShrink: 0 }} />;
      return <Shrub size={18} color="#4ade80" style={{ flexShrink: 0 }} />;
    }
    
    if (/water|ocean|desalination|hydro|freshwater/.test(text)) {
      if (/ocean/.test(text)) return <Waves size={18} color="#38bdf8" style={{ flexShrink: 0 }} />;
      if (/freshwater/.test(text)) return <Fish size={18} color="#0ea5e9" style={{ flexShrink: 0 }} />;
      return <Droplet size={18} color="#38bdf8" style={{ flexShrink: 0 }} />;
    }
    
    if (/energy|electric|renewables|solar|wind|power|green hydrogen|smart grid/.test(text)) {
      if (/solar/.test(text)) return <Sun size={18} color="#fbbf24" style={{ flexShrink: 0 }} />;
      if (/wind/.test(text)) return <Wind size={18} color="#94a3b8" style={{ flexShrink: 0 }} />;
      if (/grid/.test(text)) return <PlugZap size={18} color="#fb923c" style={{ flexShrink: 0 }} />;
      if (/green hydrogen/.test(text)) return <Atom size={18} color="#a78bfa" style={{ flexShrink: 0 }} />;
      if (/storage/.test(text)) return <Battery size={18} color="#f59e0b" style={{ flexShrink: 0 }} />;
      if (/distribution/.test(text)) return <Plug size={18} color="#f97316" style={{ flexShrink: 0 }} />;
      return <Zap size={18} color="#fbbf24" style={{ flexShrink: 0 }} />;
    }
    
    if (/digital|compute|analytics|tech|data|optimis|infrastructure|network|ai|intelligence/.test(text)) {
      if (/data/.test(text)) return <Database size={18} color="#c084fc" style={{ flexShrink: 0 }} />;
      if (/carbon analytics/.test(text)) return <BarChart size={18} color="#f87171" style={{ flexShrink: 0 }} />;
      if (/network|infrastructure/.test(text)) return <Network size={18} color="#60a5fa" style={{ flexShrink: 0 }} />;
      if (/compute|distributed/.test(text)) return <Cpu size={18} color="#60a5fa" style={{ flexShrink: 0 }} />;
      if (/digital infrastructure/.test(text)) return <Server size={18} color="#818cf8" style={{ flexShrink: 0 }} />;
      if (/legaltech/.test(text)) return <Terminal size={18} color="#a855f7" style={{ flexShrink: 0 }} />;
      if (/web3|refi/.test(text)) return <CircuitBoard size={18} color="#d946ef" style={{ flexShrink: 0 }} />;
      if (/intelligence|supply chain/.test(text)) return <Microchip size={18} color="#8b5cf6" style={{ flexShrink: 0 }} />;
      if (/green data center/.test(text)) return <HardDrive size={18} color="#6366f1" style={{ flexShrink: 0 }} />;
      return <Router size={18} color="#818cf8" style={{ flexShrink: 0 }} />;
    }
    
    if (/creativity|human|health|neurodiversity|education|mental|therapy/.test(text)) {
      if (/creativity|futurism/.test(text)) return <Lightbulb size={18} color="#fcd34d" style={{ flexShrink: 0 }} />;
      if (/health|therapy|mental/.test(text)) return <Flower2 size={18} color="#f472b6" style={{ flexShrink: 0 }} />;
      if (/connection|dialogue/.test(text)) return <Clover size={18} color="#a3e635" style={{ flexShrink: 0 }} />;
      if (/education/.test(text)) return <SunMoon size={18} color="#fde047" style={{ flexShrink: 0 }} />;
      return <Code size={18} color="#a3e635" style={{ flexShrink: 0 }} />;
    }
    
    return <Cpu size={18} color="#60a5fa" style={{ flexShrink: 0 }} />;
  };

  const renderThesisItem = (item, index) => {
    const duration = getRandomDuration();
    const delay = getRandomDelay();
    const pulseDelay = getRandomPulseDelay();
    const pulseDuration = getRandomPulseDuration();
    const thesisIcon = getIconForThesisItem(item);
    
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
        animation={
          hasAnimated 
            ? `${unravel} ${duration}s ease-out forwards${isPulsingActive ? `, ${pulse} ${pulseDuration}s ease-in-out ${pulseDelay}s infinite` : ''}`
            : "none"
        }
        animationDelay={`${delay}s`}
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
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={3} mt={6} width="100%">
          <VStack spacing={3} 
            animation={hasAnimated ? `${scrollDown} 60s linear infinite` : "none"}
            transition="all 0.3s"
          >
            {column1.map((item, index) => renderThesisItem(item, index))}
            {hasAnimated && column1.slice(0, 3).map((item, index) => 
              renderThesisItem(item, `dup1-${index}`)
            )}
          </VStack>
          
          <VStack spacing={3} 
            animation={hasAnimated ? `${scrollUp} 60s linear infinite` : "none"}
            transition="all 0.3s"
          >
            {column2.map((item, index) => renderThesisItem(item, index))}
            {hasAnimated && column2.slice(0, 3).map((item, index) => 
              renderThesisItem(item, `dup2-${index}`)
            )}
          </VStack>
          
          <VStack spacing={3} 
            animation={hasAnimated ? `${scrollDown} 60s linear infinite` : "none"}
            transition="all 0.3s"
          >
            {column3.map((item, index) => renderThesisItem(item, index))}
            {hasAnimated && column3.slice(0, 3).map((item, index) => 
              renderThesisItem(item, `dup3-${index}`)
            )}
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
              const columnIndex = Math.floor(index / Math.ceil(items.length / 5));
              const isEvenColumn = columnIndex % 2 === 0;
              
              return (
                <Box 
                  key={index}
                  position="relative"
                  height="auto"
                  animation={isEvenColumn ? `${scrollDown} 30s linear infinite` : `${scrollUp} 30s linear infinite`}
                  transition="all 0.3s"
                >
                  {renderThesisItem(item, index)}
                  
                  {(index < 5 || index >= items.length - 5) && (
                    <Box 
                      position="absolute" 
                      width="100%" 
                      top={isEvenColumn ? "-100%" : "100%"}
                      left="0"
                    >
                      {renderThesisItem(item, `dup-${index}`)}
                    </Box>
                  )}
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
