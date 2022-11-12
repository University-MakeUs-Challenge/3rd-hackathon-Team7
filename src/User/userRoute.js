import express from "express"
import { finishKakao, postUsers, postUsersInterests, signinUser, startKakao } from "./userController";

const userRouter = express.Router();

userRouter.get('/kakao/start',startKakao);
userRouter.get('/kakao/finish',finishKakao);
userRouter.post('/register',postUsers);
userRouter.post('/register-interest', postUsersInterests)
userRouter.post('/sign-in',signinUser);
export default userRouter;