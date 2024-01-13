document.addEventListener('DOMContentLoaded', () => {
  fetch('db.json')
    .then((resp) => resp.json())
    .then((data) => {
      const moviesContainer = document.getElementById('movies-container');

      const films = data.films;
      const firstMovie = films[0];

      const moviesDetails = document.createElement('div');
      moviesDetails.classList.add('movies-details');

      const title = document.createElement('h2');
      title.classList.add('movie-title');
      title.textContent = `Title: ${firstMovie.title}`;

      const runtime = document.createElement('p');
      runtime.classList.add('runtime');
      runtime.textContent = `Runtime: ${firstMovie.runtime}`;

      const capacity = document.createElement('p');
      capacity.classList.add('capacity');
      capacity.textContent = `Capacity: ${firstMovie.capacity}`;

      const showtime = document.createElement('p');
      showtime.classList.add('showtime');
      showtime.textContent = `Showtime: ${firstMovie.showtime}`;

      const availableTicket = document.createElement('p');
      availableTicket.classList.add('available-tickets');
      availableTicket.textContent = `Available Tickets: ${
        firstMovie.capacity - firstMovie.tickets_sold
      }`;

      const description = document.createElement('p');
      description.classList.add('movie-description');
      description.textContent = `Movie's Description: ${firstMovie.description}`;

      const posterImg = document.createElement('img');
      posterImg.classList.add('movie-poster');
      posterImg.src = firstMovie.poster;
      posterImg.alt = firstMovie.title;

      moviesContainer.appendChild(moviesDetails);
      moviesDetails.appendChild(title);
      moviesDetails.appendChild(posterImg);
      moviesDetails.appendChild(runtime);
      moviesDetails.appendChild(capacity);
      moviesDetails.appendChild(showtime);
      moviesDetails.appendChild(availableTicket);
      moviesDetails.appendChild(description);
    });
});
