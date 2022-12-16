import { html, LitElement, PropertyValues } from "lit";
import { classMap } from "lit-html/directives/class-map.js";
import { createRef, ref, Ref } from "lit-html/directives/ref.js";
import { customElement, property } from "lit/decorators.js";

export type TagSize = 'sm' | 'md' | 'lg';
export type TagVariant = 'filled' | 'outline' | 'text';

@customElement('vs-tag')
export class Tag extends LitElement {
    @property() size: TagSize = 'md';
    @property() variant: TagVariant = 'filled';
    @property({ type: Boolean }) closeable: boolean = false;

    private _closeButtonRef: Ref<HTMLButtonElement> = createRef();

    protected firstUpdated(_changedProperties: PropertyValues): void {
        if (this._closeButtonRef.value) {
            this._closeButtonRef.value.addEventListener('click', () => {
                this.dispatchEvent(new CustomEvent('vs-close', { bubbles: true }));
            });
        }
    }

    render() {
        const classes = classMap({
            tag: true,
            [`tag-${this.size}`]: true,
            [`tag-${this.variant}`]: true,
        });

        const closeButton = this.closeable ? html`<button class="btn-close" ${ref(this._closeButtonRef)}></button>` : null;
        return html`<div class="${classes}">${this.children}${closeButton}</div>`;
    }

    protected createRenderRoot(): Element | ShadowRoot {
        return this;
    }
}
