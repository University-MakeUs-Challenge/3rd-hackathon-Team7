const pool2 = require('../../config/database2');
const matchDao = require('./matchDao');

const matchService = {
    createTime: async(day, startTime, endTime, userId) => {
        const insertTimeTableParams = [day, startTime, endTime, userId];
        const connection = await pool2.getConnection(async (conn) => conn);
        const timeTableResult = await matchDao.insertTimetable(connection, insertTimeTableParams);
        connection.release();
    
        return timeTableResult;
    }
}

module.exports = matchService;