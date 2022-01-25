export default {
    title: 'Close button',
    argTypes: {},
};

const CloseTemplate = () => {
    return `
        <h5>Close button</h5>
        <div class="example space-x-2">
            <button class="close"></button>
        </div>
    `;
};
export const Close = CloseTemplate.bind({});
