element = document.getElementById("footer")
function scrollTo(element, to, time) {
    if (time<=0) return;
    let difference = to - element.scrollTop;
    let eachTick = difference/time*10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop+eachTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, time - 10);
    }, 10);
}
scrollTo(document.header, element.offsetTop, 600);
