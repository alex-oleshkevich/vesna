export default {
    title: 'Dots',
};

const Template = () => {
    return `
        <h5>Dots</h5>
        <div class="example space-x-2">
            <span class="dot"></span>
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
            <span class="dot dot-primary"></span>
            <span class="dot dot-purple"></span>
            <span class="dot dot-teal"></span>
            <span class="dot dot-gray"></span>
            <span class="dot dot-black"></span>
            <span class="dot dot-white"></span>
        </div>
    `;
};
export const Dots = Template.bind({});
