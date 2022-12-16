import { html, LitElement, PropertyValues } from "lit";
import { classMap } from "lit-html/directives/class-map.js";
import { Ref, createRef, ref } from "lit-html/directives/ref.js";
import { customElement, property } from "lit/decorators.js";

export type BadgeSize = 'sm' | 'md' | 'lg';
export type BadgeColor = 'blue' | 'red' | 'yellow' | 'green' | 'purple' | 'teal' | 'gray';
export type BadgeVariant = 'filled' | 'subtle' | 'outline';

@customElement('vs-badge')
export class Badge extends LitElement {
    @property() size: BadgeSize = 'md';
    @property() color: BadgeColor = 'gray';
    @property() variant: BadgeVariant = 'filled';
    @property() closeable: boolean = false;

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
            badge: true,
            [`badge-${this.size}`]: true,
            [`badge-${this.color}`]: true,
            [`badge-${this.variant}`]: true,
        });
        const closeButton = (
            this.closeable ? html`<button class="btn-close" ${ref(this._closeButtonRef)}></button>` : null
        );
        return html`<span class="${classes}">${this.children}${closeButton}</span>`;
    }

    protected createRenderRoot(): Element | ShadowRoot {
        return this;
    }
}
