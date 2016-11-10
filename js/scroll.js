function scrollToAnyElement(divId) {
    var diff=(item.offsetTop-window.scrollY)/8

    if (Math.abs(diff)>1) {
        window.scrollTo(0, (window.scrollY+diff))
        clearTimeout(window._TO)
        window._TO=setTimeout(scrollToAnyElement, 30, divId)
    } else {
        window.scrollTo(0, divId.offsetTop)
    }
}
