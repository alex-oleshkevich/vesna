import { Story } from '@storybook/web-components';
import { html } from 'lit';
import { ProgressBarVariant, ProgressBarSize, ProgressBarColor } from './element';
import './index';

export default {
    title: 'Progress bars',
    component: 'vs-progress',
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: { type: 'select' },
        },
        variant: {
            options: ['horizontal', 'vertical'],
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
        color: {
            options: ['blue', 'red', 'yellow', 'green', 'purple', 'teal', 'gray'],
            control: { type: 'select' },
        }
    },
};

interface Props {
    size: ProgressBarSize,
    variant: ProgressBarVariant,
    color: ProgressBarColor,
    value: number,
    indicator: boolean,
    indeterminate: boolean,
}

const defaults = { size: 'md', variant: 'horizontal', value: 42, indicator: false, indeterminate: false, color: 'blue' };


const Template: Story<Partial<Props>> = args => {
    const indicatorPartial = args.indicator ? `${args.value}%` : '';
    return `
    <div class="progress progress-${args.size} progress-${args.color} ${args.indeterminate ? 'progress-indeterminate' : ''}">
        <div class="progress-bar" style="width: ${args.value}%">${indicatorPartial}</div>
    </div>
    `;
};
export const ProgressBar = Template.bind({});
ProgressBar.args = defaults;


const WebComponentTemplate: Story<Partial<Props>> = args => {
    return html`<vs-progress size="${args.size}" variant="${args.variant}" ?indicator="${args.indicator}" .value="${args.value}"
    ?indeterminate="${args.indeterminate}" .color="${args.color}">
</vs-progress>`;
};

export const WebComponent = WebComponentTemplate.bind({});
WebComponent.args = defaults;

