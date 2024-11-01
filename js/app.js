//  navbar
let navIconDiv = document.querySelector(".nav-bar-icon");
let navIcon = document.querySelector(".nav-bar-icon i");
let navLinks = document.querySelector(".nav-links");
function changeIcon() {
  if (navLinks.style.left === "0%") {
    navLinks.style.left = "-80%";
  } else {
    navLinks.style.left = "0%";
  }

  navIcon.classList.toggle("fa-xmark");
}
navIconDiv.addEventListener("click", changeIcon);

// for color

// let circles = document.querySelectorAll(".circle");

let circles = document.querySelectorAll(".circle");

circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    // Hide all color names first
    circles.forEach((c) => {
      let p = c.parentNode.querySelector("div p");
      p.style.display = "none";
    });

    // Show the name of the clicked color
    let circleParent = circle.parentNode;
    let p = circleParent.querySelector("div p");
    p.style.display = "block";
  });
});

// for bike size

let sizes = document.querySelectorAll(".size p");

sizes.forEach((size) => {
  size.addEventListener("click", () => {
    // Reset background color of all sizes
    sizes.forEach((s) => {
      s.style.backgroundColor = ""; // Reset to original color
      s.style.color = "#fff";
    });

    // Set the background color of the selected size
    size.style.backgroundColor = "gray"; // Change this color 
    size.style.color = "#000"; // Change this color
    let selectedSize = size.textContent;
    console.log(`Selected:   ${selectedSize}`); //
  });
});
