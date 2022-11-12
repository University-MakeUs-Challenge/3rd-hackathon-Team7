import compression from "compression";
import express from "express"
import cors from "cors"
import match from "../src/Match/matchRoute"

const app = express();

app.use(compression());
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());

app.use('/match', match);


export default app;