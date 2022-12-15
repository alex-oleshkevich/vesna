const { ICON_WARNING } = require('../src/icons');

export default {
    title: 'Forms Inputs',
};

const Template = () => {
    return `
        <h5>Inputs</h5>
        <div class="example space-x-2">
            <div class="form-group">
                <label class="form-label">Small</label>
                <input type="text" class="form-control form-control-sm" placeholder="Enter value...">
            </div>
            <div class="form-group">
                <label class="form-label">Default</label>
                <input type="text" class="form-control" placeholder="Enter value...">
            </div>
            <div class="form-group">
                <label class="form-label">Large</label>
                <input type="text" class="form-control form-control-lg" placeholder="Enter value...">
            </div>

            <div class="form-group">
                <label class="form-label">Disabled</label>
                <input type="text" class="form-control" disabled placeholder="Enter value...">
            </div>

            <div class="form-group">
                <label class="form-label">Read-only</label>
                <input type="text" class="form-control" readonly placeholder="Enter value...">
            </div>
        </div>

        <h5>Selects</h5>
        <div class="example space-x-2">
            <div class="form-group">
                <label class="form-label">Small</label>
                <select class="form-control form-control-sm">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Default</label>
                <select class="form-control form-control">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Large</label>
                <select class="form-control form-control-lg">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
            </div>

            <div class="form-group">
                <label class="form-label">Disabled</label>
                <select class="form-control" disabled>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
            </div>

            <div class="form-group">
                <label class="form-label">Multiple</label>
                <select class="form-control" multiple>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
            </div>
        </div>

        <h5>Textarea</h5>
        <div class="example space-x-2">
            <div class="form-group">
                <label class="form-label">Small</label>
                <textarea class="form-control form-control-sm"></textarea>
            </div>
            <div class="form-group">
                <label class="form-label">Default</label>
                <textarea class="form-control"></textarea>
            </div>
            <div class="form-group">
                <label class="form-label">Large</label>
                <textarea class="form-control form-control-lg"></textarea>
            </div>

            <div class="form-group">
                <label class="form-label">Disabled</label>
                <textarea class="form-control" disabled></textarea>
            </div>

        </div>
    `;
};
export const Inputs = Template.bind({});

const WithLeftAddonTemplate = () => {
    return `
        <h5>Inputs</h5>
        <div class="example space-x-2 max-w-lg">
            <div class="form-group">
                <label class="form-label">Small</label>
                <div class="input-group">
                    <div class="input-addon">
                        ${ICON_WARNING}
                    </div>
                    <input type="text" class="form-control" placeholder="Enter value...">
                </div>
            </div>
        </div>
    `;
};
export const WithLeftAddon = WithLeftAddonTemplate.bind({});

const WithRightAddonTemplate = () => {
    return `
        <h5>Inputs</h5>
        <div class="example space-x-2 max-w-lg">
            <div class="form-group">
                <label class="form-label">Input group</label>
                <div class="input-group input-group-right">
                    <input type="text" class="form-control" placeholder="Enter value...">
                    <div class="input-addon">
                        ${ICON_WARNING}
                    </div>
                </div>
            </div>
        </div>
    `;
};
export const WithRightAddon = WithRightAddonTemplate.bind({});

const WithHelpTextTemplate = () => {
    return `
        <h5>Inputs</h5>
        <div class="example space-x-2">
            <div class="form-group">
                <label class="form-label">Default</label>
                <input type="text" class="form-control" placeholder="Enter value...">
                <div class="form-help">This is a help text.</div>
            </div>
        </div>
    `;
};
export const WithHelpText = WithHelpTextTemplate.bind({});

const WithErrorsTemplate = () => {
    return `
        <h5>Inputs</h5>
        <div class="example space-x-2">
            <div class="form-group">
                <label class="form-label">Default</label>
                <input type="text" class="form-control" placeholder="Enter value...">
                <ul class="form-errors">
                    <li>This is error one.</li>
                    <li>This is error two.</li>
                </ul>
            </div>
        </div>
    `;
};
export const WithErrors = WithErrorsTemplate.bind({});

