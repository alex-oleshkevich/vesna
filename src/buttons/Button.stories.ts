import { Story } from '@storybook/web-components';
import { html, svg } from 'lit';
import { classMap } from 'lit-html/directives/class-map.js';
import { ButtonColor, ButtonSize, ButtonVariant } from './element';

export default {
    title: 'Buttons',
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: { type: 'select' },
        },
        color: {
            options: ['default', 'accent', 'primary', 'danger', 'warning', 'success', 'text'],
            control: { type: 'select' },
        },
        variant: {
            options: ['default', 'icon'],
            control: { type: 'select' },
        },
        disabled: {
            control: { type: 'boolean' }
        },
        withLeftIcon: {
            control: { type: 'boolean' }
        },
        label: {},
    },
};

interface Props {
    size: ButtonSize,
    color: ButtonColor,
    variant: ButtonVariant,
    disabled: boolean,
    withLeftIcon: boolean,
    label: string,
}

const defaults = { size: 'md', color: 'default', variant: 'default', disabled: false, withLeftIcon: false, label: 'Button' };

const icon = svg`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
</svg>`;


const ButtonTemplate: Story<Partial<Props>> = args => {
    const classes = classMap({
        btn: true,
        [`btn-${args.size}`]: true,
        [`btn-${args.color}`]: true,
        [`btn-${args.variant}`]: true,
    });
    const iconPartial = args.withLeftIcon ? icon : '';
    return html`<button class="${classes}" ?disabled="${args.disabled}">${iconPartial} ${args.label}</button>`;
};
export const Button = ButtonTemplate.bind({});
Button.args = defaults;


const ButtonGroupTemplate: Story<Partial<Props>> = args => {
    const classes = classMap({
        btn: true,
        [`btn-${args.size}`]: true,
        [`btn-${args.color}`]: true,
        [`btn-${args.variant}`]: true,
    });
    const iconPartial = args.withLeftIcon ? icon : '';
    const button = html`<button class="${classes}" ?disabled="${args.disabled}">${iconPartial} ${args.label}</button>`;

    return html`
        <h5>Button group</h5>
        <div class="example space-x-2">
            <div class="btn-group">${button} ${button} ${button}</div>
            <div class="btn-group">${button} ${button} ${button}</div>
        </div>
        `;
};
export const ButtonGroup = ButtonGroupTemplate.bind({});
ButtonGroup.args = defaults;

const CloseButtonTemplate: Story<Partial<Props>> = args => {
    return html`<button class="btn-close" ?disabled="${args.disabled}"></button>`;
};

export const CloseButton = CloseButtonTemplate.bind({});
CloseButton.args = { disabled: false }
