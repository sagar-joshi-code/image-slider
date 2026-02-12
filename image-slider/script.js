//storing images
const image = [
  "../image/img1.jpg",
  "../image/img2.jpg",
  "../image/img3.jpg",
  "../image/img4.jpg",
];

let currIndex = 0;
const sliderImg = document.getElementById("sliderImage");
sliderImg.src = image[currIndex];

//selecting next buttom
const nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", () => {
  currIndex++;
  if (currIndex === image.length) {
    currIndex = 0;
  }
  sliderImg.src = image[currIndex];
});

//selecting previous buttom
const preBtn = document.getElementById("prevBtn");
preBtn.addEventListener("click", () => {
  currIndex--;
  if (currIndex < 0) {
    currIndex = image.length - 1;
  }
  sliderImg.src = image[currIndex];
});
