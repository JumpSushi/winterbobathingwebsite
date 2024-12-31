document.addEventListener('DOMContentLoaded', function() {
    createSnowflaaakes();
    document.body.addEventListener('click', addSnowBurst);
});

function createSnowflaaakes() {
    const snowfall = document.querySelector('.snowfall');
    for(let e = 0; e < 50; e++) {
        createSnowflaaakes(snowfall)
    }
}

function createSnowflaaakes(container) {
    const snowflake = document.createElement('div');
    snowflake.className='snowflake';
    snowflake.style.left = Math.random() *100 + 'vw';
    snowflake.style.opacity = Math.random();
    snowflake.style.width = snowflake.style.height = Math.random() * 10 + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.animationDelay = Math.random() * 2 + 's';
    container.appendChild(snowflake);
    snowflake.addEventListener('animationend', function() {
        snowflake.remove();
        createSnowflaaakes(container);
    });
}

function addSnowBurst(event) {
    const snowfall = document.querySelector('.snowfall');
    for (let e = 0; e < 10; e++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = event.clientX + 'px';
        snowflake.style.top = event.clientY + 'px';
        snowflake.style.width = snowflake.style.height = Math.random() * 10 + 'px';
        snowflake.style.opacity = Math.random();
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        snowfall.appendChild(snowflake);
        snowflake.addEventListener('animationend', function() {
            snowflake.remove();
        });
    }
}
