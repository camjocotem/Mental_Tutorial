import { Application, Graphics, Assets, Sprite } from "pixi.js";
import * as PIXI from 'pixi.js'
import Emotions from  "../data/emotions"

(async () => {
  const app = new Application();

  console.log("Emotions", Emotions)

  // Initialize the application
  await app.init({ background: "#16161D", resizeTo: window });

  // Append the application canvas to the document body
  document.getElementById("pixi-container").appendChild(app.canvas);

  const background = new PIXI.Graphics();
  background.beginFill(0x16161d);
  background.drawRect(0, 0, app.screen.width, app.screen.height);
  background.endFill();

  background.interactive = true;

  app.stage.addChildAt(background, 0); //Add at 0 to hide behind everything

  const graphics = new Graphics()
  .rect(50, 50, 100, 100)
  .fill(0xffaa00)
  .circle(200, 200, 50)
  .stroke(0x00ff00)
  .lineStyle(5)
  .moveTo(300, 300)
  .lineTo(400, 400);

  app.stage.addChildAt(graphics,1);

  // Listen for animate update
  app.ticker.add((time) => {
    // Just for fun, let's rotate mr rabbit a little.
    // * Delta is 1 if running at 100% performance *
    // * Creates frame-independent transformation *
  });
})();
