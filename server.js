const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Service Backend is running asik banget");
});

app.listen(PORT, () => {
    console.log("Express API running in port: " + PORT);
});
