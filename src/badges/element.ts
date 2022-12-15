import { html, LitElement } from "lit";
import { classMap } from "lit-html/directives/class-map.js";
import { customElement, property } from "lit/decorators.js";

export type BadgeSize = 'sm' | 'md' | 'lg';
export type BadgeColor = 'blue' | 'red' | 'yellow' | 'green' | 'purple' | 'teal' | 'gray';
export type BadgeVariant = 'filled' | 'subtle' | 'outline';

@customElement('vs-badge')
export class Badge extends LitElement {
    @property() size: BadgeSize = 'md';
    @property() color: BadgeColor = 'gray';
    @property() variant: BadgeVariant = 'filled';

    render() {
        const classes = classMap({
            badge: true,
            [`badge-${this.size}`]: true,
            [`badge-${this.color}`]: true,
            [`badge-${this.variant}`]: true,
        });
        return html`<span class="${classes}">${this.children}</span>`;
    }

    protected createRenderRoot(): Element | ShadowRoot {
        return this;
    }
}