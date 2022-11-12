require('dotenv').config();
import compression from "compression";
import express from "express"
import cors from "cors"
import userRouter from "../src/User/userRoute";
import notice from "../src/Notice/noticeRoute";

const app = express();

app.use(compression());
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());

app.use('/users',userRouter);
app.use('/notice',notice);

export default app;