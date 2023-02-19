import express from 'express';
import { Application } from 'express';

const app:Application = express();

app.listen(1770,() => console.log("app run"))