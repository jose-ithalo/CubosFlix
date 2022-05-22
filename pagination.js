const rigthArrow = document.querySelector('.btn-next');
const leftArrow = document.querySelector('.btn-prev');

let start = 0;
let end = 5;
let difference = 0;

rigthArrow.addEventListener('click', function () {

    if (end >= allMovies.length) {
        difference++;
    }
    start += 5;
    end += 5;
    console.log('end ', end);
    if (end <= allMovies.length) {
        showMovies(start, end);
    } else if (end > allMovies.length && difference < 1) {
        showMovies(start, allMovies.length);
    } else {
        start = 0;
        end = 5;
        difference = 0;
        showMovies(start, end);
    }
});

leftArrow.addEventListener('click', function () {
    if (start === 0) {
        start = allMovies.length - 5;
        end = allMovies.length;
    } else {
        start -= 5;
        end -= 5;
    }
    showMovies(start, end);
});