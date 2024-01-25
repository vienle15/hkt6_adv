import express, { Request, Response } from "express";
import QuestionService from "../services/question.services";

const questionControler = express.Router();
const questionService = new QuestionService();
questionControler.get("/", async (req: Request, res: Response) => {
  try {
    const sort = req.query.sort || undefined;
    const limit = Number(req.query.limit) || 5;
    const page = Number(req.query.page) || 1;

    const result = await questionService.getAllQuestion(sort, page, limit);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Có lỗi xảy ra" });
  }
});
questionControler.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result: any = await questionService.getQuestionId(id);
    if (!result) {
      res.status(404).json({ msg: "not found" });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    console.log(error);

    res.status(500).json({ msg: "Có loi xảy ra" });
  }
});
questionControler.get("/:id/answers", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result: any = await questionService.getQuestionAndAnswer(id);
    if (!result) {
      res.status(404).json({ msg: "not found" });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    console.log(error);

    res.status(500).json({ msg: "Có loi xảy ra" });
  }
});
questionControler.post("/", async (req: Request, res: Response) => {
  try {
    const newQuestion = {
      category_id: req.body.category_id,
      content: req.body.content,
      level: req.body.level,
    };
    await questionService.createQuestion(newQuestion);
    res.status(201).json({ msg: "Create successfully" });
  } catch (error) {
    console.log(req);

    res.status(500).json({ msg: "loi gi day" });
  }
});

export default questionControler;
