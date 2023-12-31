import express from "express";

const app = express ();

app.listen(5502, () => {
    console.log("Server is listening on port 5502...")
});

app.get("/messages", (req, res) => {
    res.json({message: "Hi there!"});

});
