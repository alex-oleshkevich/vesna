import { LitElement, html } from "lit";
import { classMap } from "lit-html/directives/class-map.js";
import { customElement, property } from "lit/decorators.js";

export type DotColor = 'green' | 'red' | 'blue' | 'yellow' | 'purple' | 'teal' | 'black' | 'white';

@customElement('vs-status')
export class Status extends LitElement {
    @property()
    color: DotColor = 'green';

    @property()
    text: string = '';

    override render() {
        const dotClasses = classMap({
            dot: true,
            [`dot-${this.color}`]: true,
        })

        const children = html`${this.text ?? this.children}`;
        return html`
            <div class="status">
                <div class="${dotClasses}"></div>
                <span>${children}</span>
            </div>`;
    }

    protected createRenderRoot(): Element | ShadowRoot {
        return this;
    }
}
