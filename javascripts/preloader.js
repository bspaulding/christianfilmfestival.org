// Preloader.js
// --------------------
// Author:        Bradley Spaulding
// Creation Date: 2010-04-08
// Last Updated:  2010-04-08
// Description:
// Preloader.js handles the logic of preloading images. It accepts an array of image URLs to be preloaded.

function preload(imageURLs) {
  if(document.images) {
    for(imageURL in imageURLs) {
      new Image().src = imageURL;
    }
  }
}