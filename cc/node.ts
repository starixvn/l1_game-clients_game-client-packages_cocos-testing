import { Vec3 } from "./v3";

export interface AnyConstructor<T = any> {
    new (...params: any[]): T;
}

export class Node {
    name = "node";

    position: Vec3 = new Vec3();

    active = true;

    scale: Vec3 = new Vec3();

    activeInHierarchy = false;

    enabled = false;

    node?: Node;

    rotation? = {};

    parent?: Node;

    children?: Node[] = [];

    getComponent: <T>(ctor: AnyConstructor<T>) => T = jest.fn();

    addChild: (node: Node) => void = jest.fn();

    destroyAllChildren = jest.fn();

    getChildByName = jest.fn();

    setSiblingIndex = jest.fn();

    destroy = jest.fn();

    removeAllChildren = jest.fn();

    on = jest.fn();

    addComponent = jest.fn();
}
