const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const PORT = config.get('port') || 5000;
const app = express()

app.use(express.json({extended:true}))

app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
    res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.options("*", cors());

app.use(bodyParser.json())

app.use('/api/test', require('./backend/routes/test.route'))

app.use('/api/create', require('./backend/routes/create.route'))

if(process.env.NODE_ENV === 'production'){
    app.use('/', express.static(path.join(__dirname,"./frontend/build")))

    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname + './frontend/build/index.html'))
    })
}

async function start(){
    try {

        await mongoose.connect(config.get('mongoUri'),{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        })

        app.listen(PORT,()=>{
            console.log('Server has been started...')
        })
        
    } catch (error) {
        console.log('Error server : ',error.message)
        process.exit(1)
    }
}

start()