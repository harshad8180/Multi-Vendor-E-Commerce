package com.ecom.service;

import com.ecom.entity.Cart;
import com.ecom.entity.CartItem;
import com.ecom.entity.Product;
import com.ecom.entity.User;

public interface CartService {
    public CartItem addCartItem(User user, Product product, String size, int quantity);

    public Cart findUserCart(User user);
}
