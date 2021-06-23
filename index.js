const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv'); //db de baglantımız da sifremizin gitmemesi icin eklend.
//Import Routes
const authRoute = require('./routes/auth');
const postRoute =require('./routes/posts');
dotenv.config();

//Middleware
app.use(express.json());

//Connect to DB
mongoose.connect(process.env.MONGO_PROD_URI , {useNewUrlParser:true ,useFindAndModify:false},(err)=>{
    if (!err) {
        console.log('MongoDB Connection Succeeded.');
    }
    else{
        console.log('DB baglanti hatasi : ' + err);
    }
}

);



//Route Middlewares
app.use('/api/user',authRoute);
app.use('/api/posts',postRoute);

app.listen(3000,()=>console.log('Server Calısıyor'));