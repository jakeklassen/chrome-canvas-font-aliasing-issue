import "./style.css";
import visitorFontUrl from "../assets/fonts/visitor/visitor1.ttf";
import bunnyAssetUrl from "../assets/bunny.png";
import { onWindowResize } from "./lib/screen";
import { loadImage } from "./lib/asset-loaders";

const GAME_WIDTH = 384;
const GAME_HEIGHT = 216;

const font = new FontFace("Visitor", `url(${visitorFontUrl})`);
const visitorFont = await font.load();

document.fonts.add(visitorFont);

const bunny = await loadImage(bunnyAssetUrl);

const canvas = document.querySelector<HTMLCanvasElement>("canvas")!;
const ctx = canvas.getContext("2d")!;

ctx.imageSmoothingEnabled = false;

const resizeHandler = onWindowResize({
  canvas,
  gameWidth: GAME_WIDTH,
  gameHeight: GAME_HEIGHT,
});

// Call the handler once to scale to the current window.
resizeHandler();

window.addEventListener("resize", resizeHandler);

ctx.fillStyle = "white";
ctx.font = "10px Visitor";
ctx.fillText("1234567890 Game Over", 10, 10);

ctx.drawImage(
  bunny,
  canvas.width / 2 - bunny.width / 2,
  canvas.height / 2 - bunny.height / 2,
);
