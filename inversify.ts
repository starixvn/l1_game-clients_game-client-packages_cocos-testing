import { jest } from "@jest/globals";

export const injectable = jest.fn().mockImplementation(() => () => {});

export const inject = jest.fn().mockImplementation(() => () => {});

export class Container {
    private bindings = new Map();
    private instances = new Map();

    bind(serviceIdentifier: any) {
        const binding = {
            to: jest.fn().mockReturnThis(),
            toSelf: jest.fn().mockImplementation(() => {
                this.instances.set(serviceIdentifier, null); // Mark for lazy instantiation
                return binding;
            }),
            toConstantValue: jest.fn().mockImplementation((value: any) => {
                this.instances.set(serviceIdentifier, value);
                return binding;
            }),
        };
        this.bindings.set(serviceIdentifier, binding);
        return binding;
    }

    get(serviceIdentifier: any) {
        // Return existing instance if available
        if (this.instances.has(serviceIdentifier)) {
            const instance = this.instances.get(serviceIdentifier);
            if (instance !== null) {
                return instance;
            }
        }

        // Create new instance
        try {
            const instance = new serviceIdentifier();
            this.instances.set(serviceIdentifier, instance);
            return instance;
        } catch {
            return {};
        }
    }
}

export default { injectable, inject, Container };
