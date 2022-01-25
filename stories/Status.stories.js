export default {
    title: 'Status',
};

const Template = () => {
    return `
        <h5>Status</h5>
        <div class="example space-x-2">
            <span class="status">
                <span class="dot"></span> 
                Default
            </span>

            <div class="status">
                <span class="dot dot-red"></span>   
                Red
            </div>

            <span class="status">
                <span class="dot dot-yellow"></span>
                Yellow
            </span>

            <span class="status">
                <span class="dot dot-green"></span>
                Green
            </span>

            <span class="status">
                <span class="dot dot-primary"></span>
                Blue
            </span>

            <span class="status">
                <span class="dot dot-purple"></span>
                Purple
            </span>

            <span class="status">
                <span class="dot dot-teal"></span>
                Teal
            </span>

            <span class="status">
                <span class="dot dot-gray"></span>
                Gray
            </span>

            <span class="status">
                <span class="dot dot-black"></span>
                Black
            </span>

            <span class="status">
                <span class="dot dot-white"></span>
                White
            </span>
        </div>
    `;
};
export const Status = Template.bind({});
