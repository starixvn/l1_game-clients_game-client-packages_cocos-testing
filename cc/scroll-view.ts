import { Component } from "./component";
import { Node } from "./node";

export class ScrollView extends Component {
    content?: Node = new Node();

    scrollToPercentHorizontal = jest.fn();

    getScrollOffset = jest.fn();

    getMaxScrollOffset = jest.fn();
}
