import { html, LitElement, svg, unsafeCSS } from "lit";
import { classMap } from "lit-html/directives/class-map.js";
import { createRef, ref, Ref } from "lit-html/directives/ref.js";
import { customElement, property } from "lit/decorators.js";

import style from './styles.css?inline';

export type AccordionVariant = 'simple' | 'filled';
export type AccordionSize = 'sm' | 'md' | 'lg';

const icon = svg`<svg class="accordion-icon" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10.5L8 14.5L12 10.5" stroke="#9AA6AC"/>
</svg>`;

@customElement('vs-accordion')
export class Accordion extends LitElement {
    @property() size: AccordionSize = 'md';
    @property() variant: AccordionVariant = 'simple';
    @property() heading: string = 'Details';
    @property({ type: Boolean, reflect: true }) open: boolean = false;
    @property({ type: Boolean, reflect: true }) disabled: boolean = false;

    static styles = [unsafeCSS(style)];

    _containerRef: Ref<HTMLDivElement> = createRef();

    expand() {
        this.open = true;
        this.dispatchEvent(new CustomEvent('vs-open', { bubbles: true }));
    }

    collapse() {
        this.open = false;
        this.dispatchEvent(new CustomEvent('vs-close', { bubbles: true }));
    }

    toggle() {
        this.open ? this.collapse() : this.expand();
    }

    render() {
        const classes = classMap({
            accordion: true,
            open: this.open,
            disabled: this.disabled,
            [`accordion-${this.size}`]: true,
            [`accordion-${this.variant}`]: true,
        });

        return html`
        <div class="${classes}">
            <button @click="${this.toggle}">
                ${icon}
                ${this.heading}
            </button>
            <main ${ref(this._containerRef)}>
                <slot></slot>
            </main>
        </div>`;
    }
}