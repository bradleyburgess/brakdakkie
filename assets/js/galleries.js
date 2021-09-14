const pswpElement = document.querySelectorAll(".pswp")[0];

// Create galleries

const cottageOne = [
  {
    src: "../assets/img/cottage1-bed.jpg",
    w: 750,
    h: 560,
  },
  {
    src: "../assets/img/cottage1-bath1.jpg",
    w: 750,
    h: 563,
  },
  {
    src: "../assets/img/cottage1-bath2.jpg",
    w: 750,
    h: 560,
  },
  {
    src: "../assets/img/cottage1-kitchen1.jpg",
    w: 750,
    h: 560,
  },
  {
    src: "../assets/img/cottage1-kitchen2.jpg",
    w: 750,
    h: 560,
  },
  {
    src: "../assets/img/cottage1-outside.jpg",
    w: 640,
    h: 480,
  },
];

const cottageTwo = [
  {
    src: "../assets/img/cottage2-bed.jpg",
    w: 750,
    h: 563,
  },
  {
    src: "../assets/img/cottage2-bath1.jpg",
    w: 640,
    h: 480,
  },
  {
    src: "../assets/img/cottage2-bath2.jpg",
    w: 640,
    h: 478,
  },
  {
    src: "../assets/img/cottage2-living1.jpg",
    w: 480,
    h: 640,
  },
  {
    src: "../assets/img/cottage2-living2.jpg",
    w: 640,
    h: 480,
  },
];

const cottageThree = [
  {
    src: "../assets/img/cottage3-bed.jpg",
    w: 750,
    h: 560,
  },
  {
    src: "../assets/img/cottage3-bath.jpg",
    w: 450,
    h: 602,
  },
  {
    src: "../assets/img/cottage3-kitchen.jpg",
    w: 750,
    h: 560,
  },
  {
    src: "../assets/img/cottage3-nook.jpg",
    w: 450,
    h: 602,
  },
  {
    src: "../assets/img/cottage3-outside.jpg",
    w: 640,
    h: 480,
  },
];

const cottageFour = [
  {
    src: "../assets/img/cottage4-bed.jpg",
    w: 750,
    h: 560,
  },
  {
    src: "../assets/img/cottage4-bath1.jpg",
    w: 450,
    h: 602,
  },
  {
    src: "../assets/img/cottage4-bath2.jpg",
    w: 750,
    h: 560,
  },
  {
    src: "../assets/img/cottage4-kitchen1.jpg",
    w: 750,
    h: 560,
  },
  {
    src: "../assets/img/cottage4-kitchen2.jpg",
    w: 750,
    h: 560,
  },
  {
    src: "../assets/img/cottage4-outside.jpg",
    w: 750,
    h: 560,
  },
];

// define options (if needed)
const options = {
  allowPanToNex: true,
  clickToCloseNonZoomable: false,
  closeOnScroll: false,
  index: 0, // default to 0: start at first slide
  pinchToClose: true,
  showHideOpacity: true,
  zoomEl: true,
};

function loadGallery(g, ix) {
  if (!isNaN(ix)) {
    options.index = ix; // if index is provided, update options,
  } else {
    options.index = 0;
  } // else reset index to 0
  const gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, g, options);
  gallery.init();
}

// Add event listeners for galleries:
// Cottage 1
document.querySelectorAll(".cottage1__button").forEach((item) =>
  item.addEventListener("click", () => {
    loadGallery(cottageOne, parseInt(item.dataset.index)); // feed index to func
  })
);
document.querySelectorAll(".gallery1__pic").forEach((pic) => {
  pic.addEventListener("click", () => {
    loadGallery(cottageOne, parseInt(pic.dataset.index));
  });
});

// Cottage 2
document
  .querySelectorAll(".cottage2__button")
  .forEach((item) =>
    item.addEventListener("click", () => loadGallery(cottageTwo))
  );
document.querySelectorAll(".gallery2__pic").forEach((pic) => {
  pic.addEventListener("click", () => {
    loadGallery(cottageTwo, parseInt(pic.dataset.index));
  });
});

// Cottage 3
document
  .querySelectorAll(".cottage3__button")
  .forEach((item) =>
    item.addEventListener("click", () => loadGallery(cottageThree))
  );
document.querySelectorAll(".gallery3__pic").forEach((pic) => {
  pic.addEventListener("click", () => {
    loadGallery(cottageThree, parseInt(pic.dataset.index));
  });
});

// Cottage 4
document
  .querySelectorAll(".cottage4__button")
  .forEach((item) =>
    item.addEventListener("click", () => loadGallery(cottageFour))
  );
document.querySelectorAll(".gallery4__pic").forEach((pic) => {
  pic.addEventListener("click", () => {
    loadGallery(cottageFour, parseInt(pic.dataset.index));
  });
});
