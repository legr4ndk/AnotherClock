const slide = document.querySelector("#slide")
const time = document.querySelector("#time")
const done = document.querySelector("#done")
const cancel = document.querySelector("#cancel")

window.onload = function () {
    slide.value = 25;
}

slide.oninput = function () {
    time.innerText = slide.value
}

done.onclick = function () {
    
    window.close()
}

cancel.onclick = function () {
    window.close()
}