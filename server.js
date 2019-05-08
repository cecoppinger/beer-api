const express = require("express");

const app = express();

console.log("this runs on startup");

//middleware
app.get("/test", (request, response) => {
  console.log(request);
  response.send("Hello");
});

app.listen(4444, () => {
  console.log("listening on port 4444...");
});
