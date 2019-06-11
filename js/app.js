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
let photoKeys = [];
Photo.allPhotos = [];

Photo.prototype.render = function() {
  const clone = $(`#photo-container`).clone();

  clone.removeAttr(`id`);
  clone.find(`h2`).text(this.title);
  clone.find(`img`).attr(`src`, this.image_url);
  clone.find(`img`).attr(`alt`, this.title);
  clone.find(`p`).html(this.description);
  clone.attr(`data-keyword`, this.keyword);
    if (!photoKeys.includes(this.class)){
       photoKeys.push(this.class);
        $('select').append(`<option value="${this.class}"> ${this.class} </option>`);
  };
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
    .then(Photo.loadPhotos);
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
  photoKeys = [];
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

Photo.loadPhotos = () => {
  Photo.allPhotos.forEach( (photo, idx) => photo.render(idx));
  runSwitch(1);
};

$(() =>   Photo.readJson());

$('select').on('change', (selection) => {
  console.log($('select :selected').val());
  const pictures = $('div').get();
  console.log('horned pictures', pictures);
  $('div').hide();
  pictures.forEach( val => {
    if(val.className === $('select :selected').val()){
      console.log($(`div .${val.className}`));
       $(`div.${val.className}`).show();
    };
  });
});

// ===== seting img width and height======


// ==========when jQuery says document is ready then call function to load photo data=========
$(document).ready(function() {
  Photo.readJson(1);
  keywordList();
});


// ANOTHER WAY TO WRITE ON READY FUNCTION ABOVE*********
