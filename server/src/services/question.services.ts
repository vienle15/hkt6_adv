import { Request, Response } from "express";
import QuestionRepository from "../repositories/question.reposiroty";

class QuestionService {
  private questionRepository: QuestionRepository;

  constructor() {
    this.questionRepository = new QuestionRepository();
  }

  async getAllQuestion(sort: any, page: number, limit: number): Promise<any> {
    let offset = Math.ceil((page - 1) * limit);

    return await this.questionRepository.getAllQuestion(sort, limit, offset);
  }
  async getQuestionId(id: number) {
    return await this.questionRepository.getOne(id);
  }
  async createQuestion(formRequest: any) {
    await this.questionRepository.createQuestion(formRequest);
  }
  async getQuestionAndAnswer(id: number) {
    return await this.questionRepository.getQuestionAndAnswer(id);
  }
}

export default QuestionService;
