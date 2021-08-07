let youbi = document.querySelector('#youbi')
let week = document.querySelector('#week')
let month = document.querySelector('#month')
let day = document.querySelector('#day')
let year = document.querySelector('#year')
let hour = document.querySelector("#hour")
let minute = document.querySelector("#minute")
let second = document.querySelector("#second")

function format(x) {
    if (x < 10)
        return '0' + x;
    return x;
}

function update() {
    let time = new Date()
    month.innerText = format(time.getMonth() + 1)
    day.innerText = format(time.getDate())
    year.innerText = time.getFullYear()
    hour.innerText = format(time.getHours())
    minute.innerText = format(time.getMinutes())
    second.innerHTML = format(time.getSeconds())

    let d = time.getDay()
    switch (d) {
        case 0:
            youbi.textContent = '日'
            week.textContent = '日'
            break
        case 1:
            youbi.textContent = '月'
            week.textContent = '一'
            break
        case 2:
            youbi.textContent = '火'
            week.textContent = '二'
            break
        case 3:
            youbi.textContent = '水'
            week.textContent = '三'
            break
        case 4:
            youbi.textContent = '木'
            week.textContent = '四'
            break
        case 5:
            youbi.textContent = '金'
            week.textContent = '五'
            break
        case 6:
            youbi.textContent = '土'
            week.textContent = '六'
            break
    }
}
update()
setInterval("update()", '100') //减小时差至 100ms内