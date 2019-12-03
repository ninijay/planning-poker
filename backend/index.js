import express from 'express';
import cors from 'cors';
import routes from './routes';
import models, { sequelize } from './models';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', routes.user);

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
});

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`);
  });
});
