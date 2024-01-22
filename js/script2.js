var video = document.getElementById('scrollable-video');
var isPlaying = false;

// Adjust the speed value according to your preference
video.playbackRate = 0.5;

// Check the visibility of the video on scroll
document.addEventListener('scroll', function() {
    checkVideoVisibility();
});

// Pause or play the video based on visibility
function checkVideoVisibility() {
    if (isElementInViewport(video)) {
        if (!isPlaying) {
            video.play();
            isPlaying = true;
        }
    } else {
        if (isPlaying) {
            video.pause();
            isPlaying = false;
        }
    }
}

// Check if the video is in the viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}
