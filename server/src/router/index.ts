import { Express } from "express";
import categoryControler from "../controllers/categoryController";
import questionControler from "../controllers/questionController";
import answerControler from "../controllers/answerController";

const Router = (app: Express) => {
  app.use("/api/v1/categories", categoryControler);
  app.use("/api/v1/questions", questionControler);
  app.use("/api/v1/answer", answerControler);
};
export default Router;
