import { Story } from '@storybook/web-components';
import { html } from 'lit';
import { AccordionSize, AccordionVariant } from './element';
import './index';

export default {
    title: 'Accordions',
    component: 'vs-accordion',
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: { type: 'select' },
        },
        variant: {
            options: ['filled', 'simple'],
            control: { type: 'select' },
        },
        title: {
            control: { type: 'text' }
        },
        open: {
            control: { type: 'boolean' }
        },
        disabled: {
            control: { type: 'boolean' }
        }
    },
    parameters: {
        actions: {
            handles: ['vs-close', 'vs-open'],
        }
    }
};

interface Props {
    size: AccordionSize,
    variant: AccordionVariant,
    title: string,
    disabled: boolean,
    open: boolean,
}

const Template: Story<Partial<Props>> = args => {
    return `
    <div class="accordion accordion-${args.size} accordion-${args.variant}">
        <button type="button">
            <svg class="accordion-icon" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10.5L8 14.5L12 10.5" stroke="#9AA6AC"/>
            </svg>
            ${args.title}
        </button>
    </div>
    <br />
    <br />
    <div class="accordion accordion-${args.size} accordion-${args.variant} open">
        <button type="button">
            <svg class="accordion-icon" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10.5L8 14.5L12 10.5" stroke="#9AA6AC"/>
            </svg>
            ${args.title}
        </button>
        <main>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id eleifend sapien. 
            Phasellus facilisis metus in sapien feugiat condimentum. Praesent bibendum nulla quam, id aliquet leo posuere et. 
            Mauris varius lobortis porta. Donec vel erat mi. Pellentesque id turpis ut ante porttitor pharetra. 
            Sed quis gravida lorem.
        </main>
    </div>
    <br />
    <br />
    <div class="accordion accordion-${args.size} accordion-${args.variant} open disabled">
        <button type="button">
            <svg class="accordion-icon" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10.5L8 14.5L12 10.5" stroke="#9AA6AC"/>
            </svg>
            ${args.title}
        </button>
        <main>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id eleifend sapien. 
            Phasellus facilisis metus in sapien feugiat condimentum. Praesent bibendum nulla quam, id aliquet leo posuere et. 
            Mauris varius lobortis porta. Donec vel erat mi. Pellentesque id turpis ut ante porttitor pharetra. 
            Sed quis gravida lorem.
        </main>
    </div>
    `;
};
export const Accordion = Template.bind({});
Accordion.args = { size: 'md', variant: 'filled', title: 'Dialog' }


const WebComponentTemplate: Story<Partial<Props>> = args => {
    return html`<vs-accordion size="${args.size}" variant="${args.variant}" heading="${args.title}" ?disabled="${args.disabled}" ?open="${args.open}">
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id eleifend sapien. 
        Phasellus facilisis metus in sapien feugiat condimentum. Praesent bibendum nulla quam, id aliquet leo posuere et. 
        Mauris varius lobortis porta. Donec vel erat mi. Pellentesque id turpis ut ante porttitor pharetra. 
        Sed quis gravida lorem.</span>
    </vs-accordion>`;
};

export const WebComponent = WebComponentTemplate.bind({});
WebComponent.args = { size: 'md', variant: 'simple', title: 'Dialog', disabled: false, open: false };

