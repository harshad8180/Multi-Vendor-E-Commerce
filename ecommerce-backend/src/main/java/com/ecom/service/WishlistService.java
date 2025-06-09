package com.ecom.service;


import com.ecom.entity.Product;
import com.ecom.entity.User;
import com.ecom.entity.Wishlist;

public interface WishlistService  {
    Wishlist createWishList(User user);
    Wishlist getWishlistByUserId(User user);
    Wishlist addProductToWishlist(User user, Product product);
}
