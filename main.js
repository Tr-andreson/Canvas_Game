(() => {

  const controlsUi = () => {
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText("Controls", 10, 40);
    ctx.font = "15px Arial";
    ctx.fillText("You Can Control the player with arrow keys", 10, 65);
  }

  // canvas setup
  const canvasContainer = document.getElementById("canvas")
  let ctx = canvasContainer.getContext("2d");
  const bgImage = new Image()
  bgImage.src = './background.png';

  bgImage.onload = () => {
    ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

    // After the background is drawn, you can draw other content on top
    ctx.fillStyle = "white";
    controlsUi()

    ctx.fillStyle = "red";
    ctx.fillRect(positionX, positionY, size, size);

    const image = document.getElementById("player");

    image.addEventListener("load", (e) => {
      ctx.drawImage(image, 10, 60, 80, 80);
    });

    function handleUp() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      positionY -= 20;
      ctx.fillRect(positionX, positionY, size, size);
      controlsUi()
    }

    function handleDown() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      positionY += 20;
      ctx.fillRect(positionX, positionY, size, size);
      controlsUi()
    }

    function handleLeft() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      positionX -= 20;
      ctx.fillRect(positionX, positionY, size, size);
      controlsUi()
    }

    function handleRight() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      positionX += 20;
      ctx.fillRect(positionX, positionY, size, size);
      controlsUi()
    }

    const handleKeyPress = (event) => {
      let key = event.key
      if (key === "ArrowUp") {
        handleUp()
      }
      if (key === "ArrowDown") {
        handleDown()
      }

      if (key === "ArrowLeft") {
        handleLeft()
      }
      if (key === "ArrowRight") {
        handleRight()
      }
    }

    document.addEventListener("keydown", handleKeyPress)
  };
  canvasContainer.width = window.innerWidth
  canvasContainer.height = window.innerHeight - 50

  let positionX = 100
  let positionY = 100
  let size = 20;

  // if no canvas container for 2d return

  if (!ctx) return

})()
