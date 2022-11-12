module.exports = function(app){
    const user = require('./userController');
    app.post('/user/time', user.postTimes);
}