const CheckboxesTemplate = () => {
    return `
        <h5>Checkboxes</h5>
        <div class="example space-y-2">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" value="" id="check">
                <label class="form-check-label" for="check">Default checkbox</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" value="" id="check2" checked>
                <label class="form-check-label" for="check2">Checked checkbox</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" value="" id="check3" disabled>
                <label class="form-check-label" for="check3">Disabled checkbox</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" value="" id="check4" disabled checked>
                <label class="form-check-label" for="check4">Disabled checked checkbox</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" value="" id="check5" ref="indeterminate">
                <label class="form-check-label" for="check5">Indeterminate checkbox</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" value="" id="check6" disabled ref="indeterminate">
                <label class="form-check-label" for="check6">Indeterminate disabled checkbox</label>
            </div>
        </div>

        <h5>Sizes</h5>
        <div class="example space-y-2">
            <div class="form-check">
                <input type="checkbox" class="form-check-input form-control-sm" value="" id="check10">
                <label class="form-check-label" for="check10">Small checkbox</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" value="" id="check11">
                <label class="form-check-label" for="check11">Default checkbox</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input form-control-lg" value="" id="check12">
                <label class="form-check-label" for="check12">Large checkbox</label>
            </div>
        </div>

        <h5>Inline</h5>
        <div class="example space-y-2">
            <div class="form-check form-check-inline">
                <input type="checkbox" class="form-check-input" value="" id="check20">
                <label class="form-check-label" for="check20">One</label>
            </div>
            <div class="form-check form-check-inline">
                <input type="checkbox" class="form-check-input" value="" id="check21">
                <label class="form-check-label" for="check21">Two</label>
            </div>
            <div class="form-check form-check-inline">
                <input type="checkbox" class="form-check-input" value="" id="check22">
                <label class="form-check-label" for="check22">Three</label>
            </div>
        </div>
    `;
};
export const Checkboxes = CheckboxesTemplate.bind({});

const RadioTemplate = () => {
    return `
        <h5>Radio buttons</h5>
        <div class="example space-y-2">
            <div class="form-check">
                <input type="radio" class="form-check-input" value="" id="check">
                <label class="form-check-label" for="check">Default radio</label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" value="" id="check2" checked>
                <label class="form-check-label" for="check2">Checked radio</label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" value="" id="check3" disabled>
                <label class="form-check-label" for="check3">Disabled radio</label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" value="" id="check4" disabled checked>
                <label class="form-check-label" for="check4">Disabled checked radio</label>
            </div>
        </div>

        <h5>Sizes</h5>
        <div class="example space-y-2">
            <div class="form-check">
                <input type="radio" class="form-check-input form-control-sm" value="" id="check10">
                <label class="form-check-label" for="check10">Small radio</label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" value="" id="check11">
                <label class="form-check-label" for="check11">Default radio</label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input form-control-lg" value="" id="check12">
                <label class="form-check-label" for="check12">Large radio</label>
            </div>
        </div>


        <h5>Inline</h5>
        <div class="example space-y-2">
            <div class="form-check form-check-inline">
                <input type="radio" name="radio" class="form-check-input" value="" id="check20">
                <label class="form-check-label" for="check20">One</label>
            </div>
            <div class="form-check form-check-inline">
                <input type="radio" name="radio" class="form-check-input" value="" id="check21">
                <label class="form-check-label" for="check21">Two</label>
            </div>
            <div class="form-check form-check-inline">
                <input type="radio" name="radio" class="form-check-input" value="" id="check22">
                <label class="form-check-label" for="check22">Three</label>
            </div>
        </div>
    `;
};
export const Radio = RadioTemplate.bind({});

const SwitchTemplate = () => {
    return `
        <h5>Switches</h5>
        <div class="example space-y-2">
            <div class="form-check form-switch">
                <input type="checkbox" class="form-check-input" value="" id="check">
                <label class="form-check-label" for="check">Default switch</label>
            </div>
            <div class="form-check form-switch">
                <input type="checkbox" class="form-check-input" value="" id="check2" checked>
                <label class="form-check-label" for="check2">Checked switch</label>
            </div>
            <div class="form-check form-switch">
                <input type="checkbox" class="form-check-input" value="" id="check3" disabled>
                <label class="form-check-label" for="check3">Disabled switch</label>
            </div>
            <div class="form-check form-switch">
                <input type="checkbox" class="form-check-input" value="" id="check4" disabled checked>
                <label class="form-check-label" for="check4">Disabled checked switch</label>
            </div>
        </div>

        <h5>Sizes</h5>
        <div class="example space-y-2">
            <div class="form-check form-switch">
                <input type="checkbox" class="form-check-input form-control-sm" value="" id="check10">
                <label class="form-check-label" for="check10">Small switch</label>
            </div>
            <div class="form-check form-switch">
                <input type="checkbox" class="form-check-input" value="" id="check11">
                <label class="form-check-label" for="check11">Default switch</label>
            </div>
            <div class="form-check form-switch">
                <input type="checkbox" class="form-check-input form-control-lg" value="" id="check12">
                <label class="form-check-label" for="check12">Large switch</label>
            </div>
        </div>
    `;
};
export const Switch = SwitchTemplate.bind({});
