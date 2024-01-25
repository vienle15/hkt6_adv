import { Op } from "sequelize";
import Question from "../models/question.model";
import Answer from "../models/answer.model";
class QuestionRepository {
  async getAllQuestion(sort: any, limit: number, offset: number) {
    if (sort) {
      return await Question.findAll({
        order: [["Question", sort]],
        offset,
        limit,
      });
    } else {
      return await Question.findAll({
        offset,
        limit,
      });
    }
  }
  async getOne(id: number) {
    return await Question.findOne({
      where: {
        Question_id: id,
      },
    });
  }
  async createQuestion(formRequest: any) {
    await Question.create(formRequest);
  }
  async getQuestionAndAnswer(id: number) {
    console.log(id);

    return await Question.findAll({
      include: [
        {
          model: Answer,
        },
      ],
      where: {
        Question_id: id,
      },
    });
  }
}

export default QuestionRepository;
