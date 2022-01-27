const { svgToDataURL } = require('../../src/icons');

const FOLDER_ICON = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
<path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
</svg>`;

const LOGO = `
<svg width="208" height="24" viewBox="0 0 208 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.395 4.55298C22.3316 4.42601 22.2419 4.31399 22.1319 4.22436C22.0219 4.13473 21.8941 4.06954 21.7569 4.03312C21.6198 3.99671 21.4764 3.9899 21.3364 4.01315C21.1965 4.0364 21.063 4.08918 20.945 4.16798C20.6 4.39798 20.331 4.72598 20.123 5.04798C19.909 5.37798 19.72 5.76098 19.553 6.16398C19.219 6.96798 18.939 7.93198 18.713 8.89798C18.4397 10.0785 18.235 11.2738 18.1 12.478C17.6931 12.2157 17.3662 11.8466 17.155 11.411C16.827 10.731 16.757 9.87698 16.757 8.75698C16.757 8.55923 16.6983 8.36593 16.5884 8.20152C16.4785 8.03711 16.3224 7.90897 16.1397 7.8333C15.957 7.75763 15.7559 7.73783 15.562 7.7764C15.368 7.81496 15.1899 7.91017 15.05 8.04998C14.3992 8.69942 13.883 9.47102 13.5312 10.3205C13.1794 11.17 12.9989 12.0805 13 13C13.0001 14.1511 13.2841 15.2844 13.8267 16.2996C14.3694 17.3148 15.1541 18.1804 16.1113 18.8199C17.0684 19.4594 18.1685 19.853 19.3141 19.9658C20.4596 20.0786 21.6154 19.9071 22.6789 19.4666C23.7423 19.0261 24.6808 18.3301 25.4111 17.4403C26.1413 16.5504 26.6409 15.4942 26.8655 14.3652C27.0901 13.2362 27.0328 12.0693 26.6987 10.9677C26.3645 9.86616 25.7639 8.86399 24.95 8.04998C24.358 7.45898 23.97 7.06498 23.602 6.58298C23.239 6.10698 22.878 5.51998 22.395 4.55298ZM22.12 17.12C21.7005 17.539 21.1661 17.8243 20.5846 17.9398C20.003 18.0554 19.4002 17.996 18.8523 17.7691C18.3045 17.5423 17.8361 17.1582 17.5064 16.6653C17.1768 16.1724 17.0005 15.5929 17 15C17 15 17.879 15.5 19.5 15.5C19.5 14.5 20 11.5 20.75 11C21.25 12 21.536 12.293 22.121 12.879C22.4 13.1572 22.6213 13.4878 22.7722 13.8517C22.923 14.2157 23.0005 14.606 23 15C23.0005 15.394 22.923 15.7842 22.7722 16.1482C22.6213 16.5122 22.4 16.8428 22.121 17.121L22.12 17.12Z" fill="#F76659"/>
<path d="M42.9723 19L44.0526 15.772H48.9744L50.0611 19H52.5923L47.9773 5.90909H45.0497L40.4411 19H42.9723ZM44.6918 13.8672L46.4624 8.59375H46.5646L48.3352 13.8672H44.6918ZM53.9623 22.6818H56.2762V17.4531H56.3721C56.7365 18.169 57.4971 19.1726 59.1846 19.1726C61.4985 19.1726 63.2308 17.3381 63.2308 14.1037C63.2308 10.831 61.4474 9.05398 59.1782 9.05398C57.446 9.05398 56.7237 10.0959 56.3721 10.8054H56.2379V9.18182H53.9623V22.6818ZM56.2315 14.0909C56.2315 12.1861 57.0497 10.9524 58.539 10.9524C60.0795 10.9524 60.8721 12.2628 60.8721 14.0909C60.8721 15.9318 60.0667 17.2741 58.539 17.2741C57.0625 17.2741 56.2315 15.9957 56.2315 14.0909ZM64.9603 22.6818H67.2742V17.4531H67.3701C67.7345 18.169 68.4951 19.1726 70.1826 19.1726C72.4965 19.1726 74.2288 17.3381 74.2288 14.1037C74.2288 10.831 72.4454 9.05398 70.1762 9.05398C68.444 9.05398 67.7217 10.0959 67.3701 10.8054H67.2359V9.18182H64.9603V22.6818ZM67.2295 14.0909C67.2295 12.1861 68.0477 10.9524 69.537 10.9524C71.0775 10.9524 71.8701 12.2628 71.8701 14.0909C71.8701 15.9318 71.0647 17.2741 69.537 17.2741C68.0605 17.2741 67.2295 15.9957 67.2295 14.0909ZM91.0312 5.90909H88.6726V14.8324H88.5575L82.3956 5.90909H80.2734V19H82.6449V10.0831H82.7535L88.9219 19H91.0312V5.90909ZM96.0862 19.1982C97.6267 19.1982 98.5472 18.4759 98.9691 17.6513H99.0458V19H101.27V12.429C101.27 9.83381 99.1544 9.05398 97.2816 9.05398C95.2169 9.05398 93.6317 9.97443 93.1203 11.7642L95.2808 12.071C95.511 11.3999 96.1629 10.8246 97.2943 10.8246C98.3682 10.8246 98.9563 11.3743 98.9563 12.3395V12.3778C98.9563 13.0426 98.2595 13.0746 96.5273 13.2599C94.6225 13.4645 92.8007 14.0334 92.8007 16.245C92.8007 18.1754 94.2134 19.1982 96.0862 19.1982ZM96.6871 17.4979C95.7219 17.4979 95.0316 17.0568 95.0316 16.2067C95.0316 15.3182 95.805 14.9474 96.8405 14.8004C97.4477 14.7173 98.6622 14.5639 98.9627 14.321V15.478C98.9627 16.571 98.0806 17.4979 96.6871 17.4979ZM103.345 19H105.659V13.0298C105.659 11.8217 106.464 11.0036 107.461 11.0036C108.439 11.0036 109.111 11.6619 109.111 12.6719V19H111.38V12.8764C111.38 11.7706 112.038 11.0036 113.157 11.0036C114.09 11.0036 114.831 11.5533 114.831 12.7678V19H117.152V12.4098C117.152 10.2173 115.886 9.05398 114.084 9.05398C112.658 9.05398 111.571 9.7571 111.137 10.8501H111.035C110.657 9.73793 109.705 9.05398 108.382 9.05398C107.065 9.05398 106.081 9.73153 105.672 10.8501H105.557V9.18182H103.345V19ZM123.594 19.1918C125.882 19.1918 127.455 18.0732 127.864 16.3665L125.703 16.1236C125.39 16.9545 124.623 17.3892 123.626 17.3892C122.13 17.3892 121.139 16.4048 121.12 14.7237H127.96V14.0142C127.96 10.5689 125.889 9.05398 123.472 9.05398C120.66 9.05398 118.825 11.1186 118.825 14.1484C118.825 17.2294 120.634 19.1918 123.594 19.1918ZM121.126 13.1641C121.197 11.9112 122.124 10.8565 123.504 10.8565C124.834 10.8565 125.729 11.8281 125.742 13.1641H121.126Z" fill="#1A2024"/>
</svg>
`;

const LOGO_DARK = `
<svg width="208" height="24" viewBox="0 0 208 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.395 4.55298C22.3316 4.42601 22.2419 4.31399 22.1319 4.22436C22.0219 4.13473 21.8941 4.06954 21.7569 4.03312C21.6198 3.99671 21.4764 3.9899 21.3364 4.01315C21.1965 4.0364 21.063 4.08918 20.945 4.16798C20.6 4.39798 20.331 4.72598 20.123 5.04798C19.909 5.37798 19.72 5.76098 19.553 6.16398C19.219 6.96798 18.939 7.93198 18.713 8.89798C18.4397 10.0785 18.235 11.2738 18.1 12.478C17.6931 12.2157 17.3662 11.8466 17.155 11.411C16.827 10.731 16.757 9.87698 16.757 8.75698C16.757 8.55923 16.6983 8.36593 16.5884 8.20152C16.4785 8.03711 16.3224 7.90897 16.1397 7.8333C15.957 7.75763 15.7559 7.73783 15.562 7.7764C15.368 7.81496 15.1899 7.91017 15.05 8.04998C14.3992 8.69942 13.883 9.47102 13.5312 10.3205C13.1794 11.17 12.9989 12.0805 13 13C13.0001 14.1511 13.2841 15.2844 13.8267 16.2996C14.3694 17.3148 15.1541 18.1804 16.1113 18.8199C17.0684 19.4594 18.1685 19.853 19.3141 19.9658C20.4596 20.0786 21.6154 19.9071 22.6789 19.4666C23.7423 19.0261 24.6808 18.3301 25.4111 17.4403C26.1413 16.5504 26.6409 15.4942 26.8655 14.3652C27.0901 13.2362 27.0328 12.0693 26.6987 10.9677C26.3645 9.86616 25.7639 8.86399 24.95 8.04998C24.358 7.45898 23.97 7.06498 23.602 6.58298C23.239 6.10698 22.878 5.51998 22.395 4.55298ZM22.12 17.12C21.7005 17.539 21.1661 17.8243 20.5846 17.9398C20.003 18.0554 19.4002 17.996 18.8523 17.7691C18.3045 17.5423 17.8361 17.1582 17.5064 16.6653C17.1768 16.1724 17.0005 15.5929 17 15C17 15 17.879 15.5 19.5 15.5C19.5 14.5 20 11.5 20.75 11C21.25 12 21.536 12.293 22.121 12.879C22.4 13.1572 22.6213 13.4878 22.7722 13.8517C22.923 14.2157 23.0005 14.606 23 15C23.0005 15.394 22.923 15.7842 22.7722 16.1482C22.6213 16.5122 22.4 16.8428 22.121 17.121L22.12 17.12Z" fill="#F76659"/>
<path d="M42.9723 19L44.0526 15.772H48.9744L50.0611 19H52.5923L47.9773 5.90909H45.0497L40.4411 19H42.9723ZM44.6918 13.8672L46.4624 8.59375H46.5646L48.3352 13.8672H44.6918ZM53.9623 22.6818H56.2762V17.4531H56.3721C56.7365 18.169 57.4971 19.1726 59.1846 19.1726C61.4985 19.1726 63.2308 17.3381 63.2308 14.1037C63.2308 10.831 61.4474 9.05398 59.1782 9.05398C57.446 9.05398 56.7237 10.0959 56.3721 10.8054H56.2379V9.18182H53.9623V22.6818ZM56.2315 14.0909C56.2315 12.1861 57.0497 10.9524 58.539 10.9524C60.0795 10.9524 60.8721 12.2628 60.8721 14.0909C60.8721 15.9318 60.0667 17.2741 58.539 17.2741C57.0625 17.2741 56.2315 15.9957 56.2315 14.0909ZM64.9603 22.6818H67.2742V17.4531H67.3701C67.7345 18.169 68.4951 19.1726 70.1826 19.1726C72.4965 19.1726 74.2288 17.3381 74.2288 14.1037C74.2288 10.831 72.4454 9.05398 70.1762 9.05398C68.444 9.05398 67.7217 10.0959 67.3701 10.8054H67.2359V9.18182H64.9603V22.6818ZM67.2295 14.0909C67.2295 12.1861 68.0477 10.9524 69.537 10.9524C71.0775 10.9524 71.8701 12.2628 71.8701 14.0909C71.8701 15.9318 71.0647 17.2741 69.537 17.2741C68.0605 17.2741 67.2295 15.9957 67.2295 14.0909ZM91.0312 5.90909H88.6726V14.8324H88.5575L82.3956 5.90909H80.2734V19H82.6449V10.0831H82.7535L88.9219 19H91.0312V5.90909ZM96.0862 19.1982C97.6267 19.1982 98.5472 18.4759 98.9691 17.6513H99.0458V19H101.27V12.429C101.27 9.83381 99.1544 9.05398 97.2816 9.05398C95.2169 9.05398 93.6317 9.97443 93.1203 11.7642L95.2808 12.071C95.511 11.3999 96.1629 10.8246 97.2943 10.8246C98.3682 10.8246 98.9563 11.3743 98.9563 12.3395V12.3778C98.9563 13.0426 98.2595 13.0746 96.5273 13.2599C94.6225 13.4645 92.8007 14.0334 92.8007 16.245C92.8007 18.1754 94.2134 19.1982 96.0862 19.1982ZM96.6871 17.4979C95.7219 17.4979 95.0316 17.0568 95.0316 16.2067C95.0316 15.3182 95.805 14.9474 96.8405 14.8004C97.4477 14.7173 98.6622 14.5639 98.9627 14.321V15.478C98.9627 16.571 98.0806 17.4979 96.6871 17.4979ZM103.345 19H105.659V13.0298C105.659 11.8217 106.464 11.0036 107.461 11.0036C108.439 11.0036 109.111 11.6619 109.111 12.6719V19H111.38V12.8764C111.38 11.7706 112.038 11.0036 113.157 11.0036C114.09 11.0036 114.831 11.5533 114.831 12.7678V19H117.152V12.4098C117.152 10.2173 115.886 9.05398 114.084 9.05398C112.658 9.05398 111.571 9.7571 111.137 10.8501H111.035C110.657 9.73793 109.705 9.05398 108.382 9.05398C107.065 9.05398 106.081 9.73153 105.672 10.8501H105.557V9.18182H103.345V19ZM123.594 19.1918C125.882 19.1918 127.455 18.0732 127.864 16.3665L125.703 16.1236C125.39 16.9545 124.623 17.3892 123.626 17.3892C122.13 17.3892 121.139 16.4048 121.12 14.7237H127.96V14.0142C127.96 10.5689 125.889 9.05398 123.472 9.05398C120.66 9.05398 118.825 11.1186 118.825 14.1484C118.825 17.2294 120.634 19.1918 123.594 19.1918ZM121.126 13.1641C121.197 11.9112 122.124 10.8565 123.504 10.8565C124.834 10.8565 125.729 11.8281 125.742 13.1641H121.126Z" fill="white"/>
</svg>`

export default {
    title: 'App Shell/Sidebar',
};

const Template = () => {
    return `
        <h5>Sidebar</h5>
        <div class="example">
            <aside class="sidebar">
                <header>
                    <div class="logo">${LOGO}</div>
                </header>
                <main>
                    <div class="sidebar-heading">Projects</div>
                    <ul class="sidebar-menu">
                        <li><a href="#">${FOLDER_ICON} Dashboard</a></li>
                        <li class="active"><a href="#">${FOLDER_ICON} Orders</a></li>
                        <li><a href="#">${FOLDER_ICON} Users</a></li>
                        <li><a href="#">${FOLDER_ICON} Products</a></li>
                        <li>
                            <a href="#">
                                ${FOLDER_ICON} Products
                                <span class="badge badge-sm badge-green">New</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                ${FOLDER_ICON} Categories
                                <div class="counter counter-sm">42</div>
                            </a>
                        </li>
                    </ul>
                     <hr>

                    <div class="sidebar-heading">Persons</div>
                    <ul class="sidebar-menu">
                        <li>
                            <a href="#">
                                <div class="avatar avatar-sm">
                                    <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
                                </div>
                                John Doe
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="avatar avatar-sm">
                                    <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
                                </div>
                                Jane Air
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="avatar avatar-sm">
                                    <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
                                </div>
                                Aylit Heron
                                <div class="counter counter-sm bg-primary-500">42</div>
                            </a>
                        </li>
                    </ul>
                </main>
                <footer>
                    <div class="flex items-center h-12 hover:bg-gray-100 rounded-md px-3">
                        <div class="avatar avatar-sm mr-6">
                            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
                        </div>
                        <span>Aylit Heron</span>
                        <div class="ml-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                            </svg>
                        </div>
                    </div>
                </footer>
            </aside>
        </div>
    `;
};
export const Sidebar = Template.bind({});


const DarkTemplate = () => {
    return `
        <h5>Sidebar</h5>
        <div class="example">
            <aside class="sidebar sidebar-dark">
                <header>
                    <div class="logo">${LOGO_DARK}</div>
                </header>
                <main>
                    <div class="sidebar-heading">Projects</div>
                    <ul class="sidebar-menu">
                        <li><a href="#">${FOLDER_ICON} Dashboard</a></li>
                        <li class="active"><a href="#">${FOLDER_ICON} Orders</a></li>
                        <li><a href="#">${FOLDER_ICON} Users</a></li>
                        <li><a href="#">${FOLDER_ICON} Products</a></li>
                        <li>
                            <a href="#">
                                ${FOLDER_ICON} Products
                                <span class="badge badge-sm badge-green">New</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                ${FOLDER_ICON} Categories
                                <div class="counter counter-sm">42</div>
                            </a>
                        </li>
                    </ul>
                     <hr>

                    <div class="sidebar-heading">Persons</div>
                    <ul class="sidebar-menu">
                        <li>
                            <a href="#">
                                <div class="avatar avatar-sm">
                                    <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
                                </div>
                                John Doe
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="avatar avatar-sm">
                                    <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
                                </div>
                                Jane Air
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="avatar avatar-sm">
                                    <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
                                </div>
                                Aylit Heron
                                <div class="counter counter-sm bg-primary-500">42</div>
                            </a>
                        </li>
                    </ul>
                </main>
                <footer>
                    <div class="flex items-center h-12 hover:bg-gray-600 text-white rounded-md px-3">
                        <div class="avatar avatar-sm mr-6">
                            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
                        </div>
                        <span>Aylit Heron</span>
                        <div class="ml-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                            </svg>
                        </div>
                    </div>
                </footer>
            </aside>
        </div>
    `;
};
export const Dark = DarkTemplate.bind({});


const TransparentTemplate = () => {
    return `
        <h5>Sidebar</h5>
        <div class="example">
            <aside class="sidebar sidebar-transparent">
                <header>
                    <div class="logo">${LOGO}</div>
                </header>
                <main>
                    <div class="sidebar-heading">Projects</div>
                    <ul class="sidebar-menu">
                        <li><a href="#">${FOLDER_ICON} Dashboard</a></li>
                        <li class="active"><a href="#">${FOLDER_ICON} Orders</a></li>
                        <li><a href="#">${FOLDER_ICON} Users</a></li>
                        <li><a href="#">${FOLDER_ICON} Products</a></li>
                        <li>
                            <a href="#">
                                ${FOLDER_ICON} Products
                                <span class="badge badge-sm badge-green">New</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                ${FOLDER_ICON} Categories
                                <div class="counter counter-sm">42</div>
                            </a>
                        </li>
                    </ul>
                     <hr>

                    <div class="sidebar-heading">Persons</div>
                    <ul class="sidebar-menu">
                        <li>
                            <a href="#">
                                <div class="avatar avatar-sm">
                                    <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
                                </div>
                                John Doe
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="avatar avatar-sm">
                                    <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
                                </div>
                                Jane Air
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="avatar avatar-sm">
                                    <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
                                </div>
                                Aylit Heron
                                <div class="counter counter-sm bg-primary-500">42</div>
                            </a>
                        </li>
                    </ul>
                </main>
                <footer>
                    <div class="flex items-center h-12 hover:bg-gray-100 rounded-md px-3">
                        <div class="avatar avatar-sm mr-6">
                            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
                        </div>
                        <span>Aylit Heron</span>
                        <div class="ml-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                            </svg>
                        </div>
                    </div>
                </footer>
            </aside>
        </div>
    `;
};
export const Transparent = TransparentTemplate.bind({});
