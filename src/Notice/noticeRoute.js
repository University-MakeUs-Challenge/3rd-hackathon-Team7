
import express from "express"
import { getNoticeByCategory, postNotice ,basicNotice} from "./noticeController.js";
//import pool from "../../config/database";



const notice = express.Router();

notice.get('/:id([0-9])', basicNotice);

notice.post('/',postNotice);

notice.get('/category/:id',getNoticeByCategory)

export default notice;