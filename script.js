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
        <h4 id='movie-tickets'>Available Tickets: ${
          movie.capacity - movie.tickets_sold
        } tickets</h4>
        <h4>Start Time: ${movie.showtime}</h4>
        <button id='btn-ticket'>Buy Ticket</button>
        `;
  moviesList.appendChild(card);
  card.querySelector("#btn-ticket").addEventListener("click", () => {
    let buyTickets = movie.capacity - movie.tickets_sold;
    buyTickets--;
    card.querySelector(
      "#movie-tickets"
    ).textContent = `Available Tickets: ${buyTickets} tickets`;
    updateTickets(movie);
  });
};

const updateTickets = (ticket) => {
  fetch(`http://localhost:3000/films/${ticket.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ticket),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

fetch("http://localhost:3000/films")
  .then((res) => res.json())
  .then((data) => data.forEach((movie) => renderMovies(movie)));
