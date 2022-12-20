import { html, LitElement, unsafeCSS } from "lit";
import { classMap } from "lit-html/directives/class-map.js";
import { styleMap } from "lit-html/directives/style-map.js";
import { customElement, property } from "lit/decorators.js";

import style from './styles.css?inline';

export type ProgressBarVariant = 'horizontal' | 'vertical';
export type ProgressBarSize = 'sm' | 'md' | 'lg';
export type ProgressBarColor = 'blue' | 'red' | 'yellow' | 'green' | 'purple' | 'teal' | 'gray';


@customElement('vs-progress')
export class ProgressBar extends LitElement {
    @property() size: ProgressBarSize = 'md';
    @property() variant: ProgressBarVariant = 'horizontal';
    @property() color: ProgressBarColor = 'blue';
    @property({ type: Boolean }) indeterminate: boolean = false;
    @property({ type: Boolean }) indicator: boolean = false;
    @property({ type: Number, reflect: true }) value: number = 0;

    static styles = [unsafeCSS(style)];

    setValue(value: number) {
        this.value = value;
    }

    render() {
        const classes = classMap({
            progress: true,
            [`progress-${this.size}`]: true,
            [`progress-${this.variant}`]: true,
            [`progress-${this.color}`]: true,
            [`progress-indeterminate`]: this.indeterminate,
        });
        const styles = styleMap({
            width: `${this.value}%`,
        });

        const valueDisplay = this.indicator && !this.indeterminate && this.size == 'lg' ? html`${this.value}%` : null;
        return html`
        <div class="${classes}">
            <div class="progress-bar" style="${styles}">${valueDisplay}</div>
        </div>`;
    }
}