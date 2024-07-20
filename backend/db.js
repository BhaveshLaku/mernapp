const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://bhaveshlaku:admin%40123@cluster0.kdwusrp.mongodb.net/yummfoodmern?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected Successfully");

    const fetched_data = mongoose.connection.db.collection("food_items");

    const data = await fetched_data.find({}).toArray();
    console.log();
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
};

module.exports = mongoDB;
