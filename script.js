const player = document.querySelector('#cube');
const enemy = document.querySelector('#block');
const tryAgainBtn = document.querySelector('#tryAgain');


$('#lose').fadeOut(0);

document.addEventListener('keydown', (event) => {

    if (event.key === 'ArrowUp') {
        if (player.classList != 'jump') {
            player.classList.add('jump');
        };
        setTimeout(() => {
            player.classList.remove('jump')
        }, 800);
    } else if (event.key === ' ') {
        if (player.classList != 'jump') {
            player.classList.add('jump');
        };
        setTimeout(() => {
            player.classList.remove('jump')
        }, 800);
    };

});

document.addEventListener('click', () => {
    player.classList.add('jump');

    setTimeout(() => {
        player.classList.remove('jump')
    }, 800);
});

const checkDead = setInterval(() => {
    const playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
    const enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue('left'));

    if (enemyLeft < 85 && enemyLeft > 3 && playerTop >= 150) {
        $('#lose').fadeIn(0);
    };
}, 10);


document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        $('#lose').fadeOut(0);
    };
});

tryAgainBtn.addEventListener('click', () => {
    $('#lose').fadeOut(0);
});