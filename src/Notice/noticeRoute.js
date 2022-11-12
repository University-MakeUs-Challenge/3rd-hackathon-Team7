
import express from "express"
import { getNoticeByCategory, postNotice ,basicNotice} from "./noticeController.js";
//import pool from "../../config/database";
const jwtmiddleware = require("../jwtMiddleware");



const notice = express.Router();

notice.get('/:id([0-9])',jwtmiddleware.verifyToken,basicNotice);

notice.post('/',jwtmiddleware.verifyToken,postNotice);

notice.get('/category/:id',jwtmiddleware.verifyToken,getNoticeByCategory)

export default notice;