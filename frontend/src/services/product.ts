import axios from "axios";

import Draft from "../models/product/draft";
import Product from "../models/product/product";

class Products {
  async getAll(): Promise<Product[]> {
    const response = await axios<Product[]>(
      `${import.meta.env.VITE_REST_SERVER_URL}/products/`
    );

    return response.data;
  }

  async getPerCategory(categoryId: string): Promise<Product[]> {
    const response = await axios<Product[]>(
      `${import.meta.env.VITE_REST_SERVER_URL}/products/${categoryId}`
    );

    return response.data;
  }

  async addProduct(draft: Draft): Promise<Product> {
    const response = await axios.post<Product>(
      `${import.meta.env.VITE_REST_SERVER_URL}/products`,
      draft
    );
    return response.data;
  }

  async removeProduct(id: string): Promise<boolean> {
    const response = await axios.delete<boolean>(
      `${import.meta.env.VITE_REST_SERVER_URL}/products/${id}`
    );
    return response.data;
  }
}

const productsService = new Products();
export default productsService;
