const express = require('express')
const app = express()
const mongoose = require("mongoose")
const appRouter = require("./router")
const cors = require("cors");
const {DATABASE_URL} = require("./config");
app.use(express.json());
app.use(cors());
mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("bazaga ulandi");
  })
  .catch((err) => {
    console.log(err);
  });


  app.use("/api", appRouter);

app.listen(5000, () => {
    console.log("5000 port ishladi")
})