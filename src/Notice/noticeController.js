import pool from "../../config/database";

export const basicNotice = async(req,res) => {
	//console.log(req.params.id);
    const conn = await pool.getConnection(async conn => conn);
	const sql = "select u.nickname, c.name from User u left outer join notice n on u.id = n.fromUser right outer join Category c on c.id = n.catecory where n.toUser =" + `'${req.params.id}'`;
	const [result] = await conn.query(sql);
    res.send(JSON.stringify(result));
}

export const postNotice = async (req,res) => {
    const conn = await pool.getConnection(async conn => conn);
	const {fromUser,toUser,catecory} = req.body;
	const sql = "insert into notice (fromUser, toUser, catecory) values (?,?,?)";
	const param = [fromUser,toUser,catecory];
    const result = await conn.query(sql,param);
    if (result){
        const ans = {
            status : "success",
            message : "알림 보내기 성공!"
        }
        res.send(JSON.stringify(ans));
    }
}

export const getNoticeByCategory = async (req,res) => {
    const conn = await pool.getConnection(async conn => conn)
	const sql = `select u.nickname from notice n right outer join User u on u.id = n.fromUser where n.catecory = ${req.params.id}`;
    const [result] = await conn.query(sql);
    res.send(JSON.stringify(result));
}