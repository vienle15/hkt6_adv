import { Op } from "sequelize";
import Category from "../models/category.model";

class CategoryRepository {
  async getAllCategory(sort: any, limit: number, offset: number) {
    if (sort) {
      return await Category.findAll({
        order: [["Category", sort]],
        offset,
        limit,
      });
    } else {
      return await Category.findAll({
        offset,
        limit,
      });
    }
  }
  async getOne(id: number) {
    return await Category.findOne({
      where: {
        category_id: id,
      },
    });
  }
  async createCategory(formRequest: any) {
    await Category.create(formRequest);
  }
}

export default CategoryRepository;
