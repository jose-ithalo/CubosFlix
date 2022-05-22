const modal = document.querySelector('.modal');
const titleModal = document.querySelector('.modal__title');
const imgModal = document.querySelector('.modal__img');
const closeIcon = document.querySelector('.modal__close');
const modalDescription = document.querySelector('.modal__description');
const modalGenres = document.querySelector('.modal__genres');
const modalAvarege = document.querySelector('.modal__average');

function openModal(id) {
    const urlModal = 'https://tmdb-proxy.cubos-academy.workers.dev/3/movie/';
    fetch(urlModal + id + '?language=pt-BR').then(function (response) {
        const promiseBody = response.json();

        promiseBody.then(function (body) {
            titleModal.textContent = body.title;
            imgModal.src = body.backdrop_path;
            modalDescription.textContent = body.overview;
            modalAvarege.textContent = body.vote_average;
            modalGenres.textContent = '';

            body.genres.forEach(function (genre) {
                const modalGenre = document.createElement('span');
                modalGenre.textContent = genre.name;
                modalGenre.classList.add('modal__genre');

                modalGenres.append(modalGenre);

            });

        });
    });


    modal.classList.remove('hidden');
};

modal.addEventListener('click', function () {
    modal.classList.add('hidden');
});