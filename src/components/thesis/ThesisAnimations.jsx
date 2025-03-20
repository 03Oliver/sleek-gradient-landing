
import { useState, useRef, useEffect } from "react";

const ThesisAnimations = ({ 
  setHeaderText, 
  setBodyText, 
  setSubheadingText, 
  setIsHeaderTypingComplete, 
  setIsBodyTypingComplete,
  setHasAnimated,
  fullHeaderText,
  fullBodyText,
  fullSubheadingText
}) => {
  const headerIndexRef = useRef(0);
  const bodyIndexRef = useRef(0);
  const subheadingIndexRef = useRef(0);

  useEffect(() => {
    const hasShownAnimation = sessionStorage.getItem("hasAnimatedThesis");
    
    if (hasShownAnimation) {
      setHeaderText(fullHeaderText);
      setSubheadingText(fullSubheadingText);
      setBodyText(fullBodyText);
      setIsHeaderTypingComplete(true);
      setIsBodyTypingComplete(true);
      setHasAnimated(true);
    } else {
      const headerInterval = setInterval(() => {
        setHeaderText(fullHeaderText.substring(0, headerIndexRef.current + 1));
        headerIndexRef.current++;
        if (headerIndexRef.current === fullHeaderText.length) {
          clearInterval(headerInterval);
          setIsHeaderTypingComplete(true);
          startSubheadingTyping();
        }
      }, 50);

      return () => clearInterval(headerInterval);
    }
  }, []);

  const startSubheadingTyping = () => {
    const subheadingInterval = setInterval(() => {
      setSubheadingText(fullSubheadingText.substring(0, subheadingIndexRef.current + 1));
      subheadingIndexRef.current++;
      if (subheadingIndexRef.current === fullSubheadingText.length) {
        clearInterval(subheadingInterval);
        startBodyTyping();
        sessionStorage.setItem("hasAnimatedThesis", "true");
      }
    }, 50);
  };

  const startBodyTyping = () => {
    const bodyInterval = setInterval(() => {
      setBodyText(fullBodyText.substring(0, bodyIndexRef.current + 1));
      bodyIndexRef.current++;
      if (bodyIndexRef.current === fullBodyText.length) {
        clearInterval(bodyInterval);
        setIsBodyTypingComplete(true);
        setHasAnimated(true);
      }
    }, 40);
  };

  return null;
};

export default ThesisAnimations;
