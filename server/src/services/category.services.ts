import { Request, Response } from "express";
import CategoryRepository from "../repositories/category.repository";

class CategoryService {
  private categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  async getAllCategory(sort: any, page: number, limit: number): Promise<any> {
    let offset = Math.ceil((page - 1) * limit);

    return await this.categoryRepository.getAllCategory(sort, limit, offset);
  }
  async getCategoryId(id: number) {
    return await this.categoryRepository.getOne(id);
  }
  async createCategory(formRequest: any) {
    await this.categoryRepository.createCategory(formRequest);
  }
}

export default CategoryService;
