const ICON_CLOSE = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#252C32">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>`;

export default {
    title: 'Alerts',
};

const Template = () => {
    return `
        <h5>Alerts</h5>
        <div class="example space-y-3">
            <div class="alert alert-info">
                A simple primary alert—check it out!    
            </div>

            <div class="alert alert-danger">
                A simple danger alert—check it out!    
            </div>

            <div class="alert alert-warning">
                A simple warning alert—check it out!    
            </div>

            <div class="alert alert-success">
                A simple success alert—check it out!    
            </div>
        </div>
    `;
};
export const Alerts = Template.bind({});

const WithHeadingTemplate = () => {
    return `
        <h5>Alerts with heading</h5>
        <div class="example space-y-3">
            <div class="alert alert-info">
                <header>Hey, watch out!</header>
                <main>A simple primary alert—check it out!</main>
            </div>

            <div class="alert alert-danger">
                <header>Hey, watch out!</header>
                <main>A simple danger alert—check it out!</main>
            </div>

            <div class="alert alert-warning">
                <header>Hey, watch out!</header>
                <main>A simple warning alert—check it out!</main>
            </div>

            <div class="alert alert-success">
                <header>Hey, watch out!</header>
                <main>A simple success alert—check it out!</main>
            </div>
        </div>
    `;
};
export const WithHeading = WithHeadingTemplate.bind({});

const DismissibleTemplate = () => {
    return `
        <h5>Dismissible alerts</h5>
        <div class="example space-y-3">
            <div class="alert alert-info alert-dismissible">
                <header>
                    <div>Hey, watch out!</div>
                    <button class="close">${ICON_CLOSE}</button>
                </header>
                <p>A simple primary alert—check it out!</p>
            </div>

            <div class="alert alert-danger alert-dismissible">
                <header>
                    <div>Hey, watch out!</div>
                    <button class="close">${ICON_CLOSE}</button>
                </header>
                <p>A simple primary alert—check it out!</p>
            </div>

            <div class="alert alert-warning alert-dismissible">
                <header>
                    <div>Hey, watch out!</div>
                    <button class="close">${ICON_CLOSE}</button>
                </header>
                <p>A simple primary alert—check it out!</p> 
            </div>

            <div class="alert alert-success alert-dismissible">
                <header>
                    <div>Hey, watch out!</div>
                    <button class="close">${ICON_CLOSE}</button>
                </header>
                <p>A simple primary alert—check it out!</p>
            </div>
        </div>
    `;
};
export const Dismissible = DismissibleTemplate.bind({});

const WithBodyActionsTemplate = () => {
    return `
        <h5>Alerts</h5>
        <div class="example space-y-3">
            <div class="alert alert-info">
                <header>Hey, watch out!</header>
                <p>A simple primary alert—check it out!</p>
                <div class="alert-actions">
                    <button class="btn">Action</button>
                    <button class="btn btn-primary">Action 2</button>
                </div>
            </div>

            <div class="alert alert-danger">
                <header>Hey, watch out!</header>
                <p>A simple danger alert—check it out!</p>
                <div class="alert-actions">
                    <button class="btn">Action</button>
                    <button class="btn btn-danger">Action 2</button>
                </div>
            </div>

            <div class="alert alert-warning">
                <header>Hey, watch out!</header>
                <p>A simple warning alert—check it out!</p>
                <div class="alert-actions">
                    <button class="btn">Action</button>
                    <button class="btn btn-warning">Action 2</button>
                </div>
            </div>

            <div class="alert alert-success">
                <header>Hey, watch out!</header>
                <p>A simple success alert—check it out!</p>
                <div class="alert-actions">
                    <button class="btn">Action</button>
                    <button class="btn btn-success">Action 2</button>
                </div>
            </div>
        </div>
    `;
};
export const WithBodyActions = WithBodyActionsTemplate.bind({});
