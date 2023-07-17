export class Animation {
    play = jest.fn();
    on = jest.fn();
    off = jest.fn();
    EventType = {
        PLAY: "play",
        STOP: "stop",
        PAUSE: "pause",
        RESUME: "resume",
        LASTFRAME: "lastframe",
        FINISHED: "finished",
    };
}
