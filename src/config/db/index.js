import mongoose from "mongoose";

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://minhnhat:nhat2002@cluster0.eebi0u4.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
      }
    );
    console.log("connect successfully!!!");
  } catch (error) {
    console.log("connect failure!!!");
  }
}

export default connect;

// old Url: mongodb://localhost:27017/f8_education_dev
