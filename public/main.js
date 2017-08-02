window.onload = () => {

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
  for (let i = 0; i < 4; i += 1) {
    thumbnails[i] = document.createElement('div');
    thumbnails[i].setAttribute('class', 'thumbnail');
    thumbnails[i].setAttribute('style', 'background-image: url(' + imgCache[i] + '); background-repeat: no-repeat center; background-size: 150px 150px');

    thumbnails[i].onclick = () => {
      let videoPlayer = document.getElementById('video');
      let currentVid = document.getElementById('videoSource');
      // Prevents clicking the same thumbnail to restart the preview
      if ('.' + currentVid.src.substring(21) !== videoCache[i]) {
      videoPlayer.pause();
      currentVid.src = videoCache[i];
      videoPlayer.load();
      videoPlayer.play();
      }
    }

    thumbnails[i].keyup = (e) => {
      console.log(e.code);
      if (e.keyCode == 37) {
      let videoPlayer = document.getElementById('video');
      videoPlayer.pause();
      let currentVid = document.getElementById('videoSource');
      currentVid.src = videoCache[i - 1] ? videoCache[i - 1] : videoCache[3];
      videoPlayer.load();
      videoPlayer.play();
      } else if (e.keyCode == 39) {
        let videoPlayer = document.getElementById('video');
      videoPlayer.pause();
      let currentVid = document.getElementById('videoSource');
      currentVid.src = videoCache[i + 1] ? videoCache[i + 1] : videoCache[0];
      videoPlayer.load();
      videoPlayer.play();
      }
    }
    let imageContainer = document.getElementById('imageContainer');
    // videoContainer.appendChild(thumbnails[i]);
    imageContainer.appendChild(thumbnails[i]);
  }
};
