import { css, html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonColor = 'primary' | 'accent' | 'danger' | 'success' | 'warning' | 'text';
export type ButtonVariant = 'default' | 'icon';

import style from './close_button.css?inline';

const extraStyle = css`
:host {
    height: 24px;
    width: 24px;
}
`

@customElement('vs-close-button')
export class CloseButton extends LitElement {
    @property({ type: Boolean, reflect: true }) disabled: boolean = false;


    render() {
        return html`<button class="btn-close" ?disabled="${this.disabled}"></button>`;
    }

    static styles = [unsafeCSS(style), extraStyle];
}