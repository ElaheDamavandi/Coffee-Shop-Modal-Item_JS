 // Grab elements functions
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Somthing went, make sure that ${selector} exists or is typed correctly.`
  );
};

const selectAllElements = (selector) => {
  const element = document.querySelectorAll(selector);
  if (element) return element;
  throw new Error(
    `Somthing went, make sure that ${selector} exists or is typed correctly.`
  );
};

//Grab Elements from the DOM
const storeItems = selectAllElements('.store-item');
const lightBox = selectElement('.lightbox-container');
const lightBoxItem = selectElement('.lightbox-item');
const images = selectAllElements('.store-img');
let imageCounter = 0;

  // set up an array for the items
  const imagesList = [];
  images.forEach(image => {
    imagesList.push(image.src);
  });

  //function which show lightBox modal
  const showLightBox = (imageSrc) => {
    lightBoxItem.style.backgroundImage = `url(${imageSrc})`;
    lightBox.classList.add('show');
    imageCounter = imagesList.indexOf(imageSrc);
  };


  //Add an a click event listener to each store item
  storeItems.forEach(item => {
    item.addEventListener('click', (clickedItem) =>{
      showLightBox(clickedItem.target.src);
    })
  })

  const prevBtn = () => {
    imageCounter--;
    if (imageCounter < 0){
      imageCounter = imagesList.length -1
    }
    lightBoxItem.style.backgroundImage = `url(${imagesList[imageCounter]})`;
  };

  const nextBtn = () => {
    imageCounter++;
    if(imageCounter > imagesList.length-1){
      imageCounter = 0;
    }
    lightBoxItem.style.backgroundImage = `url(${imagesList[imageCounter]})`
  };

  //setup left and right Buttons
  const btnLeft = selectElement('.btnLeft');
  btnLeft.addEventListener('click', () =>{
    prevBtn();
  }) 

  const btnRight = selectElement('.btnRight');
  btnRight.addEventListener('click', () =>{
    nextBtn();
  })


   //set up the modal's close button
   const lightBoxClose = selectElement('.lightbox-close');
   lightBoxClose.addEventListener('click', () => {
    lightBox.classList.remove('show');
   });


