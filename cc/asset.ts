export class Asset {}

export namespace AssetManager {
    export class Bundle {
        load = jest.fn();
    }
}

export const assetManager = {
    loadBundle: jest
        .fn()
        .mockImplementation((nameOrUrl: string, onComplete?: ((err: Error | null, data: AssetManager.Bundle) => void) | null): void => {
            if (onComplete) {
                onComplete(null, new AssetManager.Bundle());
            }
        }),
    loadRemote: jest.fn().mockImplementation((url: string, onComplete?: ((err: Error | null, data: Asset) => void) | null): void => {
        if (onComplete) {
            onComplete(null, {} as Asset);
        }
    }),
};

export const log = jest.fn();
export const warn = jest.fn();
export const error = jest.fn();
