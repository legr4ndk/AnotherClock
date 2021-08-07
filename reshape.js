let h = document.querySelector("#hour")
let m = document.querySelector("#minute")
let s = document.querySelector("#second")
function reshape() {
    h.style.height = h.offsetWidth + 'px'
    m.style.height = m.offsetWidth + 'px'
    s.style.height = s.offsetWidth + 'px'
    h.style["font-size"] = h.offsetWidth * 0.67 + 'px'
    m.style["font-size"] = m.offsetWidth * 0.67 + 'px'
    s.style["font-size"] = s.offsetWidth * 0.67 + 'px'
}
window.onload = reshape;
window.onresize = reshape;