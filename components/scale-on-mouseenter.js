AFRAME.registerComponent('scale-on-mouseenter', {
  init: function () {
    var data = this.data;
    var child = this.el.children[0];
    this.el.addEventListener('mouseenter', function () {
      child.data.direction = "normal";
      child.emit('toggle');
    });
    this.el.addEventListener('mouseleave', function () {
      child.data.direction = "reverse";
      child.emit('toggle');
    });
  }
});

