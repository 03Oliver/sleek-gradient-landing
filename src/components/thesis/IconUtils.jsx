
import { 
  Zap, Lightbulb, Leaf, Cpu, Atom, Droplet, Wind, BarChart, Database,
  Network, Code, CircuitBoard, Server, HardDrive, TreeDeciduous, Flower,
  Sprout, Battery, Plug, PlugZap, Sun, SunMoon, Waves, Fish, Router,
  Terminal, Microchip, Shrub, Flower2, Clover, TreePalm, TreePine
} from "lucide-react";

export const getIconForThesisItem = (text) => {
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
