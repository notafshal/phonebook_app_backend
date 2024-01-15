const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give pass as arguement");
  process.exit(1);
}
const password = process.argv[2];

const url =
  "mongodb+srv://afshal56:<pass>@phonebook.erduebv.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);
mongoose.connect(url);

const phoneBookSchema = new mongoose.Schema({ name: String, number: String });

const Contact = mongoose.model("Contact", phoneBookSchema);
Contact.find({}).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});
const contact = new Contact({ name: "Afshal", number: "9828982341" });
contact.save().then((result) => {
  console.log(`Contact saved! ${contact.name} ${contact.number}`);
  mongoose.connection.close();
});
