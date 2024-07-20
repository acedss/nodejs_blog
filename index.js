const express = require('express')
const morgan = require('morgan')

const app = express()
const port = 3000

app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send(`
            <h1 style="color:red;">Home</h1>
        `)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})