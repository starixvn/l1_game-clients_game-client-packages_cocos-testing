import { Color } from "./color";

export class Label {
    static CacheMode = {
        NONE: 0,
        BITMAP: 1,
        CHAR: 2,
    };
    string = "string";

    node: any = new Node();

    getComponent = jest.fn();

    color = new Color();

    fontSize = 0;

    cacheMode = 2;
}
