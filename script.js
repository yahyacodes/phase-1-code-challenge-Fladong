// document.addEventListener("DOMContentLoaded", () => {});
const movieTitle = document.querySelector(".movie-title");
const runTime = document.querySelector(".run-time");
const movieCap = document.querySelector(".capacity");
const movieShowTime = document.querySelector(".show-time");
const tickSold = document.querySelector(".tickets-sold");
const movieDes = document.querySelector(".movie-description");

fetch("http://localhost:3000/films")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((movie) => {
      movieTitle.innerHTML = movie.title;
      runTime.innerHTML = movie.runtime;
      movieCap.innerHTML = movie.capacity;
      movieShowTime.innerHTML = movie.showtime;
    })
  );

const btn = document.querySelector(".btn-class");
btn.addEventListener("click", () => {
  console.log("Button clicked");
});
