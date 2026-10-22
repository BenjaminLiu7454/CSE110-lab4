import express from "express";
import { existsSync, readFileSync, writeFileSync } from "node:fs";


type LeaderboardEntry = { score: number; timestamp: string };
const LEADERBOARD_FILE = new URL("./leaderboard.json", import.meta.url);
const app = express();
app.use(express.json());


// TODO: Add your storage functions and routes here.


app.listen(3001, () => console.log("Server running on port 3001"));
