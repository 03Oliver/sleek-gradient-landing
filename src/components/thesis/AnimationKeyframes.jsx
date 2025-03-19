
import { keyframes } from "@chakra-ui/react";

export const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

export const blink = keyframes`
  50% { border-color: transparent }
`;

export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const unravel = keyframes`
  0% { transform: scaleY(0); opacity: 0; }
  100% { transform: scaleY(1); opacity: 1; }
`;

export const pulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 rgba(14, 165, 233, 0); }
  50% { transform: scale(1.02); box-shadow: 0 0 10px rgba(14, 165, 233, 0.4); }
  100% { transform: scale(1); box-shadow: 0 0 0 rgba(14, 165, 233, 0); }
`;

export const scrollDown = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(40px); }
`;

export const scrollUp = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-40px); }
`;

export const badgeBlink = keyframes`
  50% { opacity: 0.7; }
`;
