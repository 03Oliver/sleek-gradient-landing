
import { useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";

const characters = "ﾕނֈﾎࠁｿߠٯցޏｸؿձߵޅ֊߷ﾊשﾏލ߹ｶގքﾐހքﾂރߴգߨﾘش߸ｴֆވՁߺըތޅֆզպ՝ⵠբރ՚ބմނ߶جｳߦձﾘﾋފحقߢ՝ވｱՇﻧߦէ֍ޏջࠃչߩﾋߡնｺﺝ߶ކսႠػՕݩފﾚڤࠂكއիｵސﾅފ֍ߣމﾖ֊ށߥމպ؍ߧթލﾑդｹߞքހｺއտބֈߡղސթｸޏبձؾⵠｺհｻցփ֊ސߣ߳ｷႠࠅղԷލր﷼ｵղքކք﮼ｿލեշތｸލࠄեփգހއդ߻።ރյﾍշވｷ߷՚ｶנތԷشߠպ߾ｷ՝ނݩշⵠؼյշｷחֈހլߴײցｴ՝շՒժނߤՁܐ։ֆﾐﾚ؍بﾖﾘكՐﾍ؛ﮯՂﾇﾀ֊ｹէքصﭺﾓﾁخｳﾈخػԱﾂﾐՀﾊؼ﷼ﾋզﾕﻭտﾌէﾕօگﾏقﾀﾒټذﾑصﾅﾇتցｶՁٯըﾇյࢪﾆւﾌيء֍հؿｾﷺﾏｵխشؼփوﾐﾁچպﾓغտշؼｿսⵠքمմﾘشگ֊عքｴկكﯼﾃէﻧ՗ﾏﾅդهﾂץλֈصձչسﾚՓկﾆԷｺբﻡԷﾋՍսیﾗՠﾔﷲﾎمդｸնւռٱժｶտզﾖز﮼ｳزٮ֊ﾃՈﾄًցﾑثսｸﷲﾘյՊﾎՙيｻւՆﾆ֍լؔﾊﮕｿｱրｱﾘցՈٯｵղձ֊ｶݩբقթﾗﯾｹկ֍şըשﾒըجｹｴԶշﮮնｵｴｱز֍";

const MatrixRain = () => {
  const canvasRef = useRef(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    // Set canvas size to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Initialize matrix rain
    const fontSize = 14;
    let drops = [];
    let strings = [];
    
    // Function to initialize drops and strings
    const initializeMatrix = () => {
      // Use Math.ceil to ensure we have enough columns to cover the entire width
      const columns = Math.ceil(canvas.width / fontSize) + 1; // Add one extra column to ensure coverage
      
      // Reset arrays with new size
      drops = [];
      strings = [];
      
      // Initialize drops at random positions
      for (let i = 0; i < columns; i++) {
        // Random starting position for each column
        drops[i] = Math.random() * -canvas.height;
        strings[i] = getRandomString();
      }
    };
    
    // Generate a random string of characters from our set
    const getRandomString = () => {
      const length = 5 + Math.floor(Math.random() * 6); // 5-10 chars
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    };
    
    // Initialize the matrix
    initializeMatrix();
    
    // Animation loop
    const draw = () => {
      // Add semi-transparent black rectangle to create fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text properties
      ctx.font = `${fontSize}px monospace`;
      
      // Loop through each drop
      for (let i = 0; i < drops.length; i++) {
        // Get the current string for this column
        const text = strings[i];
        
        // Draw each character of the string with varying opacity
        for (let j = 0; j < text.length; j++) {
          const char = text.charAt(j);
          const y = drops[i] + j * fontSize;
          
          // Skip if off screen
          if (y < 0 || y > canvas.height) continue;
          
          // Calculate vertical position ratio (0 at top, 1 at bottom)
          const verticalRatio = y / canvas.height;
          
          // Calculate opacity based on position 
          // - Head of trail is brighter
          // - Characters fade out as they reach the bottom
          const headOpacity = j === 0 ? 0.9 : 0.9 - (j / text.length * 0.7);
          
          // Apply fading effect as characters get closer to the bottom
          // Linear fade from full opacity to 0 as they approach the bottom 80% of the screen
          const fadeoutThreshold = 0.2; // Start fading at 20% of screen height from the bottom
          const verticalFade = verticalRatio < fadeoutThreshold ? 1 : 1 - ((verticalRatio - fadeoutThreshold) / (1 - fadeoutThreshold));
          
          // Combine both opacity factors
          const opacity = headOpacity * verticalFade;
          
          // Set color for this character
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          
          // Draw the character
          ctx.fillText(char, i * fontSize, y);
        }
        
        // Move drop down
        const speed = 0.5 + Math.random() * 1.5; // Varied speed
        drops[i] += speed;
        
        // Reset drop and generate new string when it goes off screen
        if (drops[i] > canvas.height + text.length * fontSize) {
          drops[i] = Math.random() * -100;
          strings[i] = getRandomString();
        }
      }
      
      requestAnimationFrame(draw);
    };

    // Start animation
    draw();
    
    // Reinitialize on window resize
    const handleResize = () => {
      resizeCanvas();
      initializeMatrix();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box 
      position="absolute" 
      top={0}
      left={0}
      right={0}
      bottom={0}
      pointerEvents="none"
      zIndex={1}
    >
      <canvas 
        ref={canvasRef} 
        style={{ 
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0
        }} 
      />
    </Box>
  );
};

export default MatrixRain;
