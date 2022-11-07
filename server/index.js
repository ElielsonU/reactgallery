import Express, { json, urlencoded } from "express";
import fileUpload from "express-fileupload";
import multer from "multer";
import cors from "cors";
import utf8 from "utf8";
import bodyParser from "body-parser";


const app = Express()
const upload = multer({dest: "/upload"}).single("file")
const port = 8000

app.use(cors({ origin: "http://localhost:3000" ,optionsSuccessStatus: 200 }))

// http://localhost:8000/
app.get("/", (req, res) => {
    res.send("Boa noite")
})
//  http://localhost:8000/imageUpload
app.post("/imageUpload" ,fileUpload({createParentPath: true}) ,async (req, res) => {
    if(req.files.img.size > 78643200){
        res.send({"msg": "error!"})
        return
    } 
    let image = req.files.img
    let filename = utf8.decode(image.name)
    image.mv(`upload/${filename}`)
    res.send({"msg" : "Uploaded!"})
})
// localhost:8000/
app.listen(port, "localhost", () => {
    console.log(`\nServer Running on port ${port}!\n`)
})