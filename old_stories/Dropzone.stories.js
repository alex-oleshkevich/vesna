export default {
    title: 'Dropzone',
};

const Template = () => {
    return `
        <h5>Dropzone</h5>
        <div class="example max-w-lg">
            <div class="dropzone">
                <header>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                    </svg>
                </header>
                <main>Drag and drop files here.</main>
                <footer>
                    <button class="btn btn-lg">Browser</button>
                </footer>
            </div>
        </div>

        <h5>Active Dropzone</h5>
        <div class="example max-w-lg">
            <div class="dropzone active">
                <header>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                    </svg>
                </header>
                <main>Drag and drop files here.</main>
                <footer>
                    <button class="btn btn-lg">Browser</button>
                </footer>
            </div>
        </div>

        <h5>Disabled Dropzone</h5>
        <div class="example max-w-lg">
            <div class="dropzone disabled">
                <header>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                    </svg>
                </header>
                <main>Drag and drop files here.</main>
                <footer>
                    <button disabled class="btn btn-lg">Browser</button>
                </footer>
            </div>
        </div>
    `;
};
export const Dropzone = Template.bind({});
