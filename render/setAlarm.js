const btn = document.querySelector("#setAlarm")

const BrowserWindow = require("electron").remote.BrowserWindow

let setAlarmWindow = null

btn.onclick = () => {
    setAlarmWindow = new BrowserWindow({
        height: 370,
        width: 300,
        resizable: false,
        frame: false
    })
    setAlarmWindow.loadFile("./window/setAlarm.html")
    setAlarmWindow.on("close", () => {
        setAlarmWindow = null
    })
}