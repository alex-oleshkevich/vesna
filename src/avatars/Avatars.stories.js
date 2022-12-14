// import './avatars';

export default {
    title: 'Avatars',
};

const ImagesTemplate = () => {
    return `        
<h5>Rounded</h5>
<div class="example space-x-3">
    <div class="avatar avatar-xs">
        <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
    </div>
    <div class="avatar avatar-sm">
        <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
    </div>
    <div class="avatar avatar-md">
        <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
    </div>
    <div class="avatar avatar-lg">
        <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
    </div>
    <div class="avatar avatar-xl">
        <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
    </div>
    <div class="avatar avatar-2xl">
        <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
    </div>
</div>

<h5>Squared</h5>
<div class="example space-x-3">
    <div class="avatar avatar-xs avatar-square">
        <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
    </div>
    <div class="avatar avatar-sm avatar-square">
        <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
    </div>
    <div class="avatar avatar-md avatar-square">
        <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
    </div>
    <div class="avatar avatar-lg avatar-square">
        <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
    </div>
    <div class="avatar avatar-xl avatar-square">
        <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
    </div>
    <div class="avatar avatar-2xl avatar-square">
        <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
    </div>
</div>
`;
};

export const Images = ImagesTemplate.bind();

const WithStatusTemplate = () => {
    return `        
<h5>Rounded</h5>
<div class="example space-y-2">
    <div class="space-x-3">
        <div class="avatar avatar-xs avatar-status">
            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
        </div>
        <div class="avatar avatar-sm avatar-status">
            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
        </div>
        <div class="avatar avatar-md avatar-status">
            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
        </div>
        <div class="avatar avatar-lg avatar-status">
            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
        </div>
        <div class="avatar avatar-xl avatar-status">
            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
        </div>
        <div class="avatar avatar-2xl avatar-status">
            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
        </div>
    </div>
    <div class="space-x-3">
        <div class="avatar avatar-xs avatar-status avatar-status-gray">
            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
        </div>
        <div class="avatar avatar-sm avatar-status avatar-status-gray">
            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
        </div>
        <div class="avatar avatar-md avatar-status avatar-status-gray">
            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
        </div>
        <div class="avatar avatar-lg avatar-status avatar-status-gray">
            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
        </div>
        <div class="avatar avatar-xl avatar-status avatar-status-gray">
            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
        </div>
        <div class="avatar avatar-2xl avatar-status avatar-status-gray">
            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
        </div>
    </div>
</div>

<h5>Squared</h5>
<div class="example space-y-2">
    <div class="space-x-3">
        <div class="avatar avatar-xs avatar-square avatar-status">
            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
        </div>
        <div class="avatar avatar-sm avatar-square avatar-status">
            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
        </div>
        <div class="avatar avatar-md avatar-square avatar-status">
            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
        </div>
        <div class="avatar avatar-lg avatar-square avatar-status">
            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
        </div>
        <div class="avatar avatar-xl avatar-square avatar-status">
            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
        </div>
        <div class="avatar avatar-2xl avatar-square avatar-status">
            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
        </div>
    </div>
    <div class="space-x-3">
        <div class="avatar avatar-xs avatar-square avatar-status avatar-status-gray">
            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
        </div>
        <div class="avatar avatar-sm avatar-square avatar-status avatar-status-gray">
            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
        </div>
        <div class="avatar avatar-md avatar-square avatar-status avatar-status-gray">
            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
        </div>
        <div class="avatar avatar-lg avatar-square avatar-status avatar-status-gray">
            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
        </div>
        <div class="avatar avatar-xl avatar-square avatar-status avatar-status-gray">
            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
        </div>
        <div class="avatar avatar-2xl avatar-square avatar-status avatar-status-gray">
            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
        </div>
    </div>
</div>
`;
};
export const WithStatus = WithStatusTemplate.bind();

