export default {
    title: 'Buttons',
    argTypes: {},
};

const icon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
</svg>`;

const StandardTemplate = () => {
    return `
        <h5>Default</h5>
        <div class="example space-x-2">
            <button class="btn btn-sm">Small</button>
            <button class="btn">Default</button>
            <button class="btn btn-lg">Large</button>
            <button class="btn" disabled>Disabled</button>
        </div>

        <h5>Primary</h5>
        <div class="example space-x-2">
            <button class="btn btn-sm btn-primary">Small</button>
            <button class="btn btn-primary">Default</button>
            <button class="btn btn-lg btn-primary">Large</button>
            <button class="btn btn-primary" disabled>Disabled</button>
        </div>

        <h5>Danger</h5>
        <div class="example space-x-2">
            <button class="btn btn-sm btn-danger">Small</button>
            <button class="btn btn-danger">Default</button>
            <button class="btn btn-lg btn-danger">Large</button>
            <button class="btn btn-danger" disabled>Disabled</button>
        </div>

        <h5>Success</h5>
        <div class="example space-x-2">
            <button class="btn btn-sm btn-success">Small</button>
            <button class="btn btn-success">Default</button>
            <button class="btn btn-lg btn-success">Large</button>
            <button class="btn btn-success" disabled>Disabled</button>
        </div>

        <h5>Warning</h5>
        <div class="example space-x-2">
            <button class="btn btn-sm btn-warning">Small</button>
            <button class="btn btn-warning">Default</button>
            <button class="btn btn-lg btn-warning">Large</button>
            <button class="btn btn-warning" disabled>Disabled</button>
        </div>

        <h5>Text</h5>
        <div class="example space-x-2">
            <button class="btn btn-sm btn-text">Small</button>
            <button class="btn btn-text">Default</button>
            <button class="btn btn-lg btn-text">Large</button>
            <button class="btn btn-text" disabled>Disabled</button>
        </div>

        <h5>Text (danger)</h5>
        <div class="example space-x-2">
            <button class="btn btn-sm btn-text btn-danger">Small</button>
            <button class="btn btn-text btn-danger">Default</button>
            <button class="btn btn-lg btn-text btn-danger">Large</button>
            <button class="btn btn-text" disabled btn-danger>Disabled</button>
        </div>
        `;
};
export const Standard = StandardTemplate.bind({});
Standard.args = {};

const WithIconTemplate = () => {
    return `
        <h5>Default</h5>
        <div class="example space-x-2">
            <button class="btn">${icon} Default</button>
            <button class="btn" disabled>${icon} Disabled</button>
            <button class="btn btn-sm">${icon} Small</button>
            <button class="btn btn-lg">${icon} Large</button>
        </div>

        <h5>Primary</h5>
        <div class="example space-x-2">
            <button class="btn btn-primary">${icon} Default</button>
            <button class="btn btn-primary" disabled>${icon} Disabled</button>
            <button class="btn btn-sm btn-primary">${icon} Small</button>
            <button class="btn btn-lg btn-primary">${icon} Large</button>
        </div>

        <h5>Danger</h5>
        <div class="example space-x-2">
            <button class="btn btn-danger">${icon} Default</button>
            <button class="btn btn-danger" disabled>${icon} Disabled</button>
            <button class="btn btn-sm btn-danger">${icon} Small</button>
            <button class="btn btn-lg btn-danger">${icon} Large</button>
        </div>

        <h5>Success</h5>
        <div class="example space-x-2">
            <button class="btn btn-success">${icon} Default</button>
            <button class="btn btn-success" disabled>${icon} Disabled</button>
            <button class="btn btn-sm btn-success">${icon} Small</button>
            <button class="btn btn-lg btn-success">${icon} Large</button>
        </div>

        <h5>Warning</h5>
        <div class="example space-x-2">
            <button class="btn btn-warning">${icon} Default</button>
            <button class="btn btn-warning" disabled>${icon} Disabled</button>
            <button class="btn btn-sm btn-warning">${icon} Small</button>
            <button class="btn btn-lg btn-warning">${icon} Large</button>
        </div>

        <h5>Text</h5>
        <div class="example space-x-2">
            <button class="btn btn-text">${icon} Default</button>
            <button class="btn btn-text" disabled>${icon} Disabled</button>
            <button class="btn btn-sm btn-text">${icon} Small</button>
            <button class="btn btn-lg btn-text">${icon} Large</button>
        </div>
        `;
};
export const WithIcon = WithIconTemplate.bind({});

const IconOnlyTemplate = () => {
    return `
        <h5>Default</h5>
        <div class="example space-x-2">
            <button class="btn btn-sm btn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
            </button>
            <button class="btn btn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>    
            </button>
            <button class="btn btn-lg btn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
            </button>
            <button class="btn btn-icon" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
            </button>
        </div>

        <h5>Danger</h5>
        <div class="example space-x-2">
            <button class="btn btn-sm btn-icon btn-danger">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
            </button>
            <button class="btn btn-icon btn-danger">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>    
            </button>
            <button class="btn btn-lg btn-icon btn-danger">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
            </button>
            <button class="btn btn-icon btn-danger" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
            </button>
        </div>
        `;
};
export const IconOnly = IconOnlyTemplate.bind({});

const DropdownTemplate = () => {
    return `
        <h5>Default</h5>
        <div class="example space-x-2">
            <button class="btn btn-dropdown">Default</button>
            <button class="btn btn-dropdown" disabled>Disabled</button>
            <button class="btn btn-sm btn-dropdown">Small</button>
            <button class="btn btn-lg btn-dropdown">Large</button>
        </div>

        <h5>Primary</h5>
        <div class="example space-x-2">
            <button class="btn btn-primary btn-dropdown">Default</button>
            <button class="btn btn-primary btn-dropdown" disabled>Disabled</button>
            <button class="btn btn-sm btn-primary btn-dropdown">Small</button>
            <button class="btn btn-lg btn-primary btn-dropdown">Large</button>
        </div>

        <h5>Danger</h5>
        <div class="example space-x-2">
            <button class="btn btn-danger btn-dropdown">Default</button>
            <button class="btn btn-danger btn-dropdown" disabled>Disabled</button>
            <button class="btn btn-sm btn-danger btn-dropdown">Small</button>
            <button class="btn btn-lg btn-danger btn-dropdown">Large</button>
        </div>

        <h5>Success</h5>
        <div class="example space-x-2">
            <button class="btn btn-success btn-dropdown">Default</button>
            <button class="btn btn-success btn-dropdown" disabled>Disabled</button>
            <button class="btn btn-sm btn-success btn-dropdown">Small</button>
            <button class="btn btn-lg btn-success btn-dropdown">Large</button>
        </div>

        <h5>Warning</h5>
        <div class="example space-x-2">
            <button class="btn btn-warning btn-dropdown">Default</button>
            <button class="btn btn-warning btn-dropdown" disabled>Disabled</button>
            <button class="btn btn-sm btn-warning btn-dropdown">Small</button>
            <button class="btn btn-lg btn-warning btn-dropdown">Large</button>
        </div>

        <h5>Text</h5>
        <div class="example space-x-2">
            <button class="btn btn-text btn-dropdown">Default</button>
            <button class="btn btn-text btn-dropdown" disabled>Disabled</button>
            <button class="btn btn-sm btn-text btn-dropdown">Small</button>
            <button class="btn btn-lg btn-text btn-dropdown">Large</button>
        </div>
        `;
};
export const Dropdown = DropdownTemplate.bind({});
Dropdown.args = {};


const WithInputTemplate = () => {
    return `
        <h5>Default</h5>
        <div class="example space-y-2 max-w-sm">
            <div class="flex gap-3">
                <input class="form-control form-control-sm">
                <button class="btn btn-sm">Small</button>
            </div>
            <div class="flex gap-3">
                <input class="form-control">
                <button class="btn">Medium</button>
            </div>
            <div class="flex gap-3">
                <input class="form-control form-control-lg">
                <button class="btn btn-lg">Large</button>
            </div>
        </div>

        <h5>With icon-only buttons</h5>
        <div class="example space-y-2 max-w-sm">
            <div class="flex gap-3">
                <input class="form-control form-control-sm mr-2">
                <button class="btn btn-icon btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                </button>
            </div>
            <div class="flex gap-3">
                <input class="form-control mr-2">
                <button class="btn btn-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>    
                </button>
            </div>
            <div class="flex gap-3">
                <input class="form-control form-control-lg mr-2">
                <button class="btn btn-icon btn-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                </button>
            </div>
        </div>
        `;
};
export const WithInput = WithInputTemplate.bind({});
WithInput.args = {};
