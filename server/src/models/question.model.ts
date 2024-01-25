import sequelize from "../configs/db.config";
import { DataTypes } from "sequelize";
import Category from "./category.model";

const Question = sequelize.define(
  "Question",
  {
    question_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
    },

    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    level: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

Question.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Category.hasOne(Question, { foreignKey: "category_id" });
export default Question;
