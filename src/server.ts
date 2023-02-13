import express from 'express';
import cors from 'cors';
import { logger } from './services';
import { config } from './config';

const { port } = config;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  logger.info(`Server listening on port ${port}`);
});
