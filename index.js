let electron = require("electron")

let app = electron.app
let browserWindow = electron.BrowserWindow
let mainWindow = null

app.on("ready", () => {
    mainWindow = new browserWindow({
        width: 800,
        height: 600
    })
    mainWindow.loadFile("./index.html")
    mainWindow.on("close", () => {
        mainWindow = null
    })
})