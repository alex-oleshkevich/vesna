import { LitElement } from 'lit';
export type AvatarSize = '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export type AvatarColor = 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'teal' | 'gray';
export type AvatarShape = 'rounded' | 'square';
export type AvatarStatusColor = '' | 'gray' | 'green';
export type AvatarStatusPosition = 'top' | 'bottom';
export declare class Avatar extends LitElement {
    size: AvatarSize;
    color: AvatarColor;
    shape: AvatarShape;
    status: AvatarStatusColor;
    statusPosition: AvatarStatusPosition;
    render(): import("lit-html").TemplateResult<1>;
    protected createRenderRoot(): Element | ShadowRoot;
}
