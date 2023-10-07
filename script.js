// document.addEventListener("DOMContentLoaded", () => {});
const moviesList = document.querySelector(".movies-list");

const renderMovies = (movie) => {
  const card = document.createElement("li");
  card.className = "card";
  card.innerHTML = `
        <img src = '${movie.poster}'>
        <h2>Title: ${movie.title}</h2>
        <p>Description: <span>${movie.description}</span></p>
        <h4>Runtime: ${movie.runtime} mins</h4>
        <h4>Available Tickets: ${
          movie.capacity - movie.tickets_sold
        } tickets</h4>
        <h4>Start Time: ${movie.showtime}</h4>
        <button class='btn-ticket'>Buy Ticket</button>
        `;
  moviesList.appendChild(card);
  const btnTicket = document.querySelector(".btn-ticket");
  btnTicket.addEventListener("click", () => {
    console.log("clicked");
  });
};

fetch("http://localhost:3000/films")
  .then((res) => res.json())
  .then((data) => data.forEach((movie) => renderMovies(movie)));
