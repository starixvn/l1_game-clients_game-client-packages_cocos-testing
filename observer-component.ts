import { Node } from "cc";

jest.mock("db://shared-components/shared/common-components/observer-component/scripts/observer-component", () => ({
    ObserverComponent: class MockObserverComponent {
        onLoad() {}
        onEnable() {}
        onDestroy() {}
        start() {}
        update() {}
        node = new Node();
    },
}));
