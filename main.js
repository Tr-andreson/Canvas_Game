(() => {
    const canvasContainer = document.getElementById("canvas");
    if (!canvasContainer) return;

    const ctx = canvasContainer.getContext("2d");
    if (!ctx) return;

    // canvas dimentions
    canvasContainer.width = window.innerWidth;
    canvasContainer.height = window.innerHeight

    // Game state
    let positionX = 400;
    let positionY = 400;
    const size = 50;

    // Load images
    const bgImage = new Image();
    bgImage.src = './background.png';

    const playerImage = new Image();
    playerImage.src = './red.png';

    const playerImageLeft = new Image();
    playerImageLeft.src = './leftRed.png';

    // UI functions
    const controlsUi = () => {
        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.fillText("Controls", 10, 40);
        ctx.font = "15px Arial";
        ctx.fillText("You Can Control the player with arrow keys", 10, 65);
    };

    const drawPlayer = () => {
            ctx.drawImage(playerImage, positionX, positionY, size, size);
    };

    const drawPlayerLeft = () => {
            ctx.drawImage(playerImage, positionX, positionY, size, size);
    };

    const drawBackground = () => {
        ctx.drawImage(bgImage, 0, 0, canvasContainer.width, canvasContainer.height);
    };

    // used to clear the canvas and drawing ui
    const redrawScene = () => {
        // used to clean canvas
        ctx.clearRect(0, 0, canvasContainer.width, canvasContainer.height);

        drawBackground();
        controlsUi();
        drawPlayer();
    };

    let steps = 50;

    const handleUp = () => {
        positionY = positionY - steps;
        redrawScene();
    };

    const handleDown = () => {
        positionY = positionY + steps;
        redrawScene();
    };

    const handleLeft = () => {
        positionX = positionX - steps;
        redrawScene();
    };

    const handleRight = () => {
        positionX = positionX + steps;
        redrawScene();
    };

    // keyboard input
    const handleKeyPress = (event) => {
        switch(event.key) {
            case "ArrowUp":
                handleUp();
                break;
            case "ArrowDown":
                handleDown();
                break;
            case "ArrowLeft":
                handleLeft();
                break;
            case "ArrowRight":
                handleRight();
                break;
        }
    };

    const init = () => {
        // Set up event listeners
        document.addEventListener("keydown", handleKeyPress);

        // Handle image loading
        const imagesLoaded = () => {
            redrawScene();
        };

        let imagesToLoad = 2;
        const checkImagesLoaded = () => {
            imagesToLoad--;
            if (imagesToLoad === 0) {
                imagesLoaded();
            }
        };

        bgImage.onload = checkImagesLoaded;
        playerImage.onload = checkImagesLoaded;

        // If images are already loaded
        if (bgImage.complete && playerImage.complete) {
            redrawScene();
        }
    };

    init();
})();
