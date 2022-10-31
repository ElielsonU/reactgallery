import express from "express"
import multer from "multer"
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const treat = err => console.log(err)

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(treat, "./uploads")
    },
    filename: (req, file, cb) => {
        cb(treat, file.originalname)
    }
})

const upload = multer({storage: storage}).single("myfile")

app.post("/image", (req, res) => {
    upload(req, res, err => {
        if (err){
            res.end(err)
        }
        res.end(req.body.img)
    })
})

app.listen(8000, "localhost", () => {
    console.log("BackEnd Server on port: 8000")
})
