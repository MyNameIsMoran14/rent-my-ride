const cars = [
  {
    name: "Toyota Rav4",
    img: "img/car2.png",
    desc: "4.4 TwinTurbo • 600 л.с. • 2021",
    price: 180
  },
  {
    name: "Mercedes C63 AMG",
    img: "img/car3.png",
    desc: "8 казанов плова  • 5110 л.с. • 2025",
    price: 160
  }
];

const container = document.getElementById("cars-container");

function renderCars() {
  container.innerHTML = "";

  cars.forEach((car, i) => {
    const card = document.createElement("div");
    card.className = "car-card";
    card.style.animationDelay = `${i * 0.1}s`;

    card.innerHTML = `
      <img src="${car.img}" alt="${car.name}">
      <div class="car-info">
        <h2>${car.name}</h2>
        <p>${car.desc}</p>

        <div class="car-bottom">
          <span class="car-price">€${car.price} / день</span>
          <button class="rent-btn">Арендовать</button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

window.addEventListener("DOMContentLoaded", renderCars);
