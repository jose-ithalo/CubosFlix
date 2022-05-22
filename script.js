const movieFild = document.querySelector('.movies');

let allMovies = [];
let moviesTemp = [];

const url = 'https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false'

async function getMovies() {
    const response = await fetch(url);
    const body = await response.json();

    body.results.forEach(function (movie) {
        allMovies.push(movie);
    })

}

function showMovies(start, end) {
    movieFild.textContent = '';
    moviesTemp = allMovies.slice(start, end);
    moviesTemp.forEach(function (movie) {
        const imageDiv = document.createElement('div');
        imageDiv.style.backgroundImage = `url(${movie.poster_path})`;
        imageDiv.classList.add('movie');

        const infoDiv = document.createElement('div');
        infoDiv.classList.add('movie__info');

        const title = document.createElement('span');
        title.textContent = movie.title;
        title.classList.add('movie__title');

        const infoPoints = document.createElement('div');

        const star = document.createElement('img');
        star.src = './assets/estrela.svg';
        star.alt = 'estrela';

        const average = document.createElement('span');
        average.textContent = movie.vote_average;
        average.classList.add('movie__rating');


        infoPoints.append(star, average);
        infoDiv.append(title, infoPoints);
        imageDiv.append(infoDiv);
        movieFild.append(imageDiv);



        imageDiv.addEventListener('click', function () {
            openModal(movie.id);

        });

    });

};


const init = async () => {
    await getMovies();
    showMovies(0, 5);
}

init();

