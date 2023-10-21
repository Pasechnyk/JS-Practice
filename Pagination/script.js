// Personal API key
const apiKey = 'c3428c66';

const form = document.getElementById('movie-search-form');
const resultsContainer = document.getElementById('movie-results');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const movieTitle = document.getElementById('movie-title').value;
    const releaseYear = document.getElementById('release-year').value;

    // Construct the API URL
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}&y=${releaseYear}`;

    // API request
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                const movieDetails = `
                    <div class="movie-item">
                        <h2>${data.Title} (${data.Year})</h2>
                        <p><strong>Genre:</strong> ${data.Genre}</p>
                        <p><strong>Director:</strong> ${data.Director}</p>
                        <p><strong>Plot:</strong> ${data.Plot}</p>
                    </div>
                `;
                resultsContainer.innerHTML = movieDetails;
            } else { resultsContainer.innerHTML = `<p>No results found.</p>`; }
        })
        .catch(error => {
            resultsContainer.innerHTML = `<p>Error occurred: ${error.message}</p>`;
        });
});