const WithBottomStatusTemplate = () => {
    return `        
    <h5>Rounded</h5>
    <div class="example space-y-2">
        <div class="space-x-3">
            <div class="avatar avatar-xs avatar-status avatar-status-top">
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
            </div>
            <div class="avatar avatar-sm avatar-status avatar-status-top">
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
            </div>
            <div class="avatar avatar-md avatar-status avatar-status-top">
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
            </div>
            <div class="avatar avatar-lg avatar-status avatar-status-top">
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
            </div>
            <div class="avatar avatar-xl avatar-status avatar-status-top">
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
            </div>
            <div class="avatar avatar-2xl avatar-status avatar-status-top">
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
            </div>
        </div>
        <div class="space-x-3">
            <div class="avatar avatar-xs avatar-status avatar-status-gray avatar-status-top">
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
            </div>
            <div class="avatar avatar-sm avatar-status avatar-status-gray avatar-status-top">
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
            </div>
            <div class="avatar avatar-md avatar-status avatar-status-gray avatar-status-top">
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
            </div>
            <div class="avatar avatar-lg avatar-status avatar-status-gray avatar-status-top">
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
            </div>
            <div class="avatar avatar-xl avatar-status avatar-status-gray avatar-status-top">
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
            </div>
            <div class="avatar avatar-2xl avatar-status avatar-status-gray avatar-status-top">
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
            </div>
        </div>
    </div>
    
    <h5>Squared</h5>
    <div class="example space-y-2">
        <div class="space-x-3">
            <div class="avatar avatar-xs avatar-square avatar-status avatar-status-top">
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
            </div>
            <div class="avatar avatar-sm avatar-square avatar-status avatar-status-top">
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
            </div>
            <div class="avatar avatar-md avatar-square avatar-status avatar-status-top">
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
            </div>
            <div class="avatar avatar-lg avatar-square avatar-status avatar-status-top">
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
            </div>
            <div class="avatar avatar-xl avatar-square avatar-status avatar-status-top">
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
            </div>
            <div class="avatar avatar-2xl avatar-square avatar-status avatar-status-top">
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
            </div>
        </div>
        <div class="space-x-3">
            <div class="avatar avatar-xs avatar-square avatar-status avatar-status-gray avatar-status-top">
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
            </div>
            <div class="avatar avatar-sm avatar-square avatar-status avatar-status-gray avatar-status-top">
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
            </div>
            <div class="avatar avatar-md avatar-square avatar-status avatar-status-gray avatar-status-top">
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
            </div>
            <div class="avatar avatar-lg avatar-square avatar-status avatar-status-gray avatar-status-top">
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
            </div>
            <div class="avatar avatar-xl avatar-square avatar-status avatar-status-gray avatar-status-top">
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
            </div>
            <div class="avatar avatar-2xl avatar-square avatar-status avatar-status-gray avatar-status-top">
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
            </div>
        </div>
    </div>
`;
};
export const WithBottomStatus = WithBottomStatusTemplate.bind();


