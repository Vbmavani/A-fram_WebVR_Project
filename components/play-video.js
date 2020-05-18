AFRAME.registerComponent('play-video', {
  schema: {
    src: {
      type: 'string'
    }
  },
  init: function () {
    var data = this.data;
    var videoSphere = document.querySelector('a-videosphere');
    this.el.addEventListener('click', function () {
      var element = document.querySelector('.fade');
      if (videoSphere.classList.contains('isPlaying')) {
        videoSphere.pause();
        element.emit('fade');

        setTimeout(function () {

          document.querySelector('[environment]').setAttribute('environment', 'preset: threetowers;active: true');
          videoSphere.classList.remove('isPlaying');
          element.parentNode.setAttribute('visible', 'false');

        }, 1000);

      } else {
        element.parentNode.setAttribute('visible', 'true');
        element.emit('fade');

        setTimeout(function () {

          document.querySelector('[environment]').setAttribute('environment', 'preset: threetowers;active: false');
          videoSphere.setAttribute('src', data.src);
          videoSphere.play();
          videoSphere.classList.add('isPlaying');
        }, 1000);
      }
    });
  }
});
