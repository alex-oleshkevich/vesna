export default {
    title: 'Dropdown menu',
};

const icon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
</svg>`;

const Template = () => {
    return `
        <h5>List menu</h5>
        <div class="example space-x-2">
            <ul class="dropdown-menu">
                <li><button type="button">Action</button></li>
                <li><button type="button">Another Action</button></li>
                <li class="selected"><button type="button">Selected Action</button></li>
                <li class="disabled"><button type="button">Disabled Action</button></li>
                <li><button type="button">Something else here</button></li>
                <li><form><button type="button">Form hides here</button></form></li>
                <li><a href="#">This is a link</a></li>
            </ul>
        </div>
    `;
};
export const DropdownMenu = Template.bind({});


const WithLeftIconTemplate = () => {
    return `
        <h5>List menu</h5>
        <div class="example space-x-2">
            <ul class="dropdown-menu">
                <li><button type="button">${icon} <span>Action</span></button></li>
                <li><button type="button">${icon} <span>Another Action</span></button></li>
                <li class="selected"><button type="button">${icon} <span>Selected Action</span></button></li>
                <li class="disabled"><button type="button">${icon} <span>Disabled Action</span></button></li>
                <li><button type="button">${icon} <span>Something else here</span></button></li>
                <li><a href="#">${icon} <span>This is a link</span></a></li>
            </ul>
        </div>
    `;
};
export const WithLeftIcon = WithLeftIconTemplate.bind({});
