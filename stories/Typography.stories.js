export default {
    title: 'Typography',
    argTypes: {},
};
const TokensTemplate = () => {
    return `
        <h2>Paragraph</h2>
        <div class="example">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.
            </p>
        </div>

        <h2>Headings</h2>
        <div class="example">
            <h1>h1. Heading text</h1>
            <h2>h2. Heading text</h2>
            <h3>h3. Heading text</h3>
            <h4>h4. Heading text</h4>
            <h5>h5. Heading text</h5>
            <h6>h6. Heading text</h6>
        </div>

        <h2>Lead</h2>
        <div class="example">
            <p class="lead">This is a lead paragraph. It stands out from regular paragraphs.</p>
        </div>


        <h2>Inline text elements</h2>
        <div class="example">
            <p>You can use the mark tag to <mark>highlight</mark> text.</p>
            <p>You can use the code tag to add inline code <code>snippets</code>.</p>
            <p>You can use the kbg tag to show keyboard <kbd>^A</kbd> shortcut.</p>
            <p><del>This line of text is meant to be treated as deleted text.</del></p>
            <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
            <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
            <p><u>This line of text will render as underlined.</u></p>
            <p><small>This line of text is meant to be treated as fine print.</small></p>
            <p><strong>This line rendered as bold text.</strong></p>
            <p><em>This line rendered as italicized text.</em></p>
            <p><a href="#">This line of text is a link.</a></p>
        </div>

        <h2>Unordered list</h2>
        <div class="example">
            <ul>
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
            </ul>
        </div>

        <h2>Ordered list</h2>
        <div class="example">
            <ol>
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
            </ol>
        </div>

        <h2>Description list</h2>
        <div class="example">
            <dl class="grid grid-cols-12">
                <dt class="col-span-3">Term</dt>
                <dd class="col-span-9">
                    <p>Definition for the term.</p>
                    <p>And some more placeholder definition text.</p>
                </dd>

                <dt class="col-span-3">Another term</dt>
                <dd class="col-span-9">A description list is perfect for defining terms.</dd>
            </dl>
        </div>
        `;
};
export const Typography = TokensTemplate.bind({});
Typography.args = {};
