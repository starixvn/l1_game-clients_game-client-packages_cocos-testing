import { Node } from "./node";

export class Component extends Node {
    constructor() {
        super();

        this.node = new Node();
    }
    getComponent = jest.fn();
}
