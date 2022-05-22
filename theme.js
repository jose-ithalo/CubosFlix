const body = document.querySelector('body');
const btnTheme = document.querySelector('.btn-theme');
const btnPrevious = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
let timesClick = 0;

btnTheme.addEventListener('click', function () {
    timesClick += 1;
    if (timesClick % 2 == 1) {
        btnTheme.src = './assets/dark-mode.svg';
        btnPrevious.src = './assets/seta-esquerda-branca.svg';
        btnNext.src = './assets/seta-direita-branca.svg';
    } else {
        btnTheme.src = './assets/light-mode.svg';
        btnPrevious.src = './assets/seta-esquerda-preta.svg';
        btnNext.src = './assets/seta-direita-preta.svg';
    }

    const newTheme = body.style.getPropertyValue('--background-color') === '#242424' ? '#FFF' : '#242424';
    body.style.setProperty('--background-color', newTheme);

    const newInput = body.style.getPropertyValue('--input-border-color') === '#FFFFFF' ? '#979797' : '#FFFFFF';
    body.style.setProperty('--input-border-color', newInput);

    const newColor = body.style.getPropertyValue('--color') === '#fff' ? '#000' : '#fff';
    body.style.setProperty('--color', newColor);

    const newShadow = body.style.getPropertyValue('--shadow-color') === '0px 4px 8px rgba(237, 245, 245, 0.466)' ? '0px 4px 8px rgba(0, 0, 0, 0.15)' : '0px 4px 8px rgba(237, 245, 245, 0.466)';
    body.style.setProperty('--shadow-color', newShadow);

    const newHighLight = body.style.getPropertyValue('--highlight-background') === '#454545' ? '#fff' : '#454545';
    body.style.setProperty('--highlight-background', newHighLight);

    const newHighLightColor = body.style.getPropertyValue('--highlight-color') === 'rgba(255, 255, 255, 0.7)' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)';
    body.style.setProperty('--highlight-color', newHighLightColor);

    const newHighLightDesc = body.style.getPropertyValue('--highlight-description') === '#FFFFFF' ? '#000' : '#FFFFFF';
    body.style.setProperty('--highlight-description', newHighLightDesc);

});

