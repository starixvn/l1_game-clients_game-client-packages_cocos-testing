import { Color } from "./color";

export class Label {
    string = "string";

    node: any = new Node();

    getComponent = jest.fn();

    color = new Color();

    fontSize = 0;
}
