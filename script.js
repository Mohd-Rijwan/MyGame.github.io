score = 0;
cross = true;
document.onkeydown = function(e){
    console.log("key code is:", e.keyCode)
    if(e.keyCode==38){
        run = document.querySelector('.run');
        run.classList.add('animateRun');
        setTimeout(() => {
            run.classList.remove('animateRun')
        }, 1000);
    }
    if(e.keyCode==39){
        run = document.querySelector('.run');
        runX = parseInt(window.getComputedStyle(run, null).getPropertyValue('left'));
        run.style.left = runX + 50 + "px";
    }
    if(e.keyCode==37){
        run = document.querySelector('.run');
        runX = parseInt(window.getComputedStyle(run, null).getPropertyValue('left'));
        run.style.left = (runX - 50) + "px";
    }
}

setInterval(() => {
    run = document.querySelector('.run');
    over = document.querySelector('.over');
    obs = document.querySelector('.obs');

    rx = parseInt(window.getComputedStyle(run, null).getPropertyValue('left'));
    ry = parseInt(window.getComputedStyle(run, null).getPropertyValue('top'));
    // console.log(ry)  
    // without parseInt value of rx and ry must be in px.

    ox = parseInt(window.getComputedStyle(obs, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obs, null).getPropertyValue('top'));
    // console.log(oy)  

    offsetX = Math.abs(rx-ox);
    offsetY = Math.abs(ry-oy);
    // console.log(offsetX, offsetY)
    if(offsetX < 90 && offsetY < 100){
        over.innerHTML = "Game Over - Reload To Play Again:";
        obs.classList.remove('obsAni')
    }
    else if(offsetX<102 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obs, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.01;
            obs.style.animationDuration = newDur + 's';
        }, 1000)
    }

}, 100)

function updateScore(score){
    scoreCont.innerHTML = "Score:" + score
}