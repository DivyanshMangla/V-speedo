var locHref = location.href.split('/');
fileExt = locHref[locHref.length - 1];
if (fileExt.toString().indexOf('.mp4') != -1) {
  console.log("This one is a MP4 file");

  // add the keydown listener
  document.onkeydown = function (event) {
    // console.log(event);
    if (event.keyCode == 39) {
      console.log("Forward button pressed");
      document.getElementsByTagName('video')[0].currentTime += 5;
    } else if (event.keyCode == 37) {
      console.log("Back button pressed");
      document.getElementsByTagName('video')[0].currentTime -= 5;
    }
  }
}
