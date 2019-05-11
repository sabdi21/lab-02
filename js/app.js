// ============GLOBAL VARIABLES============================

// const photos = [];

// const keyword = [];

// ================ ITEM REFERENCES STORED IN A CONSTRUCTOR================
function Photo(image) {
  this.image_url= image.image_url; 
  this.title= image.title;
  this.description= image.description;
  this.keyword= image.keyword;
  this.horns = image.horns;
}

//=================adding photos to the DOM=========================
Photo.readJson = (page) => {
  
  $.get(`data/page-${page}.json`) 
    .then(jsonPhotos => {
  
      // adds new photos to the photo constructor array====
      Photo.all = []; 
      jsonPhotos.forEach(photo => {
        Photo.all.push(new Photo(photo))
      });
  
      Photo.all.forEach(photo => {
        $('main').append(photo.render());
      })
    });


}
// =================== RENDERS PHOTOS TO THE DOM ==================
Photo.prototype.render = function() {
  const clone = $(`#photo-container`).clone();
  
  clone.removeAttr(`id`);
  clone.find(`h2`).text(this.title);
  clone.find(`img`).attr(`src`, this.image_url);
  clone.find(`img`).attr(`alt`, this.title);
  clone.find(`p`).html(this.description);
  clone.attr(`data-keyword`, this.keyword);

  return clone;
}

function keywordList() {
  const keywordAarray= [];
  // Photo.all = [];

  // Photo.all.forEach(photo => {
  //   keywordAarray.push(photo.keyword)
  // });
  // console.log(keywordAarray);
  

  const selectElement = $('#keyword-list').text();

  selectElement.append("<option>");
  // opt.removeAttr('id');
  // opt.attr('value', 'test');
  console.log($('select')[0])
  $('select')[0].append(opt);
  console.log('keyword list');

  // keyword.all();
}

// Photo.prototype.render = function() {
//   let photoTemplate = Handlebars.compile($('#photo').html());
 
//   return photoTemplate(this);
// };
 
// }).then(() => {

// });


//       // populate <select> element with options
//       // based on keywords array

//     }).then(() => {
//
//       // wire up an event handler that will listen
//       // for the 'change' event
//       // and show only photos that match selected value
//       // should show all if on 'default' selection
// $('select').on('change', function() {

//   const selectedValue = $(this).val();

//   if(selectedValue === 'default') {
//     $('section').show();

//   } else {
//     $('section').hide();{

//     }

//   }
// })
// });
//       });
//     });
// }

// ===== seting img width and height======


// ==========when jQuery says document is ready then call function to load photo data=========
$(document).ready(function() {
  Photo.readJson(1);
  keywordList();
});


// ANOTHER WAY TO WRITE ON READY FUNCTION ABOVE*********
// $(() => {
//   Photo.readJson();
// });
// }
