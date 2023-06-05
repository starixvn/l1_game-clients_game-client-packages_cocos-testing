const property = jest.fn();
const normalized = jest.fn();

export const _decorator = {
    ccclass: (constructor?) => jest.fn(),
    property: (target?, propertyKey?, descriptor?) => {
        if (target === undefined) {
            // @property() => LegacyPropertyDecorator
            return property({
                type: undefined,
            });
        } else if (typeof propertyKey === "undefined") {
            // @property(options) => LegacyPropertyDescriptor
            // @property(type) => LegacyPropertyDescriptor
            return normalized;
        } else {
            // @property
            normalized(target, propertyKey, descriptor);
            return undefined;
        }
    },
    requireComponent: () => jest.fn(),
    executeInEditMode: () => jest.fn(),
    menu: () => jest.fn(),
    disallowMultiple: () => jest.fn(),
};
