export default {
    title: 'Badges',
};

const Template = () => {
    return `
        <h5>Badges</h5>
        <div class="example space-x-2">
            <span class="badge">Default</span>
            <span class="badge badge-primary">Primary</span>
            <span class="badge badge-red">Red</span>
            <span class="badge badge-green">Green</span>
            <span class="badge badge-yellow">Yellow</span>
            <span class="badge badge-purple">Purple</span>
            <span class="badge badge-teal">Teal</span>
            <span class="badge badge-gray">Gray</span>
        </div>

        <h5>Large</h5>
        <div class="example space-x-2">
            <span class="badge badge-lg">Default</span>
            <span class="badge badge-lg badge-primary">Primary</span>
            <span class="badge badge-lg badge-red">Red</span>
            <span class="badge badge-lg badge-green">Green</span>
            <span class="badge badge-lg badge-yellow">Yellow</span>
            <span class="badge badge-lg badge-purple">Purple</span>
            <span class="badge badge-lg badge-teal">Teal</span>
            <span class="badge badge-lg badge-gray">Gray</span>
        </div>

        <h5>Small</h5>
        <div class="example space-x-2">
            <span class="badge badge-sm">Default</span>
            <span class="badge badge-sm badge-primary">Primary</span>
            <span class="badge badge-sm badge-green">Green</span>
            <span class="badge badge-sm badge-yellow">Yellow</span>
            <span class="badge badge-sm badge-purple">Purple</span>
            <span class="badge badge-sm badge-teal">Teal</span>
            <span class="badge badge-sm badge-gray">Gray</span>
            <span class="badge badge-sm badge-red">Red</span>
        </div>
    `;
};
export const Badges = Template.bind({});
