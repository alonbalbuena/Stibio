import Component from "../lib/Component.js";
export default class WatchedButton extends Component {
    animationDuration: number;
    constructor();
    connectedCallback(): void;
    static get observedAttributes(): string[];
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    changeRoute(): void;
    later(delay: number): Promise<void>;
    toggleAnimation(): Promise<void>;
}
//# sourceMappingURL=WatchedButton.d.ts.map