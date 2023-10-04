import { Node } from "./node";

export class Component {
    constructor() {}
    node = new Node();
    getComponent = jest.fn();
    getComponents = jest.fn();
    getComponentsInChildren = jest.fn();

    onEnable() {}

    onDestroy() {}

    onDisable() {}
}
