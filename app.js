document.addEventListener('DOMContentLoaded', function () {
    const dice = document.querySelector('.dice');
    const degs = [90, 180, 270, 360]

    dice.addEventListener('click', function () {
        const randX = Math.floor(Math.random() * 4);
        const randY = Math.floor(Math.random() * 4);
        const randZ = Math.floor(Math.random() * 4);

        dice.style.transform = `rotateX(${degs[randX]}deg) rotateY(${degs[randY]}deg) rotateZ(${degs[randZ]}deg)`;
    });
});
