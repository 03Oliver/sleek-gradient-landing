
import { useEffect, useRef } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

const characters = "ﾕނֈﾎࠁｿߠٯցޏｸؿձߵޅ֊߷ﾊשﾏލ߹ｶގքﾐހքﾂރߴգߨﾘش߸ｴֆވՁߺըތޅֆզպ՝ⵠբރ՚ބմނ߶جｳߦձﾘﾋފحقߢ՝ވｱՇﻧߦէ֍ޏջࠃչߩﾋߡնｺﺝ߶ކսႠػՕݩފﾚڤࠂكއիｵސﾅފ֍ߣމﾖ֊ށߥމպ؍ߧթލﾑդｹߞքހｺއտބֈߡղސթｸޏبձؾⵠｺհｻցփ֊ސߣ߳ｷႠࠅղԷލր﷼ｵղքކք﮼ｿލեշތｸލࠄեփգހއդ߻።ރյﾍշވｷ߷՚ｶנތԷشߠպ߾ｷ՝ނݩշⵠؼյշｷחֈހլߴײցｴ՝շՒժނߤՁܐ։ֆﾐﾚ؍بﾖﾘكՐﾍ؛ﮯՂﾇﾀ֊ｹէքصﭺﾓﾁخｳﾈخػԱﾂﾐՀﾊؼ﷼ﾋզﾕﻭտﾌէﾕօگﾏقﾀﾒټذﾑصﾅﾇتցｶՁٯըﾇյࢪﾆւﾌيء֍հؿｾﷺﾏｵխشؼփوﾐﾁچպﾓغտշؼｿսⵠքمմﾘشگ֊عքｴկكﯼﾃէﻧ՗ﾏﾅդهﾂץλֈصձչسﾚՓկﾆԷｺբﻡԷﾋՍսیﾗՠﾔﷲﾎمդｸնւռٱժｶտզﾖز﮼ｳزٮ֊ﾃՈﾄًցﾑثսｸﷲﾘյՊﾎՙيｻւՆﾆ֍լؔﾊﮕｿｱրｱﾘցՈٯｵղձ֊ｶݩբقթﾗﯾｹկ֍şըשﾒըجｹｴԶշﮮնｵｴｱز֍";

const MatrixRain = () => {
  const canvasRef = useRef(null);
  const textColor = useColorModeValue("rgba(0, 0, 0, 0.7)", "rgba(255, 255, 255, 0.7)");
  const fadeColor = useColorModeValue("rgba(255, 255, 255, 0.05)", "rgba(0, 0, 0, 0.05)");

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    // Set canvas size to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Create an array of drops (one per column)
    const drops = [];
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Initialize drops at random positions
    for (let i = 0; i < columns; i++) {
      // Random starting position for each column
      drops[i] = Math.random() * -canvas.height;
    }
    
    // Generate a random string of characters from our set
    const getRandomString = () => {
      const length = 5 + Math.floor(Math.random() * 6); // 5-10 chars
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    };
    
    // Store strings for each column
    const strings = Array(columns).fill('').map(() => getRandomString());
    
    // Animation loop
    const draw = () => {
      // Add semi-transparent background rectangle to create fade effect
      ctx.fillStyle = fadeColor;
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
          
          // Calculate opacity based on position (head of trail is brighter)
          const opacity = j === 0 ? 0.9 : 0.9 - (j / text.length * 0.7);
          
          // Set color for this character with varying opacity
          ctx.fillStyle = textColor.replace("0.7", opacity.toString());
          
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
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [textColor, fadeColor]);

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
