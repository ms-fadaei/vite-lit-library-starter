import VideoPlayerElement from './video-player-element';

if (!window.customElements.get('custom-element')) {
  window.VideoPlayerElement = VideoPlayerElement;
  window.customElements.define('video-player-element', VideoPlayerElement);
}
