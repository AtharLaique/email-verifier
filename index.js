const express = require("express");
const app = express();
const emailRoutes=require('./routes/email/email');
app.use('/email-verifier',emailRoutes)
app.listen(3001, () => {console.log("Server is running")});
