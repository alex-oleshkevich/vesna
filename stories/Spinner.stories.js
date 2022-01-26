export default {
    title: 'Spinners',
};

const IndeterminateTemplate = () => {
    return `
        <h5>Spinners: indeterminate</h5>
        <div class="example flex gap-5">
            <div class="spinner spinner-indeterminate spinner-sm">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                        <circle cx="50" cy="50" r="50"/>
                    </g>
                </svg>
            </div>

            <div class="spinner spinner-indeterminate spinner-md">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                        <circle cx="50" cy="50" r="50"/>
                    </g>
                </svg>
            </div>

            <div class="spinner spinner-indeterminate spinner-lg">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                        <circle cx="50" cy="50" r="50"/>
                    </g>
                </svg>
            </div>
        </div>
    `;
};
export const Indeterminate = IndeterminateTemplate.bind({});

const ProgressTemplate = () => {
    return `
        <h5>Spinners: progress</h5>
        <div class="example flex gap-5">
            <div class="spinner spinner-progress spinner-sm">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <text x="50" y="50" text-anchor="middle" alignment-baseline="central" fill="currentColor">75%</text>
                    <circle cx="50" cy="50" r="50"/>
                    <circle cx="50" cy="50" r="50" transform="rotate(-90)" stroke-dasharray="260 100" />
                </svg>
            </div>

            <div class="spinner spinner-progress spinner-md">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <text x="50" y="50" text-anchor="middle" alignment-baseline="central" fill="currentColor">75%</text>
                    <circle cx="50" cy="50" r="50"/>
                    <circle cx="50" cy="50" r="50" transform="rotate(-90)" stroke-dasharray="260 100" />
                </svg>
            </div>

            <div class="spinner spinner-progress spinner-lg">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <text x="50" y="50" text-anchor="middle" alignment-baseline="central" fill="currentColor">75%</text>
                    <circle cx="50" cy="50" r="50"/>
                    <circle cx="50" cy="50" r="50" transform="rotate(-90)" stroke-dasharray="260 100" />
                </svg>
            </div>
        </div>
    `;
};
export const Progress = ProgressTemplate.bind({});

const SuccessTemplate = () => {
    return `
        <h5>Spinners: success</h5>
        <div class="example flex gap-5">
            <div class="spinner spinner-success spinner-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
            </div>

            <div class="spinner spinner-success spinner-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
            </div>

            <div class="spinner spinner-success spinner-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
            </div>
        </div>
    `;
};
export const Success = SuccessTemplate.bind({});

const WarningTemplate = () => {
    return `
        <h5>Spinners: warning</h5>
        <div class="example flex gap-5">
            <div class="spinner spinner-warning spinner-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
            </div>

            <div class="spinner spinner-warning spinner-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
            </div>

            <div class="spinner spinner-warning spinner-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
            </div>
        </div>
    `;
};
export const Warning = WarningTemplate.bind({});

const ErrorTemplate = () => {
    return `
        <h5>Spinners: error</h5>
        <div class="example flex gap-5">
            <div class="spinner spinner-error spinner-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
            </div>

            <div class="spinner spinner-error spinner-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
            </div>

            <div class="spinner spinner-error spinner-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
            </div>
        </div>
    `;
};
export const Error = ErrorTemplate.bind({});
