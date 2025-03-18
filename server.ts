import express from "express";
import studentRoutes from "./routes/routes";

const app = express();

app.use(express.json());
app.use("/api", studentRoutes);

app.listen(3000, () => {
    console.log("Server berjalan di port 3000");
});
