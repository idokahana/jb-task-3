import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Category from "../../../models/category/category";
import Draft from "../../../models/product/draft";
import CategoriesService from "../../../services/category";
import { default as productsService } from "../../../services/product";
import "./add.css";

export default function Add(): JSX.Element {
  const [categories, setCategories] = useState<Category[]>([]);

  const { register, handleSubmit, formState } = useForm<Draft>();

  useEffect(() => {
    (async () => {
      try {
        const categoriesFromService = await CategoriesService.getAll();
        setCategories(categoriesFromService);
      } catch (e) {
        alert(e);
      }
    })();
  }, []);

  async function submit(draft: Draft) {
    try {
      await productsService.addProduct(draft);
      alert("added product");
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div className="Add">
      <form onSubmit={handleSubmit(submit)}>
        <label>Product Name</label>
        <input
          type="text"
          placeholder="Product Name"
          {...register("productName", {
            required: {
              value: true,
              message: " name product is a must",
            },
          })}
        />
        <span>{formState.errors.productName?.message}</span>
        <label>price</label>
        <input
          type="text"
          placeholder="price"
          {...register("price", {
            required: {
              value: true,
              message: "price is a must",
            },
          })}
        />
        <span>{formState.errors.price?.message}</span>
        <input
          type="date"
          {...register("manufactureTime", {
            required: {
              value: true,
              message: "manufacture time is must",
            },
          })}
        />
        <span>{formState.errors.manufactureTime?.message}</span>
        <input
          type="date"
          {...register("expirationTime", {
            required: {
              value: true,
              message: "expiration time is must",
            },
          })}
        />
        <span>{formState.errors.expirationTime?.message}</span>

        <select
          defaultValue={""}
          {...register("categoryId", {
            required: {
              value: true,
              message: "must pick a category",
            },
          })}
        >
          <option value="" disabled>
            choose an category{" "}
          </option>
          {categories.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
        <button> Add Product</button>
      </form>
    </div>
  );
}
