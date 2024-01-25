import sequelize from "../configs/db.config";
import { DataTypes } from "sequelize";

const Category = sequelize.define("Category", {
  category_id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.CHAR(50),
    allowNull: false,
  },
});
export default Category;
