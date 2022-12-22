import { Story } from '@storybook/web-components';
import { html, svg } from 'lit';
import { CalloutColor } from './element';
import { classMap } from 'lit/directives/class-map.js';
import './index';

export default {
    title: 'Callouts',
    component: 'vs-callout',
    argTypes: {
        color: {
            options: ['white', 'gray', 'black', 'gradient'] as CalloutColor[],
            control: { type: 'select' },
        },
        withIcon: {
            control: { type: 'boolean' },
        },
        withHeaderActions: {
            control: { type: 'boolean' },
        },
        withBody: {
            control: { type: 'boolean' },
        },
        withFooterActions: {
            control: { type: 'boolean' },
        },
    },
    parameters: {
        actions: {
            handles: ['vs-close']
        }
    }
};

interface Props {
    color: CalloutColor,
    withIcon: boolean,
    withHeaderActions: boolean,
    withBody: boolean,
    withFooterActions: boolean,
}

const defaults: Props = { color: 'white', withIcon: false, withFooterActions: true, withHeaderActions: false, withBody: true };
const icon = svg`
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V2C7 2.26522 7.10536 2.51957 7.29289 2.70711C7.48043 2.89464 7.73478 3 8 3C8.26522 3 8.51957 2.89464 8.70711 2.70711C8.89464 2.51957 9 2.26522 9 2V1ZM13.657 3.757C13.8392 3.5684 13.94 3.3158 13.9377 3.0536C13.9354 2.7914 13.8302 2.54059 13.6448 2.35518C13.4594 2.16977 13.2086 2.0646 12.9464 2.06233C12.6842 2.06005 12.4316 2.16084 12.243 2.343L11.536 3.05C11.3538 3.2386 11.253 3.4912 11.2553 3.7534C11.2576 4.0156 11.3628 4.26641 11.5482 4.45182C11.7336 4.63723 11.9844 4.7424 12.2466 4.74467C12.5088 4.74695 12.7614 4.64616 12.95 4.464L13.657 3.757ZM16 8C16 8.26522 15.8946 8.51957 15.7071 8.70711C15.5196 8.89464 15.2652 9 15 9H14C13.7348 9 13.4804 8.89464 13.2929 8.70711C13.1054 8.51957 13 8.26522 13 8C13 7.73478 13.1054 7.48043 13.2929 7.29289C13.4804 7.10536 13.7348 7 14 7H15C15.2652 7 15.5196 7.10536 15.7071 7.29289C15.8946 7.48043 16 7.73478 16 8ZM3.05 4.464C3.14225 4.55951 3.25259 4.63569 3.3746 4.6881C3.4966 4.74051 3.62782 4.7681 3.7606 4.76925C3.89338 4.7704 4.02506 4.7451 4.14795 4.69482C4.27085 4.64454 4.3825 4.57029 4.4764 4.4764C4.57029 4.3825 4.64454 4.27085 4.69482 4.14795C4.7451 4.02506 4.7704 3.89338 4.76925 3.7606C4.7681 3.62782 4.74051 3.4966 4.6881 3.3746C4.63569 3.25259 4.55951 3.14225 4.464 3.05L3.757 2.343C3.5684 2.16084 3.3158 2.06005 3.0536 2.06233C2.7914 2.0646 2.54059 2.16977 2.35518 2.35518C2.16977 2.54059 2.0646 2.7914 2.06233 3.0536C2.06005 3.3158 2.16084 3.5684 2.343 3.757L3.05 4.464ZM3 8C3 8.26522 2.89464 8.51957 2.70711 8.70711C2.51957 8.89464 2.26522 9 2 9H1C0.734784 9 0.48043 8.89464 0.292893 8.70711C0.105357 8.51957 0 8.26522 0 8C0 7.73478 0.105357 7.48043 0.292893 7.29289C0.48043 7.10536 0.734784 7 1 7H2C2.26522 7 2.51957 7.10536 2.70711 7.29289C2.89464 7.48043 3 7.73478 3 8ZM6 14V13H10V14C10 14.5304 9.78929 15.0391 9.41421 15.4142C9.03914 15.7893 8.53043 16 8 16C7.46957 16 6.96086 15.7893 6.58579 15.4142C6.21071 15.0391 6 14.5304 6 14ZM10 12C10.015 11.66 10.208 11.354 10.477 11.141C11.1297 10.6263 11.6058 9.92097 11.8391 9.12316C12.0725 8.32535 12.0515 7.47466 11.7791 6.68933C11.5067 5.904 10.9964 5.22304 10.3191 4.74112C9.64182 4.25919 8.83124 4.00022 8 4.00022C7.16876 4.00022 6.35818 4.25919 5.6809 4.74112C5.00363 5.22304 4.49332 5.904 4.22091 6.68933C3.94849 7.47466 3.9275 8.32535 4.16086 9.12316C4.39421 9.92097 4.87032 10.6263 5.523 11.141C5.793 11.354 5.985 11.66 5.999 12H10.001H10Z" fill="#B0BABF"/>
</svg>
`;

const Template: Story<Partial<Props>> = args => {
    const iconPartial = args.withIcon ? html`<div class="icon">${icon}</div>` : '';
    const headerActionsPartial = args.withHeaderActions ? html`
    <div class="actions">
        <button class="btn btn-accent">Action</button>
        <button class="btn">Cancel</button>
    </div>` : '';
    const bodyPartial = args.withBody ? html`
            <main>
                Let's just say this; ideally, it doesn't have a lot of text. But, if you really need a lot of text, it will
                look like this.
            </main>
    ` : '';
    const footerActionsPartial = args.withFooterActions ? html`
            <footer>
                <div class="actions">
                    <button class="btn btn-accent">Action</button>
                    <button class="btn">Cancel</button>
                </div>
            </footer>
    ` : '';

    const classes = classMap({
        'callout': true,
        'callout-icon': args.withIcon ?? false,
        [`callout-${args.color}`]: true,
    });
    return html`
    <div class="${classes}">
        <header>
            ${iconPartial}
            <span>Short descriptive message</span>
            ${headerActionsPartial}
            <button class="btn-close ml-4"></button>
        </header>
        ${bodyPartial}
        ${footerActionsPartial}
    </div>
    `;
};
export const Callouts = Template.bind({});
Callouts.args = defaults;


const WebComponentTemplate: Story<Partial<Props>> = args => {
    const iconPartial = args.withIcon ? html`<span slot="icon">${icon}</div>` : '';
    const headerActionsPartial = args.withHeaderActions ? html`
    <div slot="header-actions">
        <button class="btn btn-accent">Action</button>
        <button class="btn">Cancel</button>
    </div>` : '';
    const bodyPartial = args.withBody ? html`
            <p>
                Let's just say this; ideally, it doesn't have a lot of text.
                But, if you really need a lot of text, it will look like this.
            </p>
    ` : '';
    const footerActionsPartial = args.withFooterActions ? html`
            <div slot="footer" class="actions">
                <button class="btn btn-accent">Action</button>
                <button class="btn">Cancel</button>
            </div>
    ` : '';

    return html`
    <vs-callout color="${args.color}" ?icon="${args.withIcon}">
        <span slot="header">Short descriptive message</span>
        ${bodyPartial}
        ${headerActionsPartial}
        ${iconPartial}
        ${footerActionsPartial}
    </vs-callout>
    `;
};
export const WebComponent = WebComponentTemplate.bind({});
WebComponent.args = defaults;
