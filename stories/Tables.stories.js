export default {
    title: 'Tables',
};

const Template = () => {
    return `
        <h5>Tables</h5>
        <div class="example">
            <table>
                <thead>
                    <tr>
                        <th><a href="#">Name</a></th>
                        <th>Color</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Google Pixel 3</td>
                        <td>Black</td>
                        <td>Smartphones</td>
                        <td>
                            <a href="#">Edit</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Tesla Model X</td>
                        <td>Red</td>
                        <td>Cars</td>
                        <td>
                            <a href="#">Edit</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Dell XPS 2022</td>
                        <td>Carbon</td>
                        <td>Laptops</td>
                        <td>
                        <a href="#">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
};
export const Table = Template.bind({});

const HoverTemplate = () => {
    return `
        <h5>Tables</h5>
        <div class="example">
            <table class="hover">
                <thead>
                    <tr>
                        <th><a href="#">Name</a></th>
                        <th>Color</th>
                        <th>Category</th>
                        <th class="text-right">Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Google Pixel 3</td>
                        <td>Black</td>
                        <td>Smartphones</td>
                        <td class="text-right">$500</td>
                        <td class="text-right">
                            <a href="#">Edit</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Tesla Model X</td>
                        <td>Red</td>
                        <td>Cars</td>
                        <td class="text-right">$500</td>
                        <td class="text-right">
                            <a href="#">Edit</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Dell XPS 2022</td>
                        <td>Carbon</td>
                        <td>Laptops</td>
                        <td class="text-right">$500</td>
                        <td class="text-right">
                            <a href="#">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
};
export const HoverTable = HoverTemplate.bind({});

const StripedTemplate = () => {
    return `
        <h5>Tables</h5>
        <div class="example">
            <table class="striped">
                <caption>List of products</caption>
                <thead>
                    <tr>
                        <th><a href="#">Name</a></th>
                        <th>Color</th>
                        <th>Category</th>
                        <th class="text-right">Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Google Pixel 3</td>
                        <td>Black</td>
                        <td>Smartphones</td>
                        <td class="text-right">$500</td>
                        <td class="text-right">
                            <a href="#">Edit</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Tesla Model X</td>
                        <td>Red</td>
                        <td>Cars</td>
                        <td class="text-right">$500</td>
                        <td class="text-right">
                            <a href="#">Edit</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Dell XPS 2022</td>
                        <td>Carbon</td>
                        <td>Laptops</td>
                        <td class="text-right">$500</td>
                        <td class="text-right">
                            <a href="#">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
};
export const Striped = StripedTemplate.bind({});

const BorderedTemplate = () => {
    return `
        <h5>Tables</h5>
        <div class="example">
            <table class="bordered">
                <caption>List of products</caption>
                <thead>
                    <tr>
                        <th><a href="#">Name</a></th>
                        <th>Color</th>
                        <th>Category</th>
                        <th class="text-right">Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Google Pixel 3</td>
                        <td>Black</td>
                        <td>Smartphones</td>
                        <td class="text-right">$500</td>
                        <td class="text-right">
                            <a href="#">Edit</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Tesla Model X</td>
                        <td>Red</td>
                        <td>Cars</td>
                        <td class="text-right">$500</td>
                        <td class="text-right">
                            <a href="#">Edit</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Dell XPS 2022</td>
                        <td>Carbon</td>
                        <td>Laptops</td>
                        <td class="text-right">$500</td>
                        <td class="text-right">
                            <a href="#">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
};
export const Bordered = BorderedTemplate.bind({});

const OffsettedTemplate = () => {
    return `
        <h5>Tables</h5>
        <div class="example">
            <table class="offset">
                <caption>List of products</caption>
                <thead>
                    <tr>
                        <th><a href="#">Name</a></th>
                        <th>Color</th>
                        <th>Category</th>
                        <th class="text-right">Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Google Pixel 3</td>
                        <td>Black</td>
                        <td>Smartphones</td>
                        <td class="text-right">$500</td>
                        <td class="text-right">
                            <a href="#">Edit</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Tesla Model X</td>
                        <td>Red</td>
                        <td>Cars</td>
                        <td class="text-right">$500</td>
                        <td class="text-right">
                            <a href="#">Edit</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Dell XPS 2022</td>
                        <td>Carbon</td>
                        <td>Laptops</td>
                        <td class="text-right">$500</td>
                        <td class="text-right">
                            <a href="#">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
};
export const Offset = OffsettedTemplate.bind({});
