export default {
    title: 'File upload',
};

const Template = () => {
    return `
        <h5>File upload</h5>
        <div class="example space-x-2">
            <div class="upload-file upload-file-idle">
                <main>
                    <div>file.txt</div>
                </main>
                <button class="close"></button>
            </div>
        </div>
    `;
};
export const FileUpload = Template.bind({});

const LoadingTemplate = () => {
    return `
        <h5>File upload: loading</h5>
        <div class="example space-x-2">
            <div class="upload-file upload-file-loading">
                <main>
                    <div>file.txt</div>
                </main>
                <div class="spinner spinner-progress spinner-sm">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <text x="50" y="50" text-anchor="middle" alignment-baseline="central" fill="currentColor">75%</text>
                        <circle cx="50" cy="50" r="50"/>
                        <circle cx="50" cy="50" r="50" transform="rotate(-90)" stroke-dasharray="260 100" />
                    </svg>
                </div>
            </div>
        </div>
    `;
};
export const Loading = LoadingTemplate.bind({});

const UploadErrorTemplate = () => {
    return `
        <h5>File upload: error</h5>
        <div class="example space-x-2">
            <div class="upload-file upload-file-error">
                <main>
                    <div>file.txt</div>
                </main>
                <div class="spinner spinner-error spinner-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    `;
};
export const UploadError = UploadErrorTemplate.bind({});
