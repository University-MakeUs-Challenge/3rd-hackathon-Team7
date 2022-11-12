//매칭된 유저 목록
async function selectTaggedUser(connection, matchData) {
    //const id = matchData.id;
    //const day = matchData.day;
    const startTime = matchData.startTime;
    const endTime = matchData.endTime;
    const tag = matchData.tag;

    const selectUserListQuery = `
    select 
    User.id, User.nickname 
    from Timetable 
    left join User on User.id = Timetable.userId 
    left join Interest on Interest.userId = Timetable.userId 
    where
        Timetable.endTime <= ${startTime} and
        Timetable.endTime >= ${startTime} and
        Interest.categoryId = ${tag}
    union
    select 
    User.id, User.nickname 
    from Timetable 
    left join User on User.id = Timetable.userId 
    left join Interest on Interest.userId = Timetable.userId 
    where
        Timetable.startTime <= ${endTime} and
        Timetable.endTime >= ${endTime} and
        Interest.categoryId = ${tag};
    `;

    const [userRows] = await connection.query(selectUserListQuery);
    return userRows;
}

//목록에서 유저 프로필 보기
async function selectUserProfile(connection, id) {
    const selectUserQuery = `
    select User.nickname, User.gender, Univ.name 
    from User left join Univ on User.id = Univ.userId 
    where User.id = ${id};`

    const [userRows] = await connection.query(selectUserQuery);
    return userRows[0];
}

module.exports = {
    selectTaggedUser,
    selectUserProfile
};