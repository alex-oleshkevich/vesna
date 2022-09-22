export default {
    title: 'Dividers',
};

const Template = () => {
    return `
        <h5>Dividers</h5>
        <div class="example max-w-lg">
            <div>Some content above</div>
            <div class="divider">
                <div class="divider-left" aria-hidden="true">
                    <div class="divider-inner"></div>
                </div>
                <div class="divider-right">
                    <span class="divider-inner">
                        Separator
                    </span>
                </div>
            </div>
            <p>Some content below</p>
        </div>
        <div class="example max-w-lg mt-10">
            <div class="divider">
                <div class="divider-left" aria-hidden="true">
                    <div class="divider-inner"></div>
                </div>
            </div>
        </div>
    `;
};
export const Dividers = Template.bind({});