const InitialsRoundedTemplate = () => {
    return `
<h5>Blue</h5>
<div class="example space-y-2">
    <div class="space-x-3">
        <div class="avatar avatar-blue avatar-xs">W</div>
        <div class="avatar avatar-blue avatar-sm">WW</div>
        <div class="avatar avatar-blue avatar-md">WW</div>
        <div class="avatar avatar-blue avatar-lg">WW</div>
        <div class="avatar avatar-blue avatar-xl">WW</div>
        <div class="avatar avatar-blue avatar-2xl">WW</div>
    </div>
    <div class="space-x-3">
        <div class="avatar avatar-blue avatar-filled avatar-xs">W</div>
        <div class="avatar avatar-blue avatar-filled avatar-sm">WW</div>
        <div class="avatar avatar-blue avatar-filled avatar-md">WW</div>
        <div class="avatar avatar-blue avatar-filled avatar-lg">WW</div>
        <div class="avatar avatar-blue avatar-filled avatar-xl">WW</div>
        <div class="avatar avatar-blue avatar-filled avatar-2xl">WW</div>
    </div>
</div>

<h5>Red</h5>
<div class="example space-y-2">
    <div class="space-x-3">
        <div class="avatar avatar-xs avatar-red">W</div>
        <div class="avatar avatar-sm avatar-red">WW</div>
        <div class="avatar avatar-md avatar-red">WW</div>
        <div class="avatar avatar-lg avatar-red">WW</div>
        <div class="avatar avatar-xl avatar-red">WW</div>
        <div class="avatar avatar-2xl avatar-red">WW</div>
    </div>
    <div class="space-x-3">
        <div class="avatar avatar-filled avatar-xs avatar-red">W</div>
        <div class="avatar avatar-filled avatar-sm avatar-red">WW</div>
        <div class="avatar avatar-filled avatar-md avatar-red">WW</div>
        <div class="avatar avatar-filled avatar-lg avatar-red">WW</div>
        <div class="avatar avatar-filled avatar-xl avatar-red">WW</div>
        <div class="avatar avatar-filled avatar-2xl avatar-red">WW</div>
    </div>
</div>

<h5>Green</h5>
<div class="example space-y-2">
    <div class="space-x-3">
        <div class="avatar avatar-xs avatar-green">W</div>
        <div class="avatar avatar-sm avatar-green">WW</div>
        <div class="avatar avatar-md avatar-green">WW</div>
        <div class="avatar avatar-lg avatar-green">WW</div>
        <div class="avatar avatar-xl avatar-green">WW</div>
        <div class="avatar avatar-2xl avatar-green">WW</div>
    </div>
    <div class="space-x-3">
        <div class="avatar avatar-filled avatar-xs avatar-green">W</div>
        <div class="avatar avatar-filled avatar-sm avatar-green">WW</div>
        <div class="avatar avatar-filled avatar-md avatar-green">WW</div>
        <div class="avatar avatar-filled avatar-lg avatar-green">WW</div>
        <div class="avatar avatar-filled avatar-xl avatar-green">WW</div>
        <div class="avatar avatar-filled avatar-2xl avatar-green">WW</div>
    </div>
</div>

<h5>Yellow</h5>
<div class="example space-y-2">
    <div class="space-x-3">
        <div class="avatar avatar-xs avatar-yellow">W</div>
        <div class="avatar avatar-sm avatar-yellow">WW</div>
        <div class="avatar avatar-md avatar-yellow">WW</div>
        <div class="avatar avatar-lg avatar-yellow">WW</div>
        <div class="avatar avatar-xl avatar-yellow">WW</div>
        <div class="avatar avatar-2xl avatar-yellow">WW</div>    
    </div>
    <div class="space-x-3">
        <div class="avatar avatar-filled avatar-xs avatar-yellow">W</div>
        <div class="avatar avatar-filled avatar-sm avatar-yellow">WW</div>
        <div class="avatar avatar-filled avatar-md avatar-yellow">WW</div>
        <div class="avatar avatar-filled avatar-lg avatar-yellow">WW</div>
        <div class="avatar avatar-filled avatar-xl avatar-yellow">WW</div>
        <div class="avatar avatar-filled avatar-2xl avatar-yellow">WW</div>
    </div>
</div>

<h5>Purple</h5>
<div class="example space-y-2">
    <div class="space-x-3">
        <div class="avatar avatar-xs avatar-purple">W</div>
        <div class="avatar avatar-sm avatar-purple">WW</div>
        <div class="avatar avatar-md avatar-purple">WW</div>
        <div class="avatar avatar-lg avatar-purple">WW</div>
        <div class="avatar avatar-xl avatar-purple">WW</div>
        <div class="avatar avatar-2xl avatar-purple">WW</div>
    </div>
    <div class="space-x-3">
        <div class="avatar avatar-filled avatar-xs avatar-purple">W</div>
        <div class="avatar avatar-filled avatar-sm avatar-purple">WW</div>
        <div class="avatar avatar-filled avatar-md avatar-purple">WW</div>
        <div class="avatar avatar-filled avatar-lg avatar-purple">WW</div>
        <div class="avatar avatar-filled avatar-xl avatar-purple">WW</div>
        <div class="avatar avatar-filled avatar-2xl avatar-purple">WW</div>    
    </div>
</div>

<h5>Teal</h5>
<div class="example space-y-2">
    <div class="space-x-3">
        <div class="avatar avatar-xs avatar-teal">W</div>
        <div class="avatar avatar-sm avatar-teal">WW</div>
        <div class="avatar avatar-md avatar-teal">WW</div>
        <div class="avatar avatar-lg avatar-teal">WW</div>
        <div class="avatar avatar-xl avatar-teal">WW</div>
        <div class="avatar avatar-2xl avatar-teal">WW</div>
    </div>
    <div class="space-x-3">
        <div class="avatar avatar-filled avatar-xs avatar-teal">W</div>
        <div class="avatar avatar-filled avatar-sm avatar-teal">WW</div>
        <div class="avatar avatar-filled avatar-md avatar-teal">WW</div>
        <div class="avatar avatar-filled avatar-lg avatar-teal">WW</div>
        <div class="avatar avatar-filled avatar-xl avatar-teal">WW</div>
        <div class="avatar avatar-filled avatar-2xl avatar-teal">WW</div>
    </div>
</div>

<h5>Gray</h5>
<div class="example space-y-2">
    <div class="space-x-3">
        <div class="avatar avatar-xs avatar-gray">W</div>
        <div class="avatar avatar-sm avatar-gray">WW</div>
        <div class="avatar avatar-md avatar-gray">WW</div>
        <div class="avatar avatar-lg avatar-gray">WW</div>
        <div class="avatar avatar-xl avatar-gray">WW</div>
        <div class="avatar avatar-2xl avatar-gray">WW</div>
    </div>
    <div class="space-x-3">
        <div class="avatar avatar-filled avatar-xs avatar-gray">W</div>
        <div class="avatar avatar-filled avatar-sm avatar-gray">WW</div>
        <div class="avatar avatar-filled avatar-md avatar-gray">WW</div>
        <div class="avatar avatar-filled avatar-lg avatar-gray">WW</div>
        <div class="avatar avatar-filled avatar-xl avatar-gray">WW</div>
        <div class="avatar avatar-filled avatar-2xl avatar-gray">WW</div>
    </div>
</div>
`;
};

