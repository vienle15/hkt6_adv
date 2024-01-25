import sequelize from "../configs/db.config";
import { DataTypes } from "sequelize";
import Question from "./question.model";

const Answer = sequelize.define(
  "Answer",
  {
    answer_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
    },

    is_answer: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
Answer.belongsTo(Question, {
  foreignKey: "question_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Question.hasMany(Answer, { foreignKey: "question_id" });
export default Answer;
