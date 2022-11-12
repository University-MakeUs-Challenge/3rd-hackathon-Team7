import express, { query } from "express"
//import pool from "../../config/database";
const mysql = require('mysql2');
const dbConn = require('../../config/database3.js');
const conn = mysql.createConnection(dbConn);

const notice = express.Router();

//id는 어떤 사람이 대상인지가 나옴
//fromUser로 누가 보냈는지를 나타내면 됨
notice.get('/:id([0-9])', async(req,res) => {
	console.log("hh");
	//console.log(req.params.id);
	const sql = "select u.nickname, c.name from User u left outer join notice n on u.id = n.fromUser right outer join Category c on c.id = n.catecory where n.toUser =" + `'${req.params.id}'`;
	conn.query(sql, (err,result,fields) => {
		if (err) throw err;
		res.send(result);
	})
})

notice.post('/',(req,res) => {
	const {id,fromUser,toUser,catecory} = req.body;
	const sql = "insert into notice values (?,?,?,?)";
	const param = [id,fromUser,toUser,catecory];
	conn.query(sql,param,(err,result,fields) => {
		if (err) throw err;
		res.send(result);
	})
});

//category별로 누구한테 왔는지
notice.get('/category/:id',(req,res) => {
	const sql = `select u.nickname from notice n right outer join User u on u.id = n.fromUser where n.catecory = ${req.params.id}`;
	conn.query(sql,(err,result,fields) => {
		if (err) throw err;
		res.send(result);
	})
})

export default notice;