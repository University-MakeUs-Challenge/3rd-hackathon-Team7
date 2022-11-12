exports.postTimes = async function (req, res) {
    const {day, startTime, endTime} = req.body;
    
    const postTimeResponse = await createTime(
        day,
        startTime,
        endTime
    );

    return res.send(postTimeResponse);
}

exports.createTime = async function (day, startTime, endTime) {

    const insertTimeTableParams = [day, startTime, endTime];

    const connection = await pool.getConnection(async (conn) => conn);

    const timeTableResult = await userDao.insertTimeTable(connection, insertTimeTableParams);
    console.log(timeTableResult)
    connection.release();

};