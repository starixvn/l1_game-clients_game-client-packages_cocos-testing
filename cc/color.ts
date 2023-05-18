export class Color {
    static RED: Color = new Color();

    static WHITE: Color = new Color();

    static YELLOW: Color = new Color();

    static fromHEX = (...args: any[]) => new Color();

    _color: Color;

    constructor(...args: any[]) {}
}
