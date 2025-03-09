import { ChangeEvent, useEffect, useState } from "react";
import Category from "../../../models/category/category";
import Product from "../../../models/product/product";
import CategoriesService from "../../../services/category";
import productsService from "../../../services/product";
import Card from "../card/card";
import "./List.css";

export default function List(): JSX.Element {
  const [product, setProduct] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const categoriesFromServies = await CategoriesService.getAll();
        setCategories(categoriesFromServies);
      } catch (e) {
        alert(e);
      }
    })();
  }, []);

  async function CategoryChanged(event: ChangeEvent<HTMLSelectElement>) {
    const categoryId = event.currentTarget.value;

    const currentCategory = await productsService.getPerCategory(categoryId);

    setProduct(currentCategory);
  }

  function deleteMe(id: string) {
    setProduct(product.filter((p) => p.id !== id));
  }

  return (
    <div className="List">
      <div className="CategoriesSelect">
        <select onChange={CategoryChanged}>
          <option defaultValue={""} disabled selected>
            please select job...
          </option>
          {categories.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div>
        {product.map((p) => (
          <Card product={p} removeProd={deleteMe} key={p.id} />
        ))}
      </div>
    </div>
  );
}
