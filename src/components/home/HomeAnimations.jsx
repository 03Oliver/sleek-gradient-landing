
import { useRef, useEffect } from "react";

const HomeAnimations = ({
  setHeaderText,
  setBodyText,
  setIsTypingComplete,
  fullHeaderText,
  fullBodyText,
  oliverText,
  remainingText
}) => {
  const headerIndexRef = useRef(0);
  const bodyIndexRef = useRef(0);

  useEffect(() => {
    const hasAnimationPlayed = sessionStorage.getItem('animationPlayed');

    if (hasAnimationPlayed) {
      setHeaderText(fullHeaderText);
      setBodyText(fullBodyText + oliverText + remainingText);
      setIsTypingComplete(true);
      return;
    }

    const headerInterval = setInterval(() => {
      setHeaderText(fullHeaderText.substring(0, headerIndexRef.current + 1));
      headerIndexRef.current++;
      if (headerIndexRef.current === fullHeaderText.length) {
        clearInterval(headerInterval);
        startBodyTyping();
      }
    }, 50);

    sessionStorage.setItem('animationPlayed', 'true');

    return () => clearInterval(headerInterval);
  }, []);

  const startBodyTyping = () => {
    const currentText = fullBodyText + oliverText + remainingText;
    const bodyInterval = setInterval(() => {
      setBodyText(currentText.substring(0, bodyIndexRef.current + 1));
      bodyIndexRef.current++;
      if (bodyIndexRef.current === currentText.length) {
        clearInterval(bodyInterval);
        setIsTypingComplete(true);
      }
    }, 40);
  };

  return null;
};

export default HomeAnimations;
