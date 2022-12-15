const icon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
<path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
</svg>`;


export default {
    title: 'Breadcrumbs',
};

const BreadcrumbsTemplate = () => {
    return `
        <h5>Breadcrumbs</h5>
        <div class="example">
            <ul class="breadcrumbs">
                <li><a href="#">src</a></li>
                <li><a href="#">router</a></li>
                <li class="active"><a href="#">index.js</a></li>
            </ul>
        </div>

        <h5>Large breadcrumbs</h5>
        <div class="example">
            <ul class="breadcrumbs breadcrumbs-lg">
                <li><a href="#">src</a></li>
                <li><a href="#">router</a></li>
                <li class="active"><a href="#">index.js</a></li>
            </ul>
        </div>
    `;
};
export const Breadcrumbs = BreadcrumbsTemplate.bind({});

const WithIconTemplate = () => {
    return `
        <h5>Breadcrumbs with icon</h5>
        <div class="example">
            <ul class="breadcrumbs">
                <li><a href="#">${icon}src</a></li>
                <li><a href="#">${icon}router</a></li>
                <li class="active"><a href="#">${icon}index.js</a></li>
            </ul>
        </div>

        <h5>Large breadcrumbs with icon</h5>
        <div class="example">
            <ul class="breadcrumbs breadcrumbs-lg">
                <li><a href="#">${icon}src</a></li>
                <li><a href="#">${icon}router</a></li>
                <li class="active"><a href="#">${icon}index.js</a></li>
            </ul>
        </div>
    `;
};
export const WithIcon = WithIconTemplate.bind({});

const SectionTemplate = () => {
    return `
        <h5>Breadcrumbs with icon</h5>
        <div class="example">
            <ul class="breadcrumbs breadcrumbs-section">
                <li><a href="#">src</a></li>
                <li><a href="#">router</a></li>
                <li class="active"><a href="#">index.js</a></li>
            </ul>
        </div>

        <h5>Large breadcrumbs with icon</h5>
        <div class="example">
            <ul class="breadcrumbs breadcrumbs-lg breadcrumbs-section">
                <li><a href="#">${icon}src</a></li>
                <li><a href="#">${icon}router</a></li>
                <li class="active"><a href="#">${icon}index.js</a></li>
            </ul>
        </div>
    `;
};
export const Section = SectionTemplate.bind({});
