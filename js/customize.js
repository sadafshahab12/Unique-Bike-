// Description and Specification toggle
let description = document.querySelector(".desc");
let specification = document.querySelector(".spec");
let specPara = document.querySelector(".spec-para");
let descPara = document.querySelector(".desc-para");

specification.addEventListener("click", () => {
  specPara.style.display = "block";
  descPara.style.display = "none";
  description.style.textDecoration = "none";
  specification.style.textDecoration = "underline";
  specification.style.textDecorationColor = "red";
});

description.addEventListener("click", () => {
  specPara.style.display = "none";
  descPara.style.display = "block";
  specification.style.textDecoration = "none";
  description.style.textDecoration = "underline";
  description.style.textDecorationColor = "red";
});
