import { html, LitElement, unsafeCSS } from "lit";
import { classMap } from "lit-html/directives/class-map.js";
import { customElement, property } from "lit/decorators.js";

import style from './styles.css?inline';

export type SpinnerState = 'progress' | 'error' | 'warning' | 'success';
export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SpinnerColor = 'blue' | 'red' | 'yellow' | 'green' | 'purple' | 'teal' | 'gray';
export type SpinnerThickness = 'thin' | 'normal' | 'thick';


@customElement('vs-spinner')
export class Spinner extends LitElement {
    @property() size: SpinnerSize = 'md';
    @property() state: SpinnerState = 'progress';
    @property() color: SpinnerColor = 'gray';
    @property() thickness: SpinnerThickness = 'normal';
    @property({ type: Boolean }) indeterminate: boolean = false;
    @property({ type: Boolean }) indicator: boolean = false;
    @property({ type: Number, reflect: true }) value: number = 0;

    static styles = [unsafeCSS(style)];

    setValue(value: number) {
        this.value = value;
    }

    render() {
        const classes = classMap({
            spinner: true,
            [`spinner-${this.size}`]: true,
            [`spinner-${this.state}`]: true,
            [`spinner-${this.color}`]: true,
            [`spinner-${this.thickness}`]: true,
            [`spinner-indicator`]: this.indicator,
            [`progress-indeterminate`]: this.indeterminate,
        });

        return html`<div class="${classes}" style="--vs-spinner-value: ${this.value}">
    <svg>
        <circle></circle>
        <circle></circle>
    </svg>
</div>`;
    }
}