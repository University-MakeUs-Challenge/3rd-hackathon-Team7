export const selectUserByEmail = async(email,connection) =>{
    const sql = `select id from User where 'email=${email}';`;
    const [result] = await connection.query(sql);
    return result;
}

export const insertUserSocial = async(connection, sqlParams) =>{
    const sql = `insert into User (nickname, email, isSocial, profile_image_url) values (?,?,?,?);`
    const result = await connection.query(sql,sqlParams);
    console.log(result);
}

export const insertUser = async(connection, sqlParams) =>{
    const sql = `insert into User (password, nickname, email, phonenum,gender,profile_image_url) values(?, ?, ?, ?, ?, ?)`
    const result = await connection.query(sql, sqlParams);
    return result;
}

export const getUserId = async(connection, nickname) =>{
    const sql = `select id from User where nickname = '${nickname}';`;
    const [[id]] = await connection.query(sql);
    return id;
}

export const insertUserInterest = async(connection, category, userId) =>{
    console.log(category,userId);
    const getCategoryIdQuery = `select id from Category where name= '${category}';`;
    const [[{id}]] = await connection.query(getCategoryIdQuery);
    const createInterest = `insert into Interest (userId, categoryId) values(${userId}, ${id});`;
    const result = connection.query(createInterest);
    return result;
}