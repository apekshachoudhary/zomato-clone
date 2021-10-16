require('dotenv').config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

//Routes
import Auth from './API/Auth/index';

//Database connection
import ConnectDB from './database/connection';

const Zomato = express();

Zomato.use(express.json());
Zomato.use(express.urlencoded({extended: false}));
Zomato.use(cors());
Zomato.use(helmet());

Zomato.get("/", (req, res) => {
    res.json({message: "Setup Success"});
});

Zomato.use("/auth", Auth);

Zomato.listen(4000, () => ConnectDB()
    .then(() => console.log("Server is up and Running!"))
    .catch(() => console.log("Server is Running!, but database connection failed...")
));