import express, { urlencoded } from "express";
import sequelize from "./configs/db.config";
import createTable from "./models";
import cors from "cors";
import Router from "./router";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
createTable();
Router(app);
app.listen(8080, () => {
  console.log("server dang chay");
});
