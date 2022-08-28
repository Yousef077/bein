var elem = document.getElementById("myvideo");
console.log(window);
function openFullscreen() {
    
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  }
}