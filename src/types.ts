import VideoPlayerElement from './video-player-element';

declare global {
  interface Window {
    VideoPlayerElement: typeof VideoPlayerElement;
  }
  interface HTMLElementTagNameMap {
    VideoPlayerElement: typeof VideoPlayerElement;
    Video: HTMLVideoElement;
  }
}
