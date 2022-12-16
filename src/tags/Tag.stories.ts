import { Story } from '@storybook/web-components';
import { TagSize, TagVariant } from './element';
import './index';

export default {
    title: 'Tags',
    component: 'vs-tag',
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: { type: 'select' },
        },
        variant: {
            options: ['filled', 'outline', 'text'],
            control: { type: 'select' },
        },
        addon: {
            options: ['none', 'icon', 'avatar'],
            control: { type: 'radio' }
        },
        closeable: {
            control: { type: 'boolean' },
        },
        onClose: {
            action: 'closed',
        }
    },
    parameters: {
        actions: {
            handles: ['vs-close']
        }
    }
};

interface TagProps {
    size: TagSize,
    variant: TagVariant,
    closeable: boolean,
    addon: 'none' | 'icon' | 'avatar';
}

const Template: Story<Partial<TagProps>> = args => {
    return `<span class="tag tag-${args.size} tag-${args.variant}">Tag</span>`;
};
export const Tag = Template.bind({});
Tag.args = { size: 'md', variant: 'filled' }

const CloseableTemplate: Story<Partial<TagProps>> = args => {
    return `<span class="tag tag-${args.size} tag-${args.variant}">Tag<button class="btn-close"></button></span>`;
};
export const Closeable = CloseableTemplate.bind({});
Closeable.args = { size: 'md', variant: 'filled' }



const folderIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 8C4 7.46957 4.21071 6.96086 4.58579 6.58579C4.96086 6.21071 5.46957 6 6 6H11L13 8H18C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V16C20 16.5304 19.7893 17.0391 19.4142 17.4142C19.0391 17.7893 18.5304 18 18 18H6C5.46957 18 4.96086 17.7893 4.58579 17.4142C4.21071 17.0391 4 16.5304 4 16V8Z" fill="currentColor" />
</svg>`;


const WithIconTemplate: Story<Partial<TagProps>> = args => {
    return `<span class="tag tag-${args.size} tag-${args.variant}">${folderIcon} Tag</span>`;
};
export const WithIcon = WithIconTemplate.bind({});
WithIcon.args = { size: 'md', variant: 'filled' }

const WithIconAndCloseTemplate: Story<Partial<TagProps>> = args => {
    return `<span class="tag tag-${args.size} tag-${args.variant}">${folderIcon} Tag <button class="btn-close"></button></span>`;
};
export const WithIconAndClose = WithIconAndCloseTemplate.bind({});
WithIconAndClose.args = { size: 'md', variant: 'filled' }

const WithPersonTemplate: Story<Partial<TagProps>> = args => {
    return `<div class="tag tag-${args.size} tag-${args.variant}">
        <div class="avatar"><img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"></div> 
        Tag
    </div>`;
};
export const WithPerson = WithPersonTemplate.bind({});
WithIcon.args = { size: 'md', variant: 'filled' }


const WebComponentTemplate: Story<Partial<TagProps>> = args => {
    let addon = '';
    let text = 'Tag';
    if (args.addon == 'icon') {
        addon = folderIcon;
    }
    if (args.addon == 'avatar') {
        text = 'Jane Doe';
        addon = `<div class="avatar"><img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"></div>`
    }
    return `<vs-tag size="${args.size}" variant="${args.variant}" ${args.closeable ? 'closeable' : ''}><div>${addon} ${text}</div></vs-tag>`;
};

export const WebComponent = WebComponentTemplate.bind({});
WebComponent.args = { size: 'md', variant: 'filled', closeable: true, addon: 'none' };

