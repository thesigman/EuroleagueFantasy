const express = require('express');
const cors = require('cors');

const playersRouter = require('./routes/players');

const app = express();
const port = 8080;

app.use(cors());

//Uncomment to only accept connections from frontend
// app.use(cors({
//   origin: 'http://localhost:5173',
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/players', playersRouter); 

app.listen(port, (error) =>{
    if(!error){
        console.log("Euroleague Fantasy running on port "+ port);
    }
    else 
        console.log("Error: ", error);
    }
);

