
import { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions to match window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Matrix characters
    const matrixChars = "ﾕނֈﾎࠁｿߠٯցޏｸؿձߵޅ֊߷ﾊשﾏލ߹ｶގքﾐހքﾂރߴգߨﾘش߸ｴֆވՁߺըތޅֆզպ՝ⵠբރ՚ބմނ߶جｳߦձﾘﾋފحقߢ՝ވｱՇﻧߦէ֍ޏջࠃչߩﾋߡնｺﺝ߶ކսႠػՕݩފﾚڤࠂكއիｵސﾅފ֍ߣމﾖ֊ށߥމպ؍ߧթލﾑդｹߞքހｺއտބֈߡղސթｸޏبձؾⵠｺհｻցփ֊ސߣ߳ｷႠࠅղԷލր﷼ｵղքކք﮼ｿލեշތｸލࠄեփգހއդ߻።ރյﾍշވｷ߷՚ｶנތԷشߠպ߾ｷ՝ނݩշⵠؼյշｷחֈހլߴײցｴ՝շՒժނߤՁܐ։ֆﾐﾚ؍بﾖﾘكՐﾍ؛ﮯՂﾇﾀ֊ｹէքصﭺﾓﾁخｳﾈخػԱﾂﾐՀﾊؼ﷼ﾋզﾕﻭտﾌէﾕօگﾏقﾀﾒټذﾑصﾅﾇتցｶՁٯըﾇյࢪﾆւﾌيء֍հؿｾﷺﾏｵխشؼփوﾐﾁچպﾓغտշؼｿսⵠքمմﾘشگ֊عքｴկكﯼﾃէﻧ՗ﾏﾅդهﾂץλֈصձչسﾚՓկﾆԷｺբﻡԷﾋՍսیﾗՠﾔﷲﾎمդｸնւռٱժｶտզﾖز﮼ｳزٮ֊ﾃՈﾄًցﾑثսｸﷲﾘյՊﾎՙيｻւՆﾆ֍լؔﾊﮕｿｱրｱﾘցՈٯｵղձ֊ｶݩբقթﾗﯾｹկ֍şըשﾒըجｹｴԶշﮮնｵｴｱز֍";

    // Create drops
    const columns = Math.floor(canvas.width / 20); // Character width plus spacing
    const drops = [];
    
    // Initialize each column with a random starting position
    for (let i = 0; i < columns; i++) {
      drops[i] = {
        y: Math.random() * -500, // Start above the canvas at random heights
        speed: 1.5 + Math.random() * 3.5, // Faster speed
        length: 3 + Math.floor(Math.random() * 3), // Even shorter trails: Random length between 3-5 chars
        opacity: 0.025 + Math.random() * 0.1, // Reduced opacity by approximately 50%
        type: Math.random() > 0.3 ? 'fade' : 'trail', // 70% fade, 30% trail
      };
    }

    // Check if device is mobile
    const isMobile = window.innerWidth <= 768;
    // Reduce density on mobile
    const density = isMobile ? 0.2 : 0.4; // Show fewer columns on mobile

    function draw() {
      // Semi-transparent black background with very low opacity to maintain gradient visibility
      ctx.fillStyle = "rgba(0, 0, 0, 0.01)"; // Reduced opacity to almost nothing to prevent fading to black
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set character style
      ctx.font = "15px monospace";
      
      // Draw each column
      for (let i = 0; i < columns; i++) {
        // Only draw some columns based on density
        if (Math.random() > density) continue;
        
        // For each drop, create a string of characters
        const drop = drops[i];
        
        // Generate a string of random characters
        for (let j = 0; j < drop.length; j++) {
          const y = drop.y - (j * 20); // Space characters vertically
          
          if (y < 0 || y > canvas.height) continue;
          
          // Calculate opacity based on type
          let alpha;
          if (drop.type === 'fade') {
            // Characters at end of string are more faded
            const fadeFactor = 1 - (j / drop.length);
            alpha = drop.opacity * fadeFactor;
          } else { // trail type
            // Trail effect - head is bright, tail fades
            alpha = drop.opacity * (1 - (j / drop.length) * 0.8);
          }
          
          // Set color with alpha for fading effect - WHITE color with variable opacity
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          
          // Select random character
          const charIndex = Math.floor(Math.random() * matrixChars.length);
          const char = matrixChars[charIndex];
          
          // Draw character
          ctx.fillText(char, i * 20, y);
        }
        
        // Move drop down
        drop.y += drop.speed;
        
        // Reset drop when it goes off screen with buffer for entire string length
        if (drop.y > canvas.height + (drop.length * 20)) {
          drop.y = Math.random() * -200;
          drop.length = 3 + Math.floor(Math.random() * 3); // Random length between 3-5
          drop.opacity = 0.025 + Math.random() * 0.1; // Keep reduced opacity
          drop.type = Math.random() > 0.3 ? 'fade' : 'trail'; // Randomize type again
          drop.speed = 1.5 + Math.random() * 3.5; // Randomize speed again
        }
      }
    }

    // Animation loop - faster refresh rate
    const interval = setInterval(draw, 30); // Even faster (was 40ms)

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box
      as="canvas"
      ref={canvasRef}
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100%"
      zIndex="0"
      pointerEvents="none" // Allow clicking through the canvas
    />
  );
};

export default MatrixRain;
