package com.ecom.controller;

import com.ecom.entity.Cart;
import com.ecom.entity.Coupon;
import com.ecom.entity.User;
import com.ecom.service.CartService;
import com.ecom.service.CouponService;
import com.ecom.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/coupon")
public class AdminCouponController {

    private final CouponService couponService;
    private final UserService userService;
    private final CartService cartService;

    @PostMapping("/apply")
    public ResponseEntity<Cart> applyCoupon(
            @RequestParam String apply,
            @RequestParam String code,
            @RequestParam double orderValue,
            @RequestHeader ("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Cart cart;

        if (apply.equals("true")){
            cart = couponService.applyCoupon(code,orderValue, user);
        }
        else {
            cart=couponService.removeCoupon(code,user);
        }

        return ResponseEntity.ok(cart);
    }

    // admin operations

    @PostMapping("/admin/create")
    public ResponseEntity<Coupon> createCoupon (@RequestBody Coupon coupon){
        Coupon createCoupon = couponService.createCoupon(coupon);
        return ResponseEntity.ok(createCoupon);
    }

    @DeleteMapping("/admin/delete/{id}")
    public ResponseEntity<?> deleteCoupon(@PathVariable Long id) throws Exception {
        couponService.deleteCoupon(id);

        return ResponseEntity.ok("coupon deleted successfully");
    }

    @GetMapping("/admin/all")
    public ResponseEntity<List> getAllCoupons(){
        List<Coupon> coupons = couponService.findAllCoupons();

        return ResponseEntity.ok(coupons);
    }

}
