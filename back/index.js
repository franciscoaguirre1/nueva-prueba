require('dotenv').config()
const express = require('express')
const cors = require('cors')


const app = express()
app.use(cors())

app.use(express.json({ limit: '500000000mb' }));
app.use(express.urlencoded({ extended: true,limit: '500000000mb', parameterLimit: 500000000 }));







app.listen(8090, function () {
    console.log('Test app listening on port 8090!')
})


//Static files
app.use('/', express.static("../front/dist/front/"))


const postulantes = require('./routes/postulantesRoutes')
app.use('/api/v1/postulantes', postulantes)

app.get('*', (req, res) => { 
    if(!req.url.includes("/api/v1")){
        res.sendFile("index.html", {root: "../front/dist/front/"}); 
    }
})
