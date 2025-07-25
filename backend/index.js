import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import bookroute from "./route/book.route.js";
import userroute from "./route/user.route.js";
import cors from 'cors';


const app = express();
app.use(express.json());

app.use(cors());



dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURL;

//connect to momgoDB
try {
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology:true
    });
    console.log("connect to MongoDB");
} catch (error) {
    console.log("Error:",error);
    
}

// defining route
app.use("/book",bookroute);

app.use("/user",userroute);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})
