export class Tween {
    static stopAllByTarget = jest.fn();
}

export const tween = jest.fn(() => {
    return {
        to: jest.fn().mockReturnThis(),
        by: jest.fn().mockReturnThis(),
        start: jest.fn().mockReturnThis(),
    };
});
