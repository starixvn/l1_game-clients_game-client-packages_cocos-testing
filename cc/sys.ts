type Sys = {
    isBrowser: boolean;
};

export const sys: Sys = {
    isBrowser: typeof window !== "undefined",
};
