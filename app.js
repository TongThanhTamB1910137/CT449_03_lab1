let express = require("express");
let cors = require("cors");
let contactsRouter = require("./app/routes/contact.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouter);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });

});

module.exports = app;
