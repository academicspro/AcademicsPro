import  express from "express";
import { registerSchool } from "./controller/authController";
const app = express();


app.use(express.json());


// Routes Started 

app.use("/api/v1",registerSchool);


const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});