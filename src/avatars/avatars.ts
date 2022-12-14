import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators';
import { classMap } from 'lit/directives/class-map.js';

export type AvatarSize = '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export type AvatarColor = 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'teal' | 'gray';
export type AvatarShape = 'rounded' | 'square';
export type AvatarStatusColor = '' | 'gray' | 'green';
export type AvatarStatusPosition = 'top' | 'bottom';

@customElement('vs-avatar')
export class Avatar extends LitElement {
    @property() size: AvatarSize = 'md';
    @property() color: AvatarColor = 'blue';
    @property() shape: AvatarShape = 'rounded';
    @property() status: AvatarStatusColor = '';
    @property({ attribute: 'status-position' }) statusPosition: AvatarStatusPosition = 'bottom';

    override render() {
        const classes = classMap({
            avatar: true,
            [`avatar-${this.size}`]: true,
            [`avatar-${this.color}`]: true,
            [`avatar-${this.shape}`]: true,
            [`avatar-status`]: !!this.status,
            [`avatar-status-${this.status}`]: !!this.status,
            [`avatar-status-${this.statusPosition}`]: !!this.status,
        });
        return html`<div class="${classes}">${this.children}</div>`;
    }
}
