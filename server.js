const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Service Backend is running");
});

app.listen(PORT, () => {
    console.log("Express API running in port: " + PORT);
});
