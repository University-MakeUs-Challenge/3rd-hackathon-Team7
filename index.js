require("dotenv").config();
import app from "./config/express"



app.listen(process.env.SERVER_PORT, () => console.log("server is running!"))