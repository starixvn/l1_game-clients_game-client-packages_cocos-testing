export class Asset {}

export namespace AssetManager {
    export class Bundle {
        load = jest.fn();
    }
}

export interface IAssetManager {
    loadRemote<T extends Asset>(url: string, onComplete?: ((err: Error | null, data: T) => void) | null): void;
    loadRemote<T extends Asset>(url: string, options: { ext: string }, onComplete?: ((err: Error | null, data: T) => void) | null): void;
    loadBundle(nameOrUrl: string, onComplete?: ((err: Error | null, data: AssetManager.Bundle) => void) | null): void;
}

export const assetManager: IAssetManager = {
    loadBundle: jest
        .fn()
        .mockImplementation((nameOrUrl: string, onComplete?: ((err: Error | null, data: AssetManager.Bundle) => void) | null): void => {
            if (onComplete) {
                onComplete(null, new AssetManager.Bundle());
            }
        }),
    loadRemote: jest
        .fn()
        .mockImplementation(
            <T extends Asset>(
                url: string,
                optionsOrCallback?: { ext: string } | ((err: Error | null, data: T) => void) | null,
                onComplete?: ((err: Error | null, data: T) => void) | null
            ): void => {
                const callback = typeof optionsOrCallback === "function" ? optionsOrCallback : onComplete;
                if (callback) {
                    callback(null, {} as T);
                }
            }
        ),
};

export const log = jest.fn();
export const warn = jest.fn();
export const error = jest.fn();
