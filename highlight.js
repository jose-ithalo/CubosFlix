const highlightFild = document.querySelector('.highlight');
const videoFild = document.querySelector('.highlight__video');
const link = document.querySelector('.highlight__video-link');
const titleMovie = document.querySelector('.highlight__title');
const ratingMovie = document.querySelector('.highlight__rating');
const genres = document.querySelector('.highlight__genres');
const launchDate = document.querySelector('.highlight__launch');
const description = document.querySelector('.highlight__description');

const loadHighLight = async () => {
    const responseGeral = await fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969?language=pt-BR');
    const responseVideo = await fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969/videos?language=pt-BR');
    const bodyGeral = await responseGeral.json();
    const bodyVideo = await responseVideo.json();


    videoFild.style.backgroundImage = `url(${bodyGeral.backdrop_path})`;
    videoFild.style.backgroundSize = 'cover';

    titleMovie.textContent = bodyGeral.title;
    ratingMovie.textContent = bodyGeral.vote_average;

    link.href = 'https://www.youtube.com/watch?v=' + bodyVideo.results[0].key;

    genres.textContent = `${bodyGeral.genres[0].name}, ${bodyGeral.genres[1].name}, ${bodyGeral.genres[2].name}`;

    const usaDate = new Date(bodyGeral.release_date);
    launchDate.textContent = usaDate.toLocaleDateString('pt-br').replaceAll('/', '-');

    description.textContent = bodyGeral.overview;

}

loadHighLight();
