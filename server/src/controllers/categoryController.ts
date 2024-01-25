import express, { Request, Response } from "express";
import CategoryService from "../services/category.services";

const categoryControler = express.Router();
const categoryService = new CategoryService();
categoryControler.get("/", async (req: Request, res: Response) => {
  try {
    const sort = req.query.sort || undefined;
    const limit = Number(req.query.limit) || 5;
    const page = Number(req.query.page) || 1;

    const result = await categoryService.getAllCategory(sort, page, limit);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Có lỗi xảy ra" });
  }
});
categoryControler.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result: any = await categoryService.getCategoryId(id);
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

categoryControler.post("/", async (req: Request, res: Response) => {
  try {
    const newCategory = {
      name: req.body.name,
    };
    await categoryService.createCategory(newCategory);
    res.status(201).json({ msg: "Create successfully" });
  } catch (error) {
    console.log(req);

    res.status(500).json({ msg: "loi gi day" });
  }
});

export default categoryControler;
