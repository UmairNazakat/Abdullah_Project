import Express from "express";
import dotenv, { config } from 'dotenv';
import cors from 'cors';
import bodyParser from "body-parser";

import connection from "./database/db.js";
import Routes from "./routes/routes.js";


const app = Express();
dotenv.config();
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));

app.use(cors());
app.use('/', Routes);
const port = 8000;
const username = process.env.DB_user;
const userpassword =  process.env.DB_password;
connection(username, userpassword);
app.listen(port, () => console.log(`server is running on ${port} port`));   