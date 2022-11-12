const pool2 = require('../../config/database2');
const matchDao = require('./matchDao');

const matchProvider = {
    retrieveUserList: async(matchData) => {
        const connection = await pool2.getConnection(async (conn) => conn);
        const userListResult = await matchDao.selectTaggedUser(connection, matchData);
        connection.release();
    
        return userListResult;
    },

    retrieveUserProfile: async(id) => {
        const connection = await pool2.getConnection(async (conn) => conn);
        const userProfile = await matchDao.selectUserProfile(connection, id);
        connection.release();
    
        return userProfile;
    }
}

module.exports = matchProvider;