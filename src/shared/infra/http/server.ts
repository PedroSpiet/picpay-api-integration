import 'reflect-metadata';
import 'dotenv/config';
import '../typeorm/index';

import cors from 'cors';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import AppError from '../../errors/AppError';
import Routes from './routes';

const port = 3333 || process.env.port;
const app = express();

app.use(cors());
app.use(express.json());
app.use(Routes);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ error: err.statusCode });
  }

  console.log(err);

  return res.status(500).json({
    error: '500',
    message: 'Internal Server Error',
  });
});

app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});
