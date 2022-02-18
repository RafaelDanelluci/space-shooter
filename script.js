const yourShip = document.querySelector('.player-shooter');
const playArea = document.querySelector('#main-play-area');

//movimento e tiro
function flyShip(event) {
  if (event.key === 'ArrowUp') {
    event.preventDefault();
    moveUp();
  } else if (event.key === 'ArrowDown') {
    event.preventDefault();
    moveDown();
  } else if (event.key === " ") {
    event.preventDefault();
    fireLaser();
  }
}

//up function
function moveUp() {
  let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
  if (topPosition === "0px") {
    return
  } else {
    let position = parseInt(topPosition);
    position -= 50;
    yourShip.style.top = `${position}px`;
  }
}

//Down function
function moveDown() {
  let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
  if (topPosition === "500px") {
    return
  } else {
    let position = parseInt(topPosition);
    position += 50;
    yourShip.style.top = `${position}px`;
  }
}

//fire laser
function fireLaser() {
  let laser = creatLaserElement();
  playArea.appendChild(laser);
  moveLaser();
}

function creatLaserElement() {
  let xPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('left'));
  let yPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('top'));

}

window.addEventListener('keydown', flyShip);