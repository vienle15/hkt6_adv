import AnswerRepository from "../repositories/answer.repository";

class AnswerService {
  private answerRepository: AnswerRepository;
  constructor() {
    this.answerRepository = new AnswerRepository();
  }
  async createAnswer(formRequest: any) {
    await this.answerRepository.createAnswer(formRequest);
  }
}
export default AnswerService;
