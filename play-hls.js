const video = document.getElementById('video');
const videoSrc = 'https://futgratis-two.vercel.app/api/proxy?url=http://lexus.hubns.top:80/Leonardo77/983469871/1257207.m3u8';

if (Hls.isSupported()) {
  const hls = new Hls();
  hls.loadSource(videoSrc);
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, () => {
    video.play();
  });
} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
  video.src = videoSrc;
  video.addEventListener('loadedmetadata', () => {
    video.play();
  });
}
