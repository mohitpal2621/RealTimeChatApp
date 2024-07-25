const express = require("express");
require("dotenv").config();
const chats = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Api is running");
});

app.use("/api/user", userRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server started on PORT ${PORT}`);
});
