//Funksjon for kompatibilitet, ettersom eldre versjoner av browsere kun hadde body.scrollTop/scrollTop eller pageYOffset (sannsynligvis support for DOM.scrollTop)
//Denne returnerer også startingpoint
function currentYPosition() {
  return  document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop||0;
}
//Hvor vi skal scrolle til
function elemYPosition(elemId) {
    let elem = document.getElementById(elemId);
    let y = elem.offsetTop;
    let node = elem;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}

//Funk som tar inn startY og sluttY(skriver selvsagt ikke sluttY fordi det kan mistolkes, litt rar engelsk...)
//Det viktige her er setTimeout som enabler "animering" slik at vi scroller litt for hver tick av timer
function smoothScroll(elemId) {
    let startY = currentYPosition();
    let stopY = elemYPosition(elemId);
    let distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY); return;
    }
    let speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    let step = Math.round(distance / 25);
    let leapY = stopY > startY ? startY + step : startY - step;
    let timer = 0;
    if (stopY > startY) {
        for ( let i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( let i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
}
