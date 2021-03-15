const slidesAll = document.querySelectorAll(".slide");
const slidesContainer = document.querySelector(".slides");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
let count = 0;
let timeInterval = 4;
slidesContainer.style.width = `calc(100% * ${slidesAll.length})`;
function carsoul() {
  if (count >= slidesAll.length - 1) {
    count = slidesAll.length - 1;
    nextBtn.style.opacity = "0";
    nextBtn.style.pointerEvents = " none";
  } else if (count <= 0) {
    count = 0;
    prevBtn.style.opacity = "0";
    prevBtn.style.pointerEvents = " none";
    nextBtn.style.opacity = "1";
    nextBtn.style.pointerEvents = " all";
  } else {
    prevBtn.style.opacity = "1";
    nextBtn.style.opacity = "1";
    prevBtn.style.pointerEvents = " all";
    nextBtn.style.pointerEvents = " all";
  }
  slidesContainer.style.left = `-${count}00%`;
}
nextBtn.addEventListener("click", (e) => {
  count++;
  clearIntervals();
  carsoul();
});
prevBtn.addEventListener("click", (e) => {
  count--;
  clearIntervals();
  carsoul();
});

let intervall = setInterval(() => {
  count++;
  carsoul();
}, 1000 * timeInterval);
function clearIntervals() {
  clearInterval(intervall);
  intervall = setInterval(() => {
    ++count;
    if (count >= slidesAll.length) {
      count = 0;
    }
    carsoul();
  }, 1000 * timeInterval);
}
