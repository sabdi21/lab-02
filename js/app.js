// ============GLOBAL VARIABLES============================

const photos = [];

const keyword = [];

// ================ ITEM REFERENCES STORED IN A CONSTRUCTOR================
function Photo(image) {
  this.image_url= image.image_url;
  this.title= image.title;
  this.description= image.description;
  this.keyword= image.keyword;
  this.horns = image.horns;
}

// =================== RENDERS PHOTOS TO THE DOM ==================
let hornKeys = [];
Photo.allPhotos = [];

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
  const selectElement = $('#keyword-list');

  Photo.all.forEach(photo => {
    selectElement.append('<option>' + photo.keyword + '</option>')
  });
}


//=================adding photos to the DOM=========================
Photo.readJson = () => {
  $.get('data/page-1.json')
    .then(data => {
      data.forEach(obj => {
        Photo.allPhotos.push(new Photo(obj));
      });
    })
  $.get('data/page-2.json', 'json')
    .then(data => {
      data.forEach( obj => {
        Photo.allPhotos.push(new Photo(obj));
      });
    })
    .then(Photo.loadHorns);
}

$('#gal1').on('click', () => {
  console.log('gal2');
  runSwitch(1);
})

$('#gal2').on('click', () => {
  console.log('gal1');
  runSwitch(2);
})

const runSwitch = (gallery) => {
  $('div').remove();
  hornKeys = [];
  $('option').not(':first').remove();
  switch(gallery){
    case 1: 
    for(let i = 0; i < 20; i++){
      Photo.allPhotos[i].render(i);
      console.log('case 1');
    }
    break;
    case 2:
    for(let i = 20; i < 40; i++){
      Photo.allPhotos[i].render(i);
      console.log('case 2');
    }
  };
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