export const InitialsRounded = InitialsRoundedTemplate.bind();

const InitialsSquareTemplate = () => {
    return `
    <h5>Blue</h5>
    <div class="example space-y-2">
        <div class="space-x-3">
            <div class="avatar avatar-square avatar-blue avatar-xs">W</div>
            <div class="avatar avatar-square avatar-blue avatar-sm">WW</div>
            <div class="avatar avatar-square avatar-blue avatar-md">WW</div>
            <div class="avatar avatar-square avatar-blue avatar-lg">WW</div>
            <div class="avatar avatar-square avatar-blue avatar-xl">WW</div>
            <div class="avatar avatar-square avatar-blue avatar-2xl">WW</div>
        </div>
        <div class="space-x-3">
            <div class="avatar avatar-square avatar-blue avatar-filled avatar-xs">W</div>
            <div class="avatar avatar-square avatar-blue avatar-filled avatar-sm">WW</div>
            <div class="avatar avatar-square avatar-blue avatar-filled avatar-md">WW</div>
            <div class="avatar avatar-square avatar-blue avatar-filled avatar-lg">WW</div>
            <div class="avatar avatar-square avatar-blue avatar-filled avatar-xl">WW</div>
            <div class="avatar avatar-square avatar-blue avatar-filled avatar-2xl">WW</div>
        </div>
    </div>
    
    <h5>Red</h5>
    <div class="example space-y-2">
        <div class="space-x-3">
            <div class="avatar avatar-square avatar-xs avatar-red">W</div>
            <div class="avatar avatar-square avatar-sm avatar-red">WW</div>
            <div class="avatar avatar-square avatar-md avatar-red">WW</div>
            <div class="avatar avatar-square avatar-lg avatar-red">WW</div>
            <div class="avatar avatar-square avatar-xl avatar-red">WW</div>
            <div class="avatar avatar-square avatar-2xl avatar-red">WW</div>
        </div>
        <div class="space-x-3">
            <div class="avatar avatar-square avatar-filled avatar-xs avatar-red">W</div>
            <div class="avatar avatar-square avatar-filled avatar-sm avatar-red">WW</div>
            <div class="avatar avatar-square avatar-filled avatar-md avatar-red">WW</div>
            <div class="avatar avatar-square avatar-filled avatar-lg avatar-red">WW</div>
            <div class="avatar avatar-square avatar-filled avatar-xl avatar-red">WW</div>
            <div class="avatar avatar-square avatar-filled avatar-2xl avatar-red">WW</div>
        </div>
    </div>
    
    <h5>Green</h5>
    <div class="example space-y-2">
        <div class="space-x-3">
            <div class="avatar avatar-square avatar-xs avatar-green">W</div>
            <div class="avatar avatar-square avatar-sm avatar-green">WW</div>
            <div class="avatar avatar-square avatar-md avatar-green">WW</div>
            <div class="avatar avatar-square avatar-lg avatar-green">WW</div>
            <div class="avatar avatar-square avatar-xl avatar-green">WW</div>
            <div class="avatar avatar-square avatar-2xl avatar-green">WW</div>
        </div>
        <div class="space-x-3">
            <div class="avatar avatar-square avatar-filled avatar-xs avatar-green">W</div>
            <div class="avatar avatar-square avatar-filled avatar-sm avatar-green">WW</div>
            <div class="avatar avatar-square avatar-filled avatar-md avatar-green">WW</div>
            <div class="avatar avatar-square avatar-filled avatar-lg avatar-green">WW</div>
            <div class="avatar avatar-square avatar-filled avatar-xl avatar-green">WW</div>
            <div class="avatar avatar-square avatar-filled avatar-2xl avatar-green">WW</div>
        </div>
    </div>
    
    <h5>Yellow</h5>
    <div class="example space-y-2">
        <div class="space-x-3">
            <div class="avatar avatar-square avatar-xs avatar-yellow">W</div>
            <div class="avatar avatar-square avatar-sm avatar-yellow">WW</div>
            <div class="avatar avatar-square avatar-md avatar-yellow">WW</div>
            <div class="avatar avatar-square avatar-lg avatar-yellow">WW</div>
            <div class="avatar avatar-square avatar-xl avatar-yellow">WW</div>
            <div class="avatar avatar-square avatar-2xl avatar-yellow">WW</div>    
        </div>
        <div class="space-x-3">
            <div class="avatar avatar-square avatar-filled avatar-xs avatar-yellow">W</div>
            <div class="avatar avatar-square avatar-filled avatar-sm avatar-yellow">WW</div>
            <div class="avatar avatar-square avatar-filled avatar-md avatar-yellow">WW</div>
            <div class="avatar avatar-square avatar-filled avatar-lg avatar-yellow">WW</div>
            <div class="avatar avatar-square avatar-filled avatar-xl avatar-yellow">WW</div>
            <div class="avatar avatar-square avatar-filled avatar-2xl avatar-yellow">WW</div>
        </div>
    </div>
    
    <h5>Purple</h5>
    <div class="example space-y-2">
        <div class="space-x-3">
            <div class="avatar avatar-square avatar-xs avatar-purple">W</div>
            <div class="avatar avatar-square avatar-sm avatar-purple">WW</div>
            <div class="avatar avatar-square avatar-md avatar-purple">WW</div>
            <div class="avatar avatar-square avatar-lg avatar-purple">WW</div>
            <div class="avatar avatar-square avatar-xl avatar-purple">WW</div>
            <div class="avatar avatar-square avatar-2xl avatar-purple">WW</div>
        </div>
        <div class="space-x-3">
            <div class="avatar avatar-square avatar-filled avatar-xs avatar-purple">W</div>
            <div class="avatar avatar-square avatar-filled avatar-sm avatar-purple">WW</div>
            <div class="avatar avatar-square avatar-filled avatar-md avatar-purple">WW</div>
            <div class="avatar avatar-square avatar-filled avatar-lg avatar-purple">WW</div>
            <div class="avatar avatar-square avatar-filled avatar-xl avatar-purple">WW</div>
            <div class="avatar avatar-square avatar-filled avatar-2xl avatar-purple">WW</div>    
        </div>
    </div>
    
    <h5>Teal</h5>
    <div class="example space-y-2">
        <div class="space-x-3">
            <div class="avatar avatar-square avatar-xs avatar-teal">W</div>
            <div class="avatar avatar-square avatar-sm avatar-teal">WW</div>
            <div class="avatar avatar-square avatar-md avatar-teal">WW</div>
            <div class="avatar avatar-square avatar-lg avatar-teal">WW</div>
            <div class="avatar avatar-square avatar-xl avatar-teal">WW</div>
            <div class="avatar avatar-square avatar-2xl avatar-teal">WW</div>
        </div>
        <div class="space-x-3">
            <div class="avatar avatar-square avatar-filled avatar-xs avatar-teal">W</div>
            <div class="avatar avatar-square avatar-filled avatar-sm avatar-teal">WW</div>
            <div class="avatar avatar-square avatar-filled avatar-md avatar-teal">WW</div>
            <div class="avatar avatar-square avatar-filled avatar-lg avatar-teal">WW</div>
            <div class="avatar avatar-square avatar-filled avatar-xl avatar-teal">WW</div>
            <div class="avatar avatar-square avatar-filled avatar-2xl avatar-teal">WW</div>
        </div>
    </div>
    
    <h5>Gray</h5>
    <div class="example space-y-2">
        <div class="space-x-3">
            <div class="avatar avatar-square avatar-xs avatar-gray">W</div>
            <div class="avatar avatar-square avatar-sm avatar-gray">WW</div>
            <div class="avatar avatar-square avatar-md avatar-gray">WW</div>
            <div class="avatar avatar-square avatar-lg avatar-gray">WW</div>
            <div class="avatar avatar-square avatar-xl avatar-gray">WW</div>
            <div class="avatar avatar-square avatar-2xl avatar-gray">WW</div>
        </div>
        <div class="space-x-3">
            <div class="avatar avatar-square avatar-filled avatar-xs avatar-gray">W</div>
            <div class="avatar avatar-square avatar-filled avatar-sm avatar-gray">WW</div>
            <div class="avatar avatar-square avatar-filled avatar-md avatar-gray">WW</div>
            <div class="avatar avatar-square avatar-filled avatar-lg avatar-gray">WW</div>
            <div class="avatar avatar-square avatar-filled avatar-xl avatar-gray">WW</div>
            <div class="avatar avatar-square avatar-filled avatar-2xl avatar-gray">WW</div>
        </div>
    </div>
`;
};

export const InitialsSquare = InitialsSquareTemplate.bind();



const WebComponentTemplate = () => {
    return `
    <h5>Blue</h5>
    <div class="example space-y-2">
        <vs-avatar>
    </div>
`;
};

export const WebComponent = WebComponentTemplate.bind();
