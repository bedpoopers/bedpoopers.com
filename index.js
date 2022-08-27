'use strict';
(function() {
  const NUMPHOTOS = 352;

  window.addEventListener('load', init);

  function init() {
    let photos = document.querySelectorAll('.photo');
    console.log(photos);
    for (let i = 0; i < photos.length; i++) {
      let x = Math.floor((Math.random() * 352)+1);;
      photos[i].src = "img/img (" + x + ").jpg";
      photos[i].addEventListener('mouseover', changePhoto);
      photos[i].addEventListener('click', changePhoto);
    }
  }

  function changePhoto(){
    console.log("changePhoto called");
    let x = Math.floor((Math.random() * 352)+1);;
    this.src = "img/img (" + x + ").jpg";
  }
})();