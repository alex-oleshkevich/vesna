const { LOREM } = require('./helpers/lorem');
const { ICON_WARNING } = require('../src/icons');

export default {
    title: 'Modals',
};

const Template = () => {
    return `
        <h5>Modal</h5>
        <div class="example space-x-2">
            <div class="modal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-header">
                        <div class="h4">Modal title</div>
                        <button class="close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Save changes</button>
                        <button type="button" class="btn">Close</button>
                    </div>
                </div>
            </div>
        </div>
    `;
};
export const Modals = Template.bind({});

const ScrollableBodyTemplate = () => {
    return `
        <h5>Modal</h5>
        <div class="example space-x-2">
            <div class="modal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-header">
                        <div class="h4">Modal title</div>
                        <button class="close"></button>
                    </div>
                    <div class="modal-body">
                        <p>${LOREM}</p>
                        <p>${LOREM}</p>
                        <p>${LOREM}</p>
                        <p>${LOREM}</p>
                        <p>${LOREM}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Save changes</button>
                        <button type="button" class="btn">Close</button>
                    </div>
                </div>
            </div>
        </div>
    `;
};
export const ScrollableBody = ScrollableBodyTemplate.bind({});

const SemanticTemplate = () => {
    return `
        <h5>Modal</h5>
        <div class="example space-x-2">
            <div class="modal" tabindex="-1">
                <div class="modal-dialog">
                    <header>
                        <div class="h4">Modal title</div>
                        <button class="close"></button>
                    </header>
                    <main>
                        <p>This modal uses HTML elements instead of CSS classes.</p>
                    </main>
                    <footer>
                        <button type="button" class="btn btn-primary">Save changes</button>
                        <button type="button" class="btn">Close</button>
                    </footer>
                </div>
            </div>
        </div>
    `;
};
export const Semantic = SemanticTemplate.bind({});

const ConfirmationDialogTemplate = () => {
    return `
        <h5>Modal</h5>
        <div class="example space-x-2">
            <div class="modal modal-confirmation" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <header>
                            Modal title
                        </header>
                        <main>
                            <p>
                                Are you sure you want to deactivate your account? 
                                All of your data will be permanently removed from our servers forever. 
                                This action cannot be undone.
                            </p>
                        </main>
                        <footer>
                            <button type="button" class="btn btn-danger">Deactivate</button>
                            <button type="button" class="btn">Close</button>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    `;
};
export const ConfirmationDialog = ConfirmationDialogTemplate.bind({});

const SmallTemplate = () => {
    return `
        <h5>Modal</h5>
        <div class="example space-x-2">
            <div class="modal modal-sm" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-header">
                        <div class="h4">Modal title</div>
                        <button class="close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Save changes</button>
                        <button type="button" class="btn">Close</button>
                    </div>
                </div>
            </div>
        </div>
    `;
};
export const Small = SmallTemplate.bind({});

const LargeTemplate = () => {
    return `
        <h5>Modal</h5>
        <div class="example space-x-2">
            <div class="modal modal-lg" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-header">
                        <div class="h4">Modal title</div>
                        <button class="close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Save changes</button>
                        <button type="button" class="btn">Close</button>
                    </div>
                </div>
            </div>
        </div>
    `;
};
export const Large = LargeTemplate.bind({});

const XLargeTemplate = () => {
    return `
        <h5>Modal</h5>
        <div class="example space-x-2">
            <div class="modal modal-xl" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-header">
                        <div class="h4">Modal title</div>
                        <button class="close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Save changes</button>
                        <button type="button" class="btn">Close</button>
                    </div>
                </div>
            </div>
        </div>
    `;
};
export const XLarge = XLargeTemplate.bind({});

const WithErrorsBlockTemplate = () => {
    return `
        <h5>Modal</h5>
        <div class="example space-x-2">
            <div class="modal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-header">
                        <div class="h4">Modal title</div>
                        <button class="close"></button>
                    </div>
                    <div class="modal-errors">Hey, something went wrong :(</div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Save changes</button>
                        <button type="button" class="btn">Close</button>
                    </div>
                </div>
            </div>
        </div>
    `;
};
export const WithErrorsBlock = WithErrorsBlockTemplate.bind({});
