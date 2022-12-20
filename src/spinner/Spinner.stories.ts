import { Story } from '@storybook/web-components';
import { html } from 'lit';
import { SpinnerSize, SpinnerState, SpinnerColor } from './element';
import './index';

export default {
    title: 'Spinner',
    component: 'vs-spinner',
    argTypes: {
        size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            control: { type: 'select' },
        },
        color: {
            options: ['blue', 'red', 'yellow', 'green', 'purple', 'teal', 'gray'],
            control: { type: 'select' },
        },
        state: {
            options: ['default', 'error', 'warning', 'success'],
            control: { type: 'select' },
        },
        indicator: {
            control: { type: 'boolean' },
        },
        indeterminate: {
            control: { type: 'boolean' },
        },
        value: {
            control: { type: 'range', min: 0, max: 100 }
        },
    },
};

interface Props {
    size: SpinnerSize,
    state: SpinnerState,
    color: SpinnerColor,
    value: number,
    indicator: boolean,
    indeterminate: boolean,
}

const defaults = { size: 'md', state: 'default', value: 42, indicator: false, indeterminate: false, color: 'gray' };


const Template: Story<Partial<Props>> = args => {
    return `
    <div class="spinner ${args.indicator ? 'spinner-indicator' : ''} ${args.indeterminate ? 'spinner-indeterminate' : ''} spinner-${args.size} spinner-${args.state} spinner-${args.color}" style="--vs-spinner-value: ${args.value}">
        <svg>
            <circle></circle>
            <circle></circle>
        </svg>
    </div>
    `;
};
export const Spinner = Template.bind({});
Spinner.args = defaults;


const WebComponentTemplate: Story<Partial<Props>> = args => {
    return html`<vs-spinner size="${args.size}" state="${args.state}" ?indicator="${args.indicator}" value="${args.value}"
    ?indeterminate="${args.indeterminate}" .color="${args.color}">
</vs-spinner>`;
};

export const WebComponent = WebComponentTemplate.bind({});
WebComponent.args = defaults;

