import mongoose from "mongoose";


const Connection = async () => {

    // const URL = "mongodb+srv://mnoor92082:PZtsd90NWKXJdtLO@code-error.ufwfba2.mongodb.net/?retryWrites=true&w=majority"
    const URL = "mongodb+srv://mnoor92082:PZtsd90NWKXJdtLO@code-error.ufwfba2.mongodb.net/?retryWrites=true&w=majority"

    try {
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Error Occur", error)
    }
}
export default Connection