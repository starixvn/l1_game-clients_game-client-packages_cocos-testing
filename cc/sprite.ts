import { Color } from "./color";
import { Node } from "./node";

export class Sprite {
    static SizeMode = {
        RAW: "RAW",
    };

    spriteFrame: any = new SpriteFrame();
    node: Node = new Node();

    color: Color = new Color();

    sizeMode = "sizeMode";

    private _trim: boolean = false;
    get trim(): boolean {
        return this._trim;
    }
    set trim(value: boolean) {
        this._trim = value;
    }
}

export class SpriteFrame {
    texture: any;
    
    constructor() {
    }
}

export class ImageAsset {}

export class Texture2D {
    image: any = null;
}

export class SpriteAtlas {
    getSpriteFrame = jest.fn();
}
