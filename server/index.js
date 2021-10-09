import express from 'express';
import cors from 'cors';
import helmet from 'helmet';


const Zomato = express();

Zomato.use(express.json());
Zomato.use(express.urlencoded({extended: false}));
Zomato.use(cors());
Zomato.use(helmet());

Zomato.get("/", (req, res) => {
    res.json({message: "Setup Success"});
});

Zomato.listen(4000, () => console.log("Server is Running!"));