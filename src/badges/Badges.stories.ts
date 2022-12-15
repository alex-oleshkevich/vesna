import { Story } from '@storybook/web-components';
import './index';
import { BadgeColor, BadgeSize, BadgeVariant } from './element';

export default {
    title: 'Badges',
    component: 'vs-badge',
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: { type: 'select' },
        },
        color: {
            options: ['blue', 'red', 'green', 'yellow', 'purple', 'teal', 'gray'],
            control: { type: 'select' },
        },
        variant: {
            options: ['filled', 'subtle', 'outline'],
            control: { type: 'select' },
        },
        closeable: {
            control: { type: 'boolean' },
        }
    }
};

interface BadgeProps {
    size: BadgeSize,
    color: BadgeColor,
    variant: BadgeVariant,
    closeable: boolean,
}

const BadgeTemplate: Story<Partial<BadgeProps>> = args => {
    return `<div class="badge badge-${args.size} badge-${args.color} badge-${args.variant}">Badge</div>`;
};
export const Badge = BadgeTemplate.bind({});
Badge.args = { size: 'md', variant: 'filled', color: 'blue', closeable: false }


const folderIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 8C4 7.46957 4.21071 6.96086 4.58579 6.58579C4.96086 6.21071 5.46957 6 6 6H11L13 8H18C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V16C20 16.5304 19.7893 17.0391 19.4142 17.4142C19.0391 17.7893 18.5304 18 18 18H6C5.46957 18 4.96086 17.7893 4.58579 17.4142C4.21071 17.0391 4 16.5304 4 16V8Z" fill="currentColor" />
</svg>`;


const WithIconTemplate: Story<Partial<BadgeProps>> = args => {
    return `<div class="badge badge-${args.size} badge-${args.color} badge-${args.variant}">${folderIcon} Badge</div>`;
};

export const WithIcon = WithIconTemplate.bind({});
WithIcon.args = { size: 'md', variant: 'filled', color: 'blue', closeable: false }

const WebComponentTemplate: Story<Partial<BadgeProps>> = args => {
    return `
    <vs-badge color="${args.color}" size="${args.size}" variant="${args.variant}">
        <span>Badge</span>
    </vs-badge>`;
};

export const WebComponent = WebComponentTemplate.bind({});
WebComponent.args = { size: 'md', variant: 'filled', color: 'blue', closeable: false }

