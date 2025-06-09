import { Avatar, Box, Button, IconButton, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { AddShoppingCart, FavoriteBorder, Storefront } from "@mui/icons-material";
import CategorySheet from "./CategorySheet";
import { mainCategory } from "../../../data/catogory/mainCategory";

const Navbar = () => {

  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  const [selectedCategory, setSelectedCategory] = useState("men");

  const [showCategorySheet, setShowCategorySheet] = useState(false);

  return (
    <div>
      <Box className="bg-white shadow-lg left-0 top-0 right-0 sticky" sx={{ zIndex: 2 }}>
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b ">
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              {!isLarge && <IconButton>
                <MenuIcon />
              </IconButton>}
              <h1 className="logo cursor-pointer text-lg md:text-2xl text-primary-color">
                Ecommerce Bazaar
              </h1>
            </div>

            <ul className="flex items-center gap-2 md:gap-3 lg:gap-6 text-sm md:text-base lg:text-lg font-semibold text-gray-800">

              {
                mainCategory.map(
                  (item) => <li key={item.categoryId}
                    onMouseLeave={() => {
                      setShowCategorySheet(false)
                    }}
                    onMouseOver={() => {
                      setSelectedCategory(item.categoryId);
                      setShowCategorySheet(true);
                    }}
                    className="mainCategory hover:text-primary-color hover:border-b-2 h-[70px] px-4 border-primary-color flex items-center">{item.name}</li>)
              }

            </ul>

          </div>

          <div className="flex gap-1 md:gap-3 lg:gap-6 items-center">
            <IconButton>
              <SearchIcon />
            </IconButton>

            {
              true ?
                <Button className="flex items-center gap-2">
                  <Avatar
                    sx={{ width: 29, height: 29 }} src="https://i.pravatar.cc/150?img=3" />
                  <h1 className="font-semibold hidden lg:block">
                    E-Store
                  </h1>

                </Button>
                :
                <Button variant="contained">Login</Button>
            }

            <IconButton>
              <FavoriteBorder sx={{ fontSize: 29 }} />
            </IconButton>

            <IconButton>
              <AddShoppingCart className="text-gray-700" sx={{ fontSize: 29 }} />
            </IconButton>

            {isLarge && < Button startIcon={<Storefront />} variant='outlined'>
              Become Seller
            </Button>}
          </div>
        </div>

        {showCategorySheet && <div
          onMouseLeave={() => setShowCategorySheet(false)}
          onMouseEnter={() => setShowCategorySheet(true)}
          className="categorySheet absolute top-[4.41rem left-20 right-20 border ">
          <CategorySheet selectedCategory={selectedCategory} />
        </div>}
      </Box>
    </div>
  );
};

export default Navbar;
