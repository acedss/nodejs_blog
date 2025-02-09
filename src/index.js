const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('tiny'))

// template engine
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')

app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
    res.render('home')
})
app.get('/news', (req, res) => {
    res.render('news')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})