import { Avatar, Box, Button, IconButton, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { AddShoppingCart, FavoriteBorder, Storefront } from "@mui/icons-material";

const Navbar = () => {

  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <div>
      <Box>
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b ">
          <div className="flex items-center gap-2">
            <IconButton>
              <MenuIcon />
            </IconButton>
            <h1 className="logo cursor-pointer text-lg md:text-2xl text-[#0a3d62]">
              Ecommerce Bazaar
            </h1>
          </div>

          <div className="flex gap-1 md:gap-3 lg:gap-6 items-center">
            <IconButton>
              <SearchIcon />
            </IconButton>

            {
              true ?
                <Button className="flex items-center gap-2">
                  <Avatar
                  sx={{width:29, height:29}} src="https://i.pravatar.cc/150?img=3" />
                  <h1 className="font-semibold hidden lg:block">
                    E-Store
                    </h1>

                </Button>
                :
                <Button variant="contained">Login</Button>
            }

            <IconButton>
              <FavoriteBorder sx={{fontSize:29}} />
            </IconButton>

            <IconButton>
              <AddShoppingCart className="text-grey-700" sx={{fontSize:29}} />
            </IconButton>

            {isLarge &&< Button startIcon={<Storefront/>} variant='outlined'>
              Become Seller
            </Button>}
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Navbar;
