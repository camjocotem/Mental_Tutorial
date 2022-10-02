import { Container, Graphics, InteractionEvent, Sprite } from "pixi.js";

export class Scene extends Container {
    private clampyList: Sprite[];
    private screenWidth: number;
    private screenHeight: number;
    constructor(screenWidth: number, screenHeight: number) {
        super();

        this.screenHeight = screenHeight;
        this.screenWidth = screenWidth;
        this.clampyList = [];

        this.on("pointer", ()=>{
            console.log("You clicked the scene!");
            let newClampy = this.getNewClampy();
            this.clampyList.push(newClampy);
            this.addChild(newClampy);            
        })

        this.interactive = true;

        // events that begin with "pointer" are touch + mouse

            let frame = new Graphics();
            frame.beginFill(0x666666);
            frame.drawRect(0, 0, screenWidth, screenHeight);
            frame.position.set(0, 0);
            frame.on("click", (e: InteractionEvent) => { 
                let innerRect = new Graphics();
                innerRect.beginFill(0x222222);
                innerRect.drawRect(0, 0, screenWidth /2, screenHeight /2);
                let pos = e.data.getLocalPosition(this);
                innerRect.position.set(pos.x, pos.y)
                this.addChild(innerRect);
            })
            frame.interactive = true;
            this.addChild(frame);
    }

    private onClicky(e: InteractionEvent): void {
        console.log("You interacted with Clampy!")
        console.log("The data of your interaction is super interesting", e);
    }

    private getNewClampy() : Sprite {
        let clampy = Sprite.from("clampy.png");
        clampy.anchor.set(0.5);
        clampy.x = this.screenWidth / 2;
        clampy.y = this.screenHeight / 2;
        clampy.on("pointer", this.onClicky, this);
        clampy.interactive = true;

        return clampy;
    }
}