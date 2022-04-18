import mongoose from "mongoose";
const connection_url= "mongodb+srv://rushid:rushikesh@cluster0.9ikii.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(connection_url,{
            useNewUrlParser: true,
        });
        console.log("DB connected....");
    }
    catch (err){
        console.error(err.message);
        process.exit(1);
    }
}
export default connectDB()