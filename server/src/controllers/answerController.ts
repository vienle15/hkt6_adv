import express, { Request, Response } from "express";
import AnswerService from "../services/answer.services";

const answerControler = express.Router();
const answerService = new AnswerService();
answerControler.post("/", async (req: Request, res: Response) => {
  try {
    const newAns = {
      question_id: req.body.question_id,
      content: req.body.content,
      is_answer: req.body.is_answer,
    };
    await answerService.createAnswer(newAns);
    res.status(201).json({ msg: "Create successfully" });
  } catch (error) {
    console.log(req);

    res.status(500).json({ msg: "loi gi day" });
  }
});
export default answerControler;
