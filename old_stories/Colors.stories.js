export default {
    title: 'Colors',
    argTypes: {},
};
const TokensTemplate = () => {
    return `
    <div class="space-y-3 max-w-4xl">
        <div class="grid grid-cols-11 gap-x-2">
            <div>Dark gray</div>
            <div class="h-10 w-full rounded"></div>
            <div class="h-10 w-full rounded"></div>
            <div class="h-10 w-full rounded"></div>
            <div class="h-10 w-full rounded"></div>
            <div class="h-10 w-full rounded"></div>
            <div class="h-10 w-full rounded bg-dark-gray-500"></div>
            <div class="h-10 w-full rounded bg-dark-gray-600"></div>
            <div class="h-10 w-full rounded bg-dark-gray-700"></div>
            <div class="h-10 w-full rounded bg-dark-gray-800"></div>
            <div class="h-10 w-full rounded bg-dark-gray-900"></div>
        </div>

        <div class="grid grid-cols-11 gap-x-2">
            <div>Mid gray</div>
            <div class="h-10 w-full rounded"></div>
            <div class="h-10 w-full rounded"></div>
            <div class="h-10 w-full rounded"></div>
            <div class="h-10 w-full rounded"></div>
            <div class="h-10 w-full rounded"></div>
            <div class="h-10 w-full rounded bg-mid-gray-500"></div>
            <div class="h-10 w-full rounded bg-mid-gray-600"></div>
            <div class="h-10 w-full rounded bg-mid-gray-700"></div>
            <div class="h-10 w-full rounded bg-mid-gray-800"></div>
            <div class="h-10 w-full rounded bg-mid-gray-900"></div>
        </div>

        <div class="grid grid-cols-11 gap-x-2">
            <div>Light gray</div>
            <div class="h-10 w-full rounded"></div>
            <div class="h-10 w-full rounded"></div>
            <div class="h-10 w-full rounded"></div>
            <div class="h-10 w-full rounded"></div>
            <div class="h-10 w-full rounded"></div>
            <div class="h-10 w-full rounded bg-light-gray-500"></div>
            <div class="h-10 w-full rounded bg-light-gray-600"></div>
            <div class="h-10 w-full rounded bg-light-gray-700"></div>
            <div class="h-10 w-full rounded bg-light-gray-800"></div>
            <div class="h-10 w-full rounded bg-light-gray-900"></div>
        </div>

        <div class="grid grid-cols-11 gap-x-2">
            <div>Gray</div>
            <div class="h-10 w-full rounded bg-gray-50"></div>
            <div class="h-10 w-full rounded bg-gray-100"></div>
            <div class="h-10 w-full rounded bg-gray-200"></div>
            <div class="h-10 w-full rounded bg-gray-300"></div>
            <div class="h-10 w-full rounded bg-gray-400"></div>
            <div class="h-10 w-full rounded bg-gray-500"></div>
            <div class="h-10 w-full rounded bg-gray-600"></div>
            <div class="h-10 w-full rounded bg-gray-700"></div>
            <div class="h-10 w-full rounded bg-gray-800"></div>
            <div class="h-10 w-full rounded bg-gray-900"></div>
        </div>

        <div class="grid grid-cols-11 gap-x-2">
            <div>Primary</div>
            <div class="h-10 w-full rounded bg-primary-50"></div>
            <div class="h-10 w-full rounded bg-primary-100"></div>
            <div class="h-10 w-full rounded bg-primary-200"></div>
            <div class="h-10 w-full rounded bg-primary-300"></div>
            <div class="h-10 w-full rounded bg-primary-400"></div>
            <div class="h-10 w-full rounded bg-primary-500"></div>
            <div class="h-10 w-full rounded bg-primary-600"></div>
            <div class="h-10 w-full rounded bg-primary-700"></div>
            <div class="h-10 w-full rounded bg-primary-800"></div>
            <div class="h-10 w-full rounded bg-primary-900"></div>
        </div>

        <div class="grid grid-cols-11 gap-x-2">
            <div>Red</div>
            <div class="h-10 w-full rounded bg-red-50"></div>
            <div class="h-10 w-full rounded bg-red-100"></div>
            <div class="h-10 w-full rounded bg-red-200"></div>
            <div class="h-10 w-full rounded bg-red-300"></div>
            <div class="h-10 w-full rounded bg-red-400"></div>
            <div class="h-10 w-full rounded bg-red-500"></div>
            <div class="h-10 w-full rounded bg-red-600"></div>
            <div class="h-10 w-full rounded bg-red-700"></div>
            <div class="h-10 w-full rounded bg-red-800"></div>
            <div class="h-10 w-full rounded bg-red-900"></div>
        </div>

        <div class="grid grid-cols-11 gap-x-2">
            <div>Yellow</div>
            <div class="h-10 w-full rounded bg-yellow-50"></div>
            <div class="h-10 w-full rounded bg-yellow-100"></div>
            <div class="h-10 w-full rounded bg-yellow-200"></div>
            <div class="h-10 w-full rounded bg-yellow-300"></div>
            <div class="h-10 w-full rounded bg-yellow-400"></div>
            <div class="h-10 w-full rounded bg-yellow-500"></div>
            <div class="h-10 w-full rounded bg-yellow-600"></div>
            <div class="h-10 w-full rounded bg-yellow-700"></div>
            <div class="h-10 w-full rounded bg-yellow-800"></div>
            <div class="h-10 w-full rounded bg-yellow-900"></div>
        </div>

        <div class="grid grid-cols-11 gap-x-2">
            <div>Green</div>
            <div class="h-10 w-full rounded bg-green-50"></div>
            <div class="h-10 w-full rounded bg-green-100"></div>
            <div class="h-10 w-full rounded bg-green-200"></div>
            <div class="h-10 w-full rounded bg-green-300"></div>
            <div class="h-10 w-full rounded bg-green-400"></div>
            <div class="h-10 w-full rounded bg-green-500"></div>
            <div class="h-10 w-full rounded bg-green-600"></div>
            <div class="h-10 w-full rounded bg-green-700"></div>
            <div class="h-10 w-full rounded bg-green-800"></div>
            <div class="h-10 w-full rounded bg-green-900"></div>
        </div>

        <div class="grid grid-cols-11 gap-x-2">
            <div>Purple</div>
            <div class="h-10 w-full rounded bg-purple-50"></div>
            <div class="h-10 w-full rounded bg-purple-100"></div>
            <div class="h-10 w-full rounded bg-purple-200"></div>
            <div class="h-10 w-full rounded bg-purple-300"></div>
            <div class="h-10 w-full rounded bg-purple-400"></div>
            <div class="h-10 w-full rounded bg-purple-500"></div>
            <div class="h-10 w-full rounded bg-purple-600"></div>
            <div class="h-10 w-full rounded bg-purple-700"></div>
            <div class="h-10 w-full rounded bg-purple-800"></div>
            <div class="h-10 w-full rounded bg-purple-900"></div>
        </div>

        <div class="grid grid-cols-11 gap-x-2">
            <div>Teal</div>
            <div class="h-10 w-full rounded bg-teal-50"></div>
            <div class="h-10 w-full rounded bg-teal-100"></div>
            <div class="h-10 w-full rounded bg-teal-200"></div>
            <div class="h-10 w-full rounded bg-teal-300"></div>
            <div class="h-10 w-full rounded bg-teal-400"></div>
            <div class="h-10 w-full rounded bg-teal-500"></div>
            <div class="h-10 w-full rounded bg-teal-600"></div>
            <div class="h-10 w-full rounded bg-teal-700"></div>
            <div class="h-10 w-full rounded bg-teal-800"></div>
            <div class="h-10 w-full rounded bg-teal-900"></div>
        </div>
    
        `;
};
export const Colors = TokensTemplate.bind({});
Colors.args = {};
