import { Story } from '@storybook/web-components';
import { html, svg } from 'lit';
import { BreadcrumbSize, BreadcrumbVariant } from './element';
import './index';

export default {
    title: 'Breadcrumbs',
    component: 'vs-spinner',
    argTypes: {
        size: {
            options: ['sm', 'md'],
            control: { type: 'select' },
        },
        variant: {
            options: ['default', 'section'],
            control: { type: 'select' },
        },
        withIcon: {
            control: { type: 'boolean' },
        },
    },
};

interface Props {
    size: BreadcrumbSize,
    variant: BreadcrumbVariant,
    withIcon: boolean,
}

const defaults = { size: 'md', variant: 'default', withIcon: false };
const icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 8C4 7.46957 4.21071 6.96086 4.58579 6.58579C4.96086 6.21071 5.46957 6 6 6H11L13 8H18C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V16C20 16.5304 19.7893 17.0391 19.4142 17.4142C19.0391 17.7893 18.5304 18 18 18H6C5.46957 18 4.96086 17.7893 4.58579 17.4142C4.21071 17.0391 4 16.5304 4 16V8Z" fill="currentColor" />
</svg>`;

const Template: Story<Partial<Props>> = args => {
    const iconPartial = args.withIcon ? icon : '';
    return html`
    <div class="breadcrumbs breadcrumbs-${args.size} breadcrumbs-${args.variant}">
        <span class="breadcrumbs-item root"></span>
        <a href="#" class="breadcrumbs-item">${iconPartial}src</a>
        <a href="#" class="breadcrumbs-item">${iconPartial}router</a>
        <a href="#" class="breadcrumbs-item active">${iconPartial}index.js</a>
    </div>
    `;
};
export const Breadcrumbs = Template.bind({});
Breadcrumbs.args = defaults;
