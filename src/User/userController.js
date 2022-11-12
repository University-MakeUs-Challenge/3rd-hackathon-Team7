
import fetch from "node-fetch"
import pool from "../../config/database";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { getUserId, insertUser, insertUserInterest, insertUserSocial, selectUserByEmail } from "./userDao";

export const startKakao = async(req,res) =>{
    const APIURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.KAKAO_REDIRECT}`
    res.redirect(APIURL);
}

export const finishKakao = async(req,res) =>{
    const {code} = req.query;
    const tokenURL = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.KAKAO_REDIRECT}&code=${code}`
    const tokenData = await fetch(tokenURL,{
        method:"POST",
        headers:{
            "Content-type" : "application/x-www-from-urlencoded;charset-utf-8"
        }
    });
    const token = await tokenData.json();

    const finalURL = `https://kapi.kakao.com/v2/user/me`
    const userData = await fetch(finalURL,{
        method:"POST",
        headers:{
            "Authorization" : `Bearer ${token.access_token}`,
            "Content-type" : "application/x-www-form-urlencoded;charset=utf-8"
        },
    });
    const user = await userData.json();
    let {kakao_account:{
        profile:{
            nickname,profile_image_url,
        },email,gender}} = user
    let conn = await pool.getConnection(async conn => conn);
    const ourUser = await selectUserByEmail(email,conn);
    conn.release();
    if (ourUser.length == 0){
        console.log("hohoho")
        if (gender === "male")
            gender = 0;
        else
            gender = 1;
        const sqlParams = [nickname,email,'kakao', profile_image_url]
        conn = await pool.getConnection(async conn => conn);
        const addedUser = await insertUserSocial(conn, sqlParams);
        conn.release();
    }
    
    const jwtData = {
        email,
    }
    const loginToken = jwt.sign(jwtData,process.env.SECRET_KEY);
    const ans = {
        status: "success",
        token : loginToken,
        email
    }
    res.send(JSON.stringify(ans));
}

export const postUsers = async(req,res) =>{
    const {nickname, email,password,phonenum,gender,profile_image_url} = req.body;

    const hashedPass = await bcrypt.hash(password,8);
    const sqlParams = [hashedPass,nickname,email, phonenum,gender,profile_image_url];
    let connection = await pool.getConnection(async conn => conn);
    const user = await insertUser(connection, sqlParams);
    connection.release();
    connection = await pool.getConnection(async conn => conn);
    const userId = await getUserId(connection,nickname);
    connection.release();
    if (user){
        const answer = {
            userId,
            nickname,
            email,
            phonenum
        }

        res.send(JSON.stringify(answer));
    }
}

export const postUsersInterests = async(req,res) =>{
    const {userId, category} = req.body;
    
    let ans = [];

    for (let i = 0; i < category.length; i++){
        let conn = await pool.getConnection(async conn => conn);
        const result = await insertUserInterest(conn,category[i],userId);
        if (result){
            const Obj = {
                "status" : "success!",
                "message" : "정상적으로 관심 카테고리가 저장됨!",
                "category" : `${category[i]}`,
            }
            ans.push(Obj);
            conn.release();
        }
    }
    res.send(JSON.stringify(ans));
}