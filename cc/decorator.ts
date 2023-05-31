export const _decorator = {
    ccclass: () => jest.fn(),
    property: (target, propertyKey) => (target === undefined || typeof propertyKey === "undefined" ? jest.fn() : undefined),
    requireComponent: () => jest.fn(),
    executeInEditMode: () => jest.fn(),
    menu: () => jest.fn(),
    disallowMultiple: () => jest.fn(),
};
