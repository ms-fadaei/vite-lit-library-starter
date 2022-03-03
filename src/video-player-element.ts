import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import style from '@/modules/style';

class VideoPlayerElement extends LitElement {
  static override styles = style;

  @property()
  src = '';

  override render() {
    return html`
      <div class="video-player-element">
        <video controls src=${this.src}></video>
      </div>
    `;
  }
}

export default VideoPlayerElement;
