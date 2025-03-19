
import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions to match window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Characters to use for the rain effect
    const chars = 'ﾕނֈﾎࠁｿߠٯցޏｸؿձߵޅ֊߷ﾊשﾏލ߹ｶގքﾐހքﾂރߴգߨﾘش߸ｴֆވՁߺըތޅֆզպ՝ⵠբރ՚ބմނ߶جｳߦձﾘﾋފحقߢ՝ވｱՇﻧߦէ֍ޏջࠃչߩﾋߡնｺﺝ߶ކսႠػՕݩފﾚڤࠂكއիｵސﾅފ֍ߣމﾖ֊ށߥމպ؍ߧթލﾑդｹߞքހｺއտބֈߡղސթｸޏبձؾⵠｺհｻցփ֊ސߣ߳ｷႠࠅղԷލր﷼ｵղքކք﮼ｿލեշތｸލࠄեփգހއդ߻።ރյﾍշވｷ߷՚ｶנތԷشߠպ߾ｷ՝ނݩշⵠؼյշｷחֈހլߴײցｴ՝շՒժނߤՁܐ։ֆﾐﾚ؍بﾖﾘكՐﾍ؛ﮯՂﾇﾀ֊ｹէքصﭺﾓﾁخｳﾈخػԱﾂﾐՀﾊؼ﷼ﾋզﾕﻭտﾌէﾕօگﾏقﾀﾒټذﾑصﾅﾇتցｶՁٯըﾇյࢪﾆւﾌيء֍հؿｾﷺﾏｵխشؼփوﾐﾁچպﾓغտշؼｿսⵠքمմﾘشگ֊عքｴկكﯼﾃէﻧ՗ﾏﾅդهﾂץλֈصձչسﾚՓկﾆԷｺբﻡԷﾋՍսیﾗՠﾔﷲﾎمդｸնւռٱժｶտզﾖز﮼ｳزٮ֊ﾃՈﾄًցﾑثսｸﷲﾘյՊﾎՙيｻւՆﾆ֍լؔﾊﮕｿｱրｱﾘցՈٯｵղձ֊ｶݩբقթﾗﯾｹկ֍şըשﾒըجｹｴԶշﮮնｵｴｱز֍';

    // Define rain drops
    const drops = [];
    let lastSpawnTime = Date.now();
    const spawnInterval = 700; // Very infrequent spawning (700ms minimum between spawns)
    
    // Clear the canvas with a transparent black to fade older characters
    function clearCanvas() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.01)'; // Very low opacity for subtle fade
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Create a new drop
    function createDrop() {
      // Only create a new drop occasionally (with random chance)
      if (Date.now() - lastSpawnTime < spawnInterval || Math.random() > 0.05) return;
      
      lastSpawnTime = Date.now();
      
      // Random starting position
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      
      // Random direction (up or down)
      const direction = Math.random() > 0.5 ? 1 : -1;
      
      // Random length between 4-15 characters
      const length = Math.floor(Math.random() * 12) + 4;
      
      // Random speed
      const speed = (Math.random() * 2) + 1;
      
      // Create a string of random characters
      let text = '';
      for (let i = 0; i < length; i++) {
        text += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      
      // Set creation time for fade calculation
      const creationTime = Date.now();
      
      drops.push({ x, y, text, direction, speed, creationTime });
    }
    
    // Draw a raindrop
    function drawDrop(drop) {
      const age = Date.now() - drop.creationTime;
      const lifespan = 3000; // 3 seconds lifespan
      
      // Calculate opacity based on age (fade in and out)
      let opacity = 0.15; // Base opacity at 15% (50% of the normal 0.3)
      
      if (age < 500) {
        // Fade in during first 500ms
        opacity *= (age / 500);
      } else if (age > lifespan - 500) {
        // Fade out during last 500ms
        opacity *= (lifespan - age) / 500;
      }
      
      // Remove drops that have lived their full lifespan
      if (age > lifespan) {
        return false;
      }
      
      // Set the font and color
      ctx.font = '16px monospace';
      ctx.fillStyle = `rgba(170, 255, 170, ${opacity})`;
      
      // Draw each character in the string
      for (let i = 0; i < drop.text.length; i++) {
        const charY = drop.y + (i * 20 * drop.direction);
        
        // Only draw if within canvas
        if (charY > 0 && charY < canvas.height) {
          ctx.fillText(drop.text.charAt(i), drop.x, charY);
        }
      }
      
      // Update drop position
      drop.y += drop.speed * drop.direction;
      
      return true;
    }
    
    // Animation function
    function animate() {
      // Create a new drop occasionally
      createDrop();
      
      // Clear with very low opacity to create trail effect
      clearCanvas();
      
      // Draw and update all drops
      for (let i = 0; i < drops.length; i++) {
        if (!drawDrop(drops[i])) {
          drops.splice(i, 1);
          i--;
        }
      }
      
      // Continue animation
      requestAnimationFrame(animate);
    }
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1, // Above background but below content
        pointerEvents: 'none' // Don't capture mouse events
      }}
    />
  );
};

export default MatrixRain;
