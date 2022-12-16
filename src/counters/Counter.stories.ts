import { Story } from '@storybook/web-components';
import { CounterSize, CounterVariant } from './element';
import './index';

export default {
    title: 'Counters',
    component: 'vs-counter',
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: { type: 'select' },
        },
        variant: {
            options: ['filled', 'subtle', 'outline'],
            control: { type: 'select' },
        },

    },
};

interface CounterProps {
    size: CounterSize,
    variant: CounterVariant,
}

const CounterTemplate: Story<Partial<CounterProps>> = args => {
    return `<span class="counter counter-${args.size} counter-${args.variant}">42</span>`;
};
export const Counter = CounterTemplate.bind({});
Counter.args = { size: 'md', variant: 'filled' }


const WebComponentTemplate: Story<Partial<CounterProps>> = args => {
    return `
    <vs-counter size="${args.size}" variant="${args.variant}">
        <span>42</span>
    </vs-badge>`;
};

export const WebComponent = WebComponentTemplate.bind({});
WebComponent.args = { size: 'md', variant: 'filled' };

