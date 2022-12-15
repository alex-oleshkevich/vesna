import { Story } from '@storybook/web-components';
import './index';
import { DotColor } from './index';

export default {
    title: 'Status',
    argTypes: {
        color: {
            control: 'select',
            options: ['green', 'red', 'blue', 'yellow', 'purple', 'teal', 'black', 'white'],
        },
        text: {
        },
    },
};

const Template = () => {
    return `
        <h5>Status</h5>
        <div class="example space-x-2 flex flex-col flex-nowrap">
            <span class="status">
                <span class="dot"></span> 
                Default
            </span>

            <div class="status">
                <span class="dot dot-red"></span>   
                Red
            </div>

            <span class="status">
                <span class="dot dot-yellow"></span>
                Yellow
            </span>

            <span class="status">
                <span class="dot dot-green"></span>
                Green
            </span>

            <span class="status">
                <span class="dot dot-primary"></span>
                Blue
            </span>

            <span class="status">
                <span class="dot dot-purple"></span>
                Purple
            </span>

            <span class="status">
                <span class="dot dot-teal"></span>
                Teal
            </span>

            <span class="status">
                <span class="dot dot-gray"></span>
                Gray
            </span>

            <span class="status">
                <span class="dot dot-black"></span>
                Black
            </span>

            <span class="status">
                <span class="dot dot-white"></span>
                White
            </span>
        </div>
    `;
};
export const TextRight = Template.bind({});

const TextLeftTemplate = () => {
    return `
        <h5>Status, Left text</h5>
        <div class="example space-x-2 flex flex-col flex-nowrap">
            <span class="status">
                Default
                <span class="dot"></span> 
            </span>

            <div class="status">
                Red
                <span class="dot dot-red"></span>   
            </div>

            <span class="status">
                Yellow
                <span class="dot dot-yellow"></span>
            </span>

            <span class="status">
                Green
                <span class="dot dot-green"></span>
            </span>

            <span class="status">
                Blue
                <span class="dot dot-primary"></span>
            </span>

            <span class="status">
                Purple
                <span class="dot dot-purple"></span>
            </span>

            <span class="status">
                Teal
                <span class="dot dot-teal"></span>
            </span>

            <span class="status">
                Gray
                <span class="dot dot-gray"></span>
            </span>

            <span class="status">
                Black
                <span class="dot dot-black"></span>
            </span>

            <span class="status">
                White
                <span class="dot dot-white"></span>
            </span>
        </div>
    `;
};
export const TextLeft = TextLeftTemplate.bind({});

interface StatusArgs {
    color: DotColor,
    text: string,
}

const WebComponentTemplate: Story<Partial<StatusArgs>> = args => {
    return `
        <vs-status color="${args.color}" text="${args.text}"></vs-status>
    `;
};
export const WebComponent = WebComponentTemplate.bind({});
WebComponent.args = {
    color: 'green',
    text: 'Active',
}