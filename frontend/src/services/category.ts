import axios from "axios";
import Category from "../models/category/category";

class Categories {
  async getAll(): Promise<Category[]> {
    const response = await axios(
      `${import.meta.env.VITE_REST_SERVER_URL}/categories`
    );

    return response.data;
  }
}

const CategoriesService = new Categories();
export default CategoriesService;
