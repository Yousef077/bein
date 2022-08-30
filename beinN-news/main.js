var elem = document.getElementById("myy");
function openFullscreen() {
    
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
    elem.style.cssText="transform: rotate(90deg);"

  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  }
}