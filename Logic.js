let img = new Image();
      img.src = 'https://toppng.com/public/uploads/thumbnail/baston-sprite-sheet-template-circle-11562903924akb6je0i2d.png';
      img.onload = function() {
        window.requestAnimationFrame(movementMechanics);
      };
      
      let canvas = document.querySelector('canvas');
      let ctx = canvas.getContext('2d');
      
      const SCALE = 1.5;
      const WIDTH = 26;
      const HEIGHT = 29;
      const SCALED_WIDTH = SCALE * WIDTH;
      const SCALED_HEIGHT = SCALE * HEIGHT;
      
      function drawFrame(frameX, frameY, canvasX, canvasY) {
        ctx.drawImage(img,
                      frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,
                      canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
      
      var context = canvas.getContext('2d');
          context.fillRect(100,100,90,90);
     
          

          
        };
    


      const CYCLE_LOOP = [0, 1, 0, 2];
      let currentLoopIndex = 0;
      let frameCount = 0;
      let currentDirection = 0;
      let keyDown = {};
      
      window.addEventListener('keydown', keyDownListener);
      function keyDownListener(event) {
        event.preventDefault();
        keyDown[event.key] = true;
      }
      
      window.addEventListener('keyup', keyUpListener);
      function keyUpListener(event) {
        event.preventDefault();
          keyDown[event.key] = false;
      }
      
      const movespeed = 3;
      let positionX = 0;
      let positionY = 0;
      
      
      function movementMechanics() {
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        if (keyDown.ArrowUp) {
            if (positionY >= movespeed) {
              positionY -= movespeed;
            }
         } else if (keyDown.ArrowDown) {
             if (positionY <= 665 - movespeed) {
              positionY += movespeed;
             }
          
        }
        if (keyDown.ArrowLeft) {
            if (positionX >=movespeed) {
              positionX -= movespeed;
            }
          
        } else if (keyDown.ArrowRight) {
            if (positionX <= 1470 -movespeed) {
              positionX += movespeed;
            }
          
       }
        drawFrame(0, 0, positionX, positionY);
       window.requestAnimationFrame(movementMechanics);
      }
     





