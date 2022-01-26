export default {
    title: 'Pagination',
};

const Template = () => {
    return `
        <h5>Pagination</h5>
        <div class="example space-x-2">
            <ul class="pagination">
                <li class="page-item disabled"><a>Previous</a></li>
                <li class="page-item"><a href="#">1</a></li>
                <li class="page-item active"><a href="#">2</a></li>
                <li class="page-item"><a href="#">3</a></li>
                <li class="page-item disabled"><a href="#">...</a></li>
                <li class="page-item"><a href="#">99</a></li>
                <li class="page-item"><a href="#">100</a></li>
                <li class="page-item"><a>Next</a></li>
            </ul>
        </div>

        <h5>Pagination full</h5>
        <div class="example space-x-2">
            <div class="flex items-center justify-between">
                <div>Showing 1 to 10 of 97 results</div>
                <ul class="pagination">
                    <li class="page-item disabled"><a>Previous</a></li>
                    <li class="page-item"><a href="#">1</a></li>
                    <li class="page-item active"><a href="#">2</a></li>
                    <li class="page-item"><a href="#">3</a></li>
                    <li class="page-item disabled"><a href="#">...</a></li>
                    <li class="page-item"><a href="#">99</a></li>
                    <li class="page-item"><a href="#">100</a></li>
                    <li class="page-item"><a>Next</a></li>
                </ul>
            </div>
        </div>
    `;
};
export const Pagination = Template.bind({});
