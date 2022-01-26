export default {
    title: 'ProgressBar',
};

const Template = () => {
    return `
        <h5>Progress bar</h5>
        <div class="example space-y-3">
            <div class="progress progress-sm">
                <div class="progress-bar" style="width: 42%">42%</div>
            </div>
            <div class="progress">
                <div class="progress-bar" style="width: 42%">42%</div>
            </div>
            <div class="progress progress-lg">
                <div class="progress-bar" style="width: 42%">42%</div>
            </div>
        </div>
    `;
};
export const ProgressBar = Template.bind({});

const StripedTemplate = () => {
    return `
        <h5>Striped progress bar</h5>
        <div class="example space-y-3">
            <div class="progress progress-sm striped">
                <div class="progress-bar" style="width: 42%">42%</div>
            </div>
            <div class="progress striped">
                <div class="progress-bar" style="width: 42%">42%</div>
            </div>
            <div class="progress progress-lg striped">
                <div class="progress-bar" style="width: 42%">42%</div>
            </div>
        </div>
    `;
};
export const Striped = StripedTemplate.bind({});

const NativeTemplate = () => {
    return `
        <h5>Striped progress bar</h5>
        <div class="example space-y-3">
            <progress min="0" max="100" value="42" class="progress-sm"></progress>
            <progress min="0" max="100" value="42"></progress>
            <progress min="0" max="100" value="42" class="progress-lg"></progress>
        </div>
    `;
};
export const Native = NativeTemplate.bind({});
