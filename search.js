const input = document.querySelector('input');

input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && input.value !== '') {
        allMovies = [];
        const urlMovie = ' https://tmdb-proxy.cubos-academy.workers.dev/3/search/movie?language=pt-BR&include_adult=false**&query=';
        fetch(urlMovie + input.value).then(function (response) {
            const promiseBody = response.json();

            promiseBody.then(function (body) {
                body.results.forEach(function (movie) {
                    allMovies.push(movie);
                })

                showMovies(0, 5);
                input.value = '';
                console.log(allMovies);

            });
        });

    } else if (event.key === 'Enter' && input.value === '') {
        allMovies = [];
        init();

    };

});
