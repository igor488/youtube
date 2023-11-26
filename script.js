function changeVideo(videoId) {
    const videoPlayer = document.getElementById('video-player').getElementsByTagName('iframe')[0];
    videoPlayer.src = `https://www.youtube.com/embed/${videoId}`;
}
