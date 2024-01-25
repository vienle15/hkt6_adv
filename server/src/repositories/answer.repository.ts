import Answer from "../models/answer.model";

class AnswerRepository {
  async createAnswer(formRequest: any) {
    await Answer.create(formRequest);
  }
}
export default AnswerRepository;
