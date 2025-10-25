document.addEventListener('DOMContentLoaded', () => {
    initGame1();
    initGame2();
    initGame3();
});

function initGame1() {
    const gato = document.getElementById('gato');
    const gameContainer = document.getElementById('game1-container');
    const scoreText = document.getElementById('gato-score-text');
    const livesText = document.getElementById('gato-lives-text');
    const interactables = gameContainer.querySelectorAll('.interactable');

    let score = 0;
    let lives = 1;
    let playerX = 350;
    let playerY = 400;
    const playerSpeed = 15;
    const playerWidth = 70;
    const playerHeight = 70;
    const gameWidth = 750;
    const gameHeight = 500;

    let controlActivo = false;

    function renderPlayer() {
        gato.style.left = playerX + 'px';
        gato.style.top = playerY + 'px';
    }
    renderPlayer();

    function activarControl(e) {
        controlActivo = true;
        gameContainer.classList.add('control-activo');
        e.stopPropagation();
    }
    gameContainer.addEventListener('click', activarControl);
    gato.addEventListener('click', activarControl);

    document.addEventListener('click', function(e) {
        if (!gameContainer.contains(e.target)) {
            controlActivo = false;
            gameContainer.classList.remove('control-activo');
        }
    });

    gameContainer.setAttribute('tabindex', '0');
    gameContainer.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            controlActivo = true;
            gameContainer.classList.add('control-activo');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (!controlActivo) return;
        switch (e.key) {
            case 'ArrowUp':
                playerY -= playerSpeed;
                break;
            case 'ArrowDown':
                playerY += playerSpeed;
                break;
            case 'ArrowLeft':
                playerX -= playerSpeed;
                gato.style.transform = 'scaleX(-1)';
                break;
            case 'ArrowRight':
                playerX += playerSpeed;
                gato.style.transform = 'scaleX(1)';
                break;
        }

        if (playerX < 0) playerX = 0;
        if (playerX + playerWidth > gameWidth) playerX = gameWidth - playerWidth;
        if (playerY < 0) playerY = 0;
        if (playerY + playerHeight > gameHeight) playerY = gameHeight - playerHeight;

        renderPlayer();
        checkCollisions();
    });

    function checkCollisions() {
        interactables.forEach(item => {
            if (item.style.display === 'none') return;

            const itemX = item.offsetLeft;
            const itemY = item.offsetTop;
            const itemWidth = item.offsetWidth;
            const itemHeight = item.offsetHeight;

            if (
                playerX < itemX + itemWidth &&
                playerX + playerWidth > itemX &&
                playerY < itemY + itemHeight &&
                playerY + playerHeight > itemY
            ) {
                collectItem(item);
            }
        });
    }

    function collectItem(item) {
        item.style.display = 'none';

        if (item.id.includes('pez')) {
            score += 10; 
        } else if (item.id.includes('moneda')) {
            score += 50; 
        } else if (item.id.includes('corazon')) {
            lives++; 
        }

        scoreText.textContent = score;
        livesText.textContent = lives;
    }
}

function initGame2() {
    const gameContainer = document.getElementById('game2-container');
    const scoreText = document.getElementById('vaca-score-text');
    const items = gameContainer.querySelectorAll('.interactable');
    let score = 0;

    items.forEach(item => {
        item.addEventListener('click', () => {
            item.style.display = 'none';

            if (item.id.includes('anim')) {
                score += 25;
            } else {
                score += 10;
            }
            
            scoreText.textContent = score;
        });
    });
}

function initGame3() {
    const gameContainer = document.getElementById('game3-container');
    const scoreText = document.getElementById('comida-score-text');
    const items = gameContainer.querySelectorAll('.interactable');
    let score = 0;

    items.forEach(item => {
        item.addEventListener('click', () => {
            item.style.display = 'none';

            if (item.id.includes('anim')) {
                score += 20;
            } else {
                score += 5;
            }
            
            scoreText.textContent = score;
        });
    });
}

