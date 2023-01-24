const mongoose = require("mongoose");

const connection_string =
  "mongodb+srv://stanley:masterdavid@taskmanagerapp.rflik5x.mongodb.net/task-manager?retryWrites=true&w=majority";

mongoose
  .connect(connection_string, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("CONNECTED TO THE DB..."))
  .catch((err) => console.log(err));
