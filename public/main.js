window.onload = () => {

  // Static Caches for Video and Image Assets
  const videoCache = {
    '0': "./videos/10-cloverfield-lane.webm",
    '1': "./videos/allegiant.webm",
    '2': "./videos/miracles-from-heaven.webm",
    '3': "./videos/zootopia.webm",
  }

  const imgCache = {
    '0': "./images/10-cloverfield-lane.png",
    '1': "./images/allegiant.png",
    '2': "./images/miracles-from-heaven.png",
    '3': "./images/zootopia.png",
  }


  let thumbnails = [];

  // Create Thumbnails
  for (let i = 0; i < 4; i += 1) {
    thumbnails[i] = document.createElement('div');
    thumbnails[i].setAttribute('class', 'thumbnail');
    thumbnails[i].setAttribute('style', 'background-image: url(' + imgCache[i] + '); background-repeat: no-repeat center; background-size: 150px 150px');
    thumbnails[i].setAttribute('id', i);
    if (i === 1) thumbnails[i].classList.add('selected');

    // OnClick to Change Movies
    thumbnails[i].onclick = () => {
      let videoPlayer = document.getElementById('video');
      let currentVid = document.getElementById('videoSource');
      // Prevents clicking the same thumbnail to restart the preview
      if ('.' + currentVid.src.substring(21) !== videoCache[i]) {
        $('#video').fadeOut();
        $('#video').fadeOut('slow');
        $('#video').fadeOut(2000);
        videoPlayer.pause();
        $('.selected').removeClass('selected');

        setTimeout(() => {
          // Resolve New Source URL and Handle Possible Edge Case of Being at End of Map
          currentVid.src = videoCache[i];
          videoPlayer.load();
          videoPlayer.play();
          $('#video').fadeIn();
          $('#video').fadeIn('fast');
          $('#video').fadeIn(1000);
          thumbnails[i].classList.add('selected');
        }, 500);
      }
    }
    let imageContainer = document.getElementById('imageContainer');
    imageContainer.appendChild(thumbnails[i]);
  }

  document.body.addEventListener('keydown', (e) => {
    let currentVid = document.getElementById('videoSource');
    let current = '.' + currentVid.src.substring(21);

    if (e.code === 'ArrowLeft') {
      let target;

      // Find Target URL Index
      for (let x in videoCache) {
        if (videoCache[x] === current) target = x;
      }

      // Find Current Image Element By Id -> Remove / Add as Necessary to Reflect Current Preview Being Watched
      let videoPlayer = document.getElementById('video');
      let newTarget = target - 1 >= 0 ? target - 1 : 3;
      let selected = document.getElementById(newTarget);
      $('.selected').removeClass('selected');
      selected.classList.add('selected');

      // Fade Out Current Selection
      $('#video').fadeOut();
      $('#video').fadeOut('slow');
      $('#video').fadeOut(2000);
      videoPlayer.pause();

      // Set Time Out for Fade-In of Next Video
      setTimeout(() => {
        // Resolve New Source URL and Handle Possible Edge Case of Being at Beginning of Map
        currentVid.src = videoCache[target - 1] ? videoCache[target - 1] : videoCache[3];
        videoPlayer.load();
        videoPlayer.play();
        $('#video').fadeIn();
      }, 500);
    } else if (e.code === 'ArrowRight') {
      let target;

      // Find Target URL Index
      for (let x in videoCache) {
        if (videoCache[x] === current) target = x;
      }

      // Find Current Image Element By Id -> Remove / Add as Necessary to Reflect Current Preview Being Watched
      let videoPlayer = document.getElementById('video');
      let newTarget = Number(target) + 1 <= 3 ? Number(target) + 1 : 0;
      let selected = document.getElementById(newTarget);
      $('.selected').removeClass('selected');
      selected.classList.add('selected');

      // Fade Out Current Selection
      $('#video').fadeOut();
      $('#video').fadeOut('slow');
      $('#video').fadeOut(2000);
      videoPlayer.pause();

      // Set Time Out for Fade-In of Next Video
      setTimeout(() => {
        // Resolve New Source URL and Handle Possible Edge Case of Being at End of Map
        currentVid.src = videoCache[Number(target) + 1] ? videoCache[Number(target) + 1] : videoCache[0];
        videoPlayer.load();
        videoPlayer.play();
        $('#video').fadeIn();
      }, 500);
    }
  });
};