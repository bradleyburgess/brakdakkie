// Initilization iterates over every button:
// 1. Every button wasCliced set to false
// 2. Add event listener to every button:
//      i.   Set the clicked button wasClicked = true
//      ii.  Iterate over every button. Buttons that weren't clicked
//           are closed, and the button that wasClicked is toggled active
//      iii. Set every button to wasClicked = false at the end, to set up
//           for the next click event.

document.querySelectorAll(".accordion__button").forEach((button) => {
  button.wasClicked = false;

  button.addEventListener("click", () => {
    button.wasClicked = true;
    document.querySelectorAll(".accordion__button").forEach((button) => {
      if (button.wasClicked) {
        button.classList.toggle("accordion__button--active");
        const accordionContent = button.nextElementSibling;
        if (button.classList.contains("accordion__button--active")) {
          accordionContent.style.maxHeight =
            accordionContent.scrollHeight + "px";
        } else {
          accordionContent.style.maxHeight = 0;
        }
      } else {
        button.classList.remove("accordion__button--active");
        button.nextElementSibling.style.maxHeight = 0;
      }
    });

    button.wasClicked = false;
  });
});

// ORIGINAL ACCORDION FUNCTION:
//
// button.classList.toggle("accordion__button--active");
// const accordionContent = button.nextElementSibling;

// if (button.classList.contains("accordion__button--active")) {
//   accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
// } else {
//   accordionContent.style.maxHeight = 0;
// }
// });
