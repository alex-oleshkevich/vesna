export default {
    title: 'Counter',
};

const Template = () => {
    return `
        <h5>Counter</h5>
        <div class="example space-x-2">
            <span class="counter counter-sm">42</span>
            <span class="counter">42</span>
            <span class="counter counter-lg">42</span>
        </div>

        <h5>Filled counter</h5>
        <div class="example space-x-2">
            <span class="counter counter-filled counter-sm">42</span>
            <span class="counter counter-filled">42</span>
            <span class="counter counter-filled counter-lg">42</span>
        </div>

        <h5>Subtle counter</h5>
        <div class="example space-x-2">
            <span class="counter counter-subtle counter-sm">42</span>
            <span class="counter counter-subtle">42</span>
            <span class="counter counter-subtle counter-lg">42</span>
        </div>

        <h5>Outline counter</h5>
        <div class="example space-x-2">
            <span class="counter counter-outline counter-sm">42</span>
            <span class="counter counter-outline">42</span>
            <span class="counter counter-outline counter-lg">42</span>
        </div>
    `;
};
export const Counter = Template.bind({});
