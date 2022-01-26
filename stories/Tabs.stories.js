const { LOREM } = require('./helpers/lorem');
const { ICON_WARNING } = require('../src/icons');

export default {
    title: 'Tabs',
};

const Template = () => {
    return `
        <h5>Modal</h5>
        <div class="example space-x-2">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a href="javascript:void(0)" class="nav-link active">Tab 1</a>
                </li>
                <li class="nav-item">
                    <a href="javascript:void(0)" class="nav-link">Tab 2</a>
                </li>
                <li class="nav-item">
                    <a href="javascript:void(0)" class="nav-link">Tab 3</a>
                </li>
            </ul>
        </div>
    `;
};
export const Tabs = Template.bind({});
