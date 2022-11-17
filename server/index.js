import Express, { json, urlencoded } from "express";
import fileUpload from "express-fileupload";
import multer from "multer";
import cors from "cors";
import utf8 from "utf8";
import fs from "fs";

function getDate() {
    const date = new Date()
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}-${date.getMilliseconds()}`
}
let images;

function updateGallery(byDate=false) {
    fs.readdir("upload/", (err, files) => {
        images = []
        const choicedIndex = []
        let randomGenIndex;

        function indexGenerator(){
            do {
                randomGenIndex = parseInt(Math.random() * files.length)
            } while (choicedIndex.indexOf(randomGenIndex) > -1)
            return randomGenIndex
        }

        if (err){
            console.log(err)
            return
        }
        if (byDate) { return images = files.reverse() }
        for(let i = 0; i < 9; i++){
            const genIndex = indexGenerator()
            choicedIndex.push(genIndex)
            images.push(files[genIndex])
        }
    })
}
updateGallery( {byDate: true} )

const app = Express()
const upload = multer({dest: "/upload"}).single("file")
const port = 8000

app.use(cors({ origin: "http://localhost:3000" ,optionsSuccessStatus: 200 }))

// http://localhost:8000/
app.get("/", (req, res) => {
    res.send("Hi bro! ;)")
})

//  http://localhost:8000/imageUpload
app.post("/imageUpload" ,fileUpload({createParentPath: true}) ,async (req, res) => {
    if(req.files.img.size > 10485760 || !(req.files.img.mimetype == "image/png" || req.files.img.mimetype == "image/jpeg")){
        res.send({"msg": "error!"})
        return
    }

    const image = req.files.img
    const purefilename = utf8.decode(image.name).split(".")
    // name of the file before of the . 
    let filename = purefilename[0]

    // name of the file + int value + .extension
    filename = `${getDate()}.${purefilename[1]}`
    
    image.mv(`upload/${filename}`)
    res.send({"msg" : "Uploaded!"})
})

// http://localhost:8000/updateGallery
app.get("/updateGallery",json(), (req, res) => {
    updateGallery();
    res.send({"msg":"updated!"})
})

// http://localhost:8000/image/{idvalue}
app.get("/image/:id",urlencoded({extended: true}) ,(req, res) => {
    const id = req.params["id"] - 1
    if(images[id]){
        res.sendFile(`${images[id]}`, {root: "upload"})
        return
    }
    res.send({"msg": "error!"})
})

// localhost:8000/
app.listen(port, "localhost", () => {
    console.log(`\nServer Running on port ${port}!\n`)
})