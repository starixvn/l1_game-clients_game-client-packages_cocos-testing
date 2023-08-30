import { Component } from "./component";

export class EditBox extends Component {
    focus = jest.fn();

    get string(): string {
        return "sting";
    }

    set string(value: string) {}
}
