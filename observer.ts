export const render = jest.fn().mockImplementation((ctor, callback) => () => {
    const instance = new ctor();

    callback(instance);
});

export const handle = (constructor, caller?) => jest.fn((constructor, caller, param) => {});
export const observer = jest.fn().mockImplementation(() => () => {});

export const configure = jest.fn();

export default { render, handle, configure, observer };
