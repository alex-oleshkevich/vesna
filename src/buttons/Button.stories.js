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

        <h5>Accent</h5>
        <div class="example space-x-2">
            <button class="btn btn-sm btn-accent">Small</button>
            <button class="btn btn-accent">Default</button>
            <button class="btn btn-lg btn-accent">Large</button>
            <button class="btn btn-accent" disabled>Disabled</button>
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
