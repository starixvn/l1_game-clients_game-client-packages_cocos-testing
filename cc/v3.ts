export const v3 = jest.fn();

export class Vec3 {
    static ZERO = 0;
    static ONE = 1;

    x? = 0;
    y? = 0;
    z? = 0;

    constructor(x?: number, y?: number, z?: number) {
        this.x = x ?? 0;
        this.y = y ?? 0;
        this.z = z ?? 0;
    }

    clone = jest.fn();
}
