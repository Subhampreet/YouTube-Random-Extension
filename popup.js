// document.addEventListener('DOMContentLoaded', function() {
//     var randomVideoButton = document.getElementById('random-video-button');
//     var videoContainer = document.getElementById('video-container');

//     randomVideoButton.addEventListener('click', function() {
//         getRandomVideo();
//     });

//     async function getRandomVideo(genre) {
//         const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyARYHrVA3gNfk-yM4nLAoMmG5hRrhEoppw&part=snippet&maxResults=1&q=${genre} music`);
//         const data = await response.json();
        
//         if (data.items && data.items.length > 0) {
//           const videoId = data.items[0].id.videoId;
//           const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
//           window.open(videoUrl, '_blank');
//         }
//       }
      
//       // Function to handle the button click event
//       function handleButtonClick() {
//         const genreInput = document.getElementById('genre');
//         const genre = genreInput.value.trim();
        
//         if (genre) {
//           getRandomVideo(genre);
//         }
//       }
      
//       // Add click event listener to the button
//       document.getElementById('fetchBtn').addEventListener('click', handleButtonClick);

//     // async function getRandomVideo() {
//     //     const response = await fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyARYHrVA3gNfk-yM4nLAoMmG5hRrhEoppw&part=snippet&maxResults=1&q=funny');
//     //     const data = await response.json();
        
//     //     if (data.items && data.items.length > 0) {
//     //       const videoId = data.items[0].id.videoId;
//     //       const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
//     //       window.open(videoUrl, '_blank');
//     //     }
//     // }

//     //   // Add a click event listener to the browser action button
//     //chrome.action.onClicked.addListener(getRandomVideo);

//     //// AXIOS Implementation
//     // function getRandomVideo() {

//     //     const axios = require('axios');

//     //     axios.get('https://www.googleapis.com/youtube/v3/search', {
//     //         params: {
//     //             part: 'snippet',
//     //             maxResults: 1,
//     //             q: 'funny',
//     //             type: 'video',
//     //             key: 'AIzaSyARYHrVA3gNfk-yM4nLAoMmG5hRrhEoppw'
//     //         }
//     //     })
//     //     .then(function(response) {
//     //         var videoId = response.data.items[0].id.videoId;
//     //         var videoUrl = 'https://www.youtube.com/watch?v=' + videoId;

//     //         videoContainer.innerHTML = '<iframe width="560" height="315" src="' + videoUrl + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
//     //     })
//     //     .catch(function(error) {
//     //         console.log(error);
//     //     });
//     // }
// });


// // Function to fetch a random YouTube video based on a given category



  
// //   // Add a click event listener to the browser action button
// //   chrome.action.onClicked.addListener(getRandomVideo);


// Function to fetch a random YouTube video based on a given genre
async function getRandomVideo(genre) {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyARYHrVA3gNfk-yM4nLAoMmG5hRrhEoppw&part=snippet&maxResults=1&q=${genre} music`);
    const data = await response.json();
    
    if (data.items && data.items.length > 0) {
      const videoId = data.items[0].id.videoId;
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