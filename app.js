const express = require("express")
const path = require("path")

const app = express()

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname, "public")))

app.locals.siteName = "Vegetable World"
app.use( (req, res, next) => {
    res.locals.user = req.user
    next()
})

router.get("/", (req, res) => {
    return Promise.try(() => {
        return db("vegetables").limit(3)
    }).map((row) => {
        return row.name
    }).then((vegetables) => {
        res.render("homepage", {
            vegetables: vegetables
        })
    })
})