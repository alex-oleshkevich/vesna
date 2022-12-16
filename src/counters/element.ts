import { html, LitElement } from "lit";
import { classMap } from "lit-html/directives/class-map.js";
import { customElement, property } from "lit/decorators.js";

export type CounterVariant = 'filled' | 'subtle' | 'outline';
export type CounterSize = 'sm' | 'md' | 'lg';

@customElement('vs-counter')
export class Counter extends LitElement {
    @property() size: CounterSize = 'md';
    @property() variant: CounterVariant = 'filled';

    render() {
        const classes = classMap({
            counter: true,
            [`counter-${this.size}`]: true,
            [`counter-${this.variant}`]: true,
        });
        return html`<span class="${classes}">${this.children}</span>`;
    }

    protected createRenderRoot(): Element | ShadowRoot {
        return this;
    }
}