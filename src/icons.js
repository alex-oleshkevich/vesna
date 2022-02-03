function svgToDataURL(svg) {
    const data = Buffer.from(svg);
    return 'data:image/svg+xml,' + encodeURIComponent(data.toString());
}

const ICON_WARNING = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
</svg>`;

const ICON_CLOSE = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#252C32">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>`;

const CHEVRON_LEFT = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
</svg>`;

const CHEVRON_RIGHT = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
</svg>`;

const ICON_CLOSE_URL = svgToDataURL(ICON_CLOSE);
const CHEVRON_RIGHT_URL = svgToDataURL(CHEVRON_RIGHT);

module.exports = { ICON_WARNING, ICON_CLOSE, CHEVRON_LEFT, CHEVRON_RIGHT, ICON_CLOSE_URL, CHEVRON_RIGHT_URL, svgToDataURL };
