const cars = ["../img/car1.png", "../img/car2.png", "../img/car3.png", "../img/car4.png"];
let current = 0;
const slider = document.querySelector(".hero-slider");

function showNextCar() {
  const prev = slider.querySelector(".car.active");
  if (prev) prev.classList.remove("active");

  let img = slider.querySelector(`img[src="${cars[current]}"]`);
  if (!img) {
    img = document.createElement("img");
    img.src = cars[current];
    img.classList.add("car");
    slider.appendChild(img);
  }

  img.classList.add("active");
  current = (current + 1) % cars.length;
}

setInterval(showNextCar, 3000);