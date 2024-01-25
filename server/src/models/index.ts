import Answer from "./answer.model";
import Category from "./category.model";
import Question from "./question.model";

const createTable = () => {
  Category.sync().then(() => {
    console.log("create Category");
  });
  Answer.sync().then(() => {
    console.log("create Category");
  });
  Question.sync().then(() => {
    console.log("create Question");
  });
};
export default createTable;
