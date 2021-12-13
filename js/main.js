document.querySelector('.clicky-boye').addEventListener('click', () => {
    document.querySelector('body').classList.toggle('flippy-boye');
    document.querySelector('.navbar').classList.toggle('open-nav');
});