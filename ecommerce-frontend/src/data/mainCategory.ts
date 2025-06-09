export const mainCategory = [
  {
    name: "Men",
    categoryId: "men",
    level: 1,
    levelTwoCategory: [
      {
        name: "Topwear",
        categoryId: "men_topwear",
        parentCategoryId: "men",
        level: 2,
      },
      {
        name: "Bottomwear",
        categoryId: "men_bottomwear",
        parentCategoryId: "men",
        level: 2,
      },
      {
        name: "Innerwear & Sleepwear",
        categoryId: "men_innerwear_sleepwear",
        parentCategoryId: "men",
        level: 2,
      },
      {
        name: "Footwear",
        categoryId: "men_footwear",
        parentCategoryId: "men",
        level: 2,
      },
    ],
  },
  {
    name: "Women",
    categoryId: "women",
    level: 1,
    levelTwoCategory: [
      {
        name: "Ethnic Wear",
        categoryId: "women_ethnic",
        parentCategoryId: "women",
        level: 2,
      },
      {
        name: "Western Wear",
        categoryId: "women_western",
        parentCategoryId: "women",
        level: 2,
      },
      {
        name: "Lingerie & Sleepwear",
        categoryId: "women_innerwear_sleepwear",
        parentCategoryId: "women",
        level: 2,
      },
      {
        name: "Footwear",
        categoryId: "women_footwear",
        parentCategoryId: "women",
        level: 2,
      },
    ],
  },
  {
    name: "Home & Furniture",
    categoryId: "home_furniture",
    level: 1,
    levelTwoCategory: [
      {
        name: "Home Decor",
        categoryId: "home_decor",
        parentCategoryId: "home_furniture",
        level: 2,
      },
      {
        name: "Furniture",
        categoryId: "furniture",
        parentCategoryId: "home_furniture",
        level: 2,
      },
      {
        name: "Kitchen Essentials",
        categoryId: "kitchen",
        parentCategoryId: "home_furniture",
        level: 2,
      },
    ],
  },
  {
    name: "Electronics",
    categoryId: "electronics",
    level: 1,
    levelTwoCategory: [
      {
        name: "Mobiles",
        categoryId: "mobiles",
        parentCategoryId: "electronics",
        level: 2,
      },
      {
        name: "Laptops",
        categoryId: "laptops",
        parentCategoryId: "electronics",
        level: 2,
      },
      {
        name: "Home Appliances",
        categoryId: "home_appliances",
        parentCategoryId: "electronics",
        level: 2,
      },
    ],
  },
];
