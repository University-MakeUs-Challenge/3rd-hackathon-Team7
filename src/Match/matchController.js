const matchProvider = require('./matchProvider');
const db = require('../../config/database2');

const matchController = {
    test: async(req, res) => {
        const sql = 'select * from User';
            try {
            let [rows] = await db.query(sql);
            return res.status(200).send(rows);
        } catch(err) {
            console.log(err);
            throw err;
        }
    },

    match: async(req, res) => {
        //const id = 1;

        //const day = req.body.day;
        const startTime = req.body.startTime;
        const endTime = req.body.endTime;
        const tag = req.body.tag;
    
        //if(!day) return res.send('EMPTY_DATA_DAY');
        if(!startTime) return res.send('EMPTY_BODY_STARTTIME');
        else if(!endTime) return res.send('EMPTY_BODY_ENDTIME');
        else if(!tag) return res.send('EMPTY_BODY_TAG');
    
        const matchData = {
            //id: id,
            //day: day,
            startTime: startTime,
            endTime: endTime,
            tag: tag
        }
    
        const userList = await matchProvider.retrieveUserList(matchData);
        
        return res.send(userList);
    },

    getProfile: async(req, res) => {
        const id = req.params.id;

        if(!id) return res.send('EMPTY_PARAMS_ID');

        const userProfile = await matchProvider.retrieveUserProfile(id);
        
        return res.send(userProfile);
    }
}

module.exports = matchController;