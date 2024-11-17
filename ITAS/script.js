function toggleDescription(selectedCard) {
    // Close all other descriptions
    document.querySelectorAll(".card").forEach(card => {
        if (card !== selectedCard) {
            card.classList.remove("active");
        }
    });
    // Toggle the selected card
    selectedCard.classList.toggle("active");
}
// Function to play the video
function playVideo(videoId) {
    // Hide the thumbnails
    document.querySelector('.video-container').style.display = 'none';

    // Display the video player
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.style.display = 'block';

    // Set the video URL
    const videoFrame = document.getElementById('video-frame');
    videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}

// Function to close the video and go back to thumbnails
function closeVideo() {
    // Hide the video player
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.style.display = 'none';

    // Show the thumbnails again
    document.querySelector('.video-container').style.display = 'flex';

    // Stop the video
    const videoFrame = document.getElementById('video-frame');
    videoFrame.src = '';
}
