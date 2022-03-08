import 'reflect-metadata';
import { dbConfig } from './config/index.js';

import dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import waitForPostgres from './db/waitForPostgres.js';

import { logs, colors } from './utils/index.js';

dotenv.config();

waitForPostgres(createConnection, dbConfig);

const PORT = process.env.API_PORT || 3001;
const app = express();
const logger = morgan;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.set("trust proxy", true);
app.set("trust proxy", "loopback");

app.listen(PORT, () => {
    return logs.log({ color: colors.success, type: "HTTP", message: `DungeonTracker-API: Listening on port ${PORT}` })
});
