function playReviews() {
  const reviewsList = [
    {
      quote: "A little place to call home.",
      credit: "IloveCapeTown_9, July 2018",
      link:
        "https://www.tripadvisor.com/ShowUserReviews-g469393-d2519506-r592805307-Brakdakkie_Prince_Albert-Prince_Albert_Prince_Albert_Municipality_Western_Cape.html",
    },
    {
      quote: "… this is the place to rest your weary bones.",
      credit: "AndreJoubert",
      link:
        "https://www.tripadvisor.com/ShowUserReviews-g469393-d2519506-r679385360-Brakdakkie_Prince_Albert-Prince_Albert_Prince_Albert_Municipality_Western_Cape.html?m=19905",
    },
    {
      quote: "the perfect place to unwind",
      credit: "Charles B",
      link:
        "https://www.tripadvisor.com/ShowUserReviews-g469393-d2519506-r530948559-Brakdakkie_Prince_Albert-Prince_Albert_Prince_Albert_Municipality_Western_Cape.html?m=19905",
    },
    {
      quote: "a lovely haven",
      credit: "MilkyWayEyes",
      link:
        "https://www.tripadvisor.com/ShowUserReviews-g469393-d2519506-r457999246-Brakdakkie_Prince_Albert-Prince_Albert_Prince_Albert_Municipality_Western_Cape.html?m=19905",
    },
    {
      quote:
        "a quirky and enchanting adventure… delightfully out of the ordinary",
      credit: "DebbiGail",
      link:
        "https://www.tripadvisor.com/ShowUserReviews-g469393-d2519506-r449095056-Brakdakkie_Prince_Albert-Prince_Albert_Prince_Albert_Municipality_Western_Cape.html?m=19905",
    },
    {
      quote: "A Gem in the heart of Prince Albert.",
      credit: "Chutzpah78",
      link:
        "https://www.tripadvisor.com/ShowUserReviews-g469393-d2519506-r381544059-Brakdakkie_Prince_Albert-Prince_Albert_Prince_Albert_Municipality_Western_Cape.html?m=19905",
    },
    {
      quote: "It really is a special place",
      credit: "Robert Mutlow",
      link:
        "https://www.tripadvisor.com/ShowUserReviews-g469393-d2519506-r365748811-Brakdakkie_Prince_Albert-Prince_Albert_Prince_Albert_Municipality_Western_Cape.html?m=19905",
    },
    {
      quote: "Definitely a road tripping highlight.",
      credit: "Kat W",
      link:
        "https://www.tripadvisor.com/ShowUserReviews-g469393-d2519506-r352606786-Brakdakkie_Prince_Albert-Prince_Albert_Prince_Albert_Municipality_Western_Cape.html?m=19905",
    },
  ];

  const reviewsDiv = document.querySelector("#js__reviews-div");
  const reviewLink = document.querySelector("#js__review-link");
  const reviewQuote = document.querySelector("#js__review-quote");
  const reviewCredit = document.querySelector("#js__review-credit");

  let currentIndex = -1;

  function hideReview() {
    reviewsDiv.classList.remove("reviews--shown");
  }
  function showReview() {
    reviewsDiv.classList.add("reviews--shown");
  }

  function changeReview() {
    currentIndex++;
    reviewLink.href = reviewsList[currentIndex].link;
    reviewQuote.textContent = reviewsList[currentIndex].quote;
    reviewCredit.textContent = reviewsList[currentIndex].credit;
  }

  function updateReview() {
    hideReview();
    setTimeout(() => {
      changeReview(currentIndex);
      showReview();
      if (currentIndex === reviewsList.length - 1) {
        clearTimeout(reviewInterval);
      }
    }, 300);
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Shuffle the reviews, populate the first instance, and run the program:
  shuffleArray(reviewsList);
  changeReview();
  const reviewInterval = setInterval(updateReview, 3000);
}

// Run reviews function
playReviews();
