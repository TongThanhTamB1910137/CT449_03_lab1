let app = require("./app");
let config = require("./app/config");
//start server

let PORT = config.app.port;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});