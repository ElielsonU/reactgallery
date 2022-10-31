const shell = require("shelljs")

new Promise ((res, rej) => {
    console.log("To exit close the terminals !")
    res(shell.exec("start /min cmd /c npm run nodemon && start /min cmd /c npm start"))
})