
import config from './config.json' assert { type: "json" };

// Function to fetch a random YouTube video based on a given genre
async function getRandomVideo(genre) {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${config.youtubeApiKey}&part=snippet&q=${genre} music&maxResults=50`);
    const data = await response.json();
    
    if (data.items && data.items.length > 0) {
      // Randomly select a video from the results
      const randomIndex = Math.floor(Math.random() * data.items.length);
      //const videoId = data.items[0].id.videoId;
      const videoId = data.items[randomIndex].id.videoId;
      const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
      window.open(videoUrl, '_blank');
    }
  }
  
  // Function to handle the button click event
  function handleButtonClick() {
    const genreInput = document.getElementById('genre');
    const genre = genreInput.value.trim();
    
    if (genre) {
      getRandomVideo(genre);
    }
  }
  
  // Add click event listener to the button
  document.getElementById('fetchBtn').addEventListener('click', handleButtonClick);
