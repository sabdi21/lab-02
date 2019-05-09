const photosArray = [];

const keywordArray = [];

// construct a Photo given some information fetched externally
function Photo(image) {
  this.image_url= image.image_url; 
  this.title= image.title;
  this.description= image.description;
  this.keyboard= image.keyboard;
  this.horns = image.horns;
}

// adding photos to the DOM
Photo.readJson = function () {

  $.get(`data/page-1.json`, `json`) 
    .then((jsonPhotos) => {
      jsonPhotos.forEach(photo => {
        photosArray.push.apply(new Photo(photo))
      });
      Photo.all.forEach(photo => {
        $("photo").append(Photo.render());
      })
    });
}

Photo.prototype.render = function() {
  let photoTemplate = Handlebars.compile('#photo-template').html();
 
  return photoTemplate(this);
};

// do what it takes to add Photo to the DOM
   
function loadPhotoData() {

//       // convert the raw photo objects into Photo instances
//       // add each instance to photos array
//       // for each Photo instance
//       // 1) add the photo's keyword to keywords array, avoid duplicates
//       // 2) "render" the photo to the screen
      photosArray.forEach(item) 
      const itemCheck = keywords.includes(keyword)


//     }).then(() => {

//       // populate <select> element with options
//       // based on keywords array

//     }).then(() => {

//       // wire up an event handler that will listen
//       // for the 'change' event
//       // and show only photos that match selected value
//       // should show all if on 'default' selection

// });
//       });
//     });
// }


// when jQuery says document is ready then call function to load photo data
$(document).ready(function() {
  Photo.readJson();
});


// ANOTHER WAY TO WRITE ON READY FUNCTION ABOVE*********
// $(() => {
//   Photo.readJson();
// });
