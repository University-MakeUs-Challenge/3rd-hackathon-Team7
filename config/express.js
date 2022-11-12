import compression from "compression";
import express from "express"
import cors from "cors"

const app = express();

app.use(compression());
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());


export default app;