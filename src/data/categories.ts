import type { Category } from "@/types";

export const categories: Category[] = [
  {
    categoryId: "spa",
    name: "اسپا",
    image: "/assets/img/top-categories-img1.jpg",
  },
  {
    categoryId: "nails",
    name: "ناخن",
    image: "/assets/img/top-categories-img2.jpg",
  },
  {
    categoryId: "perfume",
    name: "عطر",
    image: "/assets/img/top-categories-img3.jpg",
  },
  {
    categoryId: "makeup",
    name: "آرایش",
    image: "/assets/img/top-categories-img4.jpg",
  },
  {
    categoryId: "skin",
    name: "پوست",
    image: "/assets/img/top-categories-img5.jpg",
  },
  {
    categoryId: "hair",
    name: "مو",
    image: "/assets/img/top-categories-img6.jpg",
  },
];

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find((category) => category.categoryId === id);
};


