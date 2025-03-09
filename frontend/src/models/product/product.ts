import Category from "../category/category";
import Draft from "./draft";

export default interface Product extends Draft {
  id: string;
  category: Category;
}
