import hacks from "./hacks";
import { Vec3 } from "./v3";

export interface AnyConstructor<T = any> {
    new (...params: any[]): T;
}

export type Constructor<T> = AnyConstructor<T>;

export class Node {
    constructor(...args: any[]) {}

    name = "node";

    position: Vec3 = new Vec3();

    active: boolean;

    scale: any;

    activeInHierarchy = false;

    enabled = false;

    node?: Node;

    rotation? = {};

    parent?: Node = this;

    children?: Node[] = [];

    getComponent: <T>(ctor: AnyConstructor<T>) => T = jest.fn().mockReturnValue(hacks);

    getComponents: <T>(ctor: AnyConstructor<T>) => T[] = jest.fn().mockReturnValue([hacks]);

    getComponentsInChildren: <T>(ctor: AnyConstructor<T>) => T[] = jest.fn().mockReturnValue([hacks]);

    getComponentInChildren: <T>(ctor: AnyConstructor<T>) => T = jest.fn().mockReturnValue(hacks);

    addChild: (node: Node) => void = jest.fn().mockReturnValue(hacks);

    destroyAllChildren = jest.fn().mockReturnValue(hacks);

    getChildByName = jest.fn().mockReturnValue(hacks);

    setSiblingIndex = jest.fn().mockReturnValue(hacks);

    destroy = jest.fn().mockReturnValue(hacks);

    removeAllChildren = jest.fn().mockReturnValue(hacks);

    on = jest.fn().mockReturnValue(hacks);

    addComponent = jest.fn().mockReturnValue(hacks);

    insertChild = jest.fn().mockReturnValue(hacks);

    schedule = jest.fn().mockReturnValue(hacks);

    off = jest.fn().mockReturnValue(hacks);
}
