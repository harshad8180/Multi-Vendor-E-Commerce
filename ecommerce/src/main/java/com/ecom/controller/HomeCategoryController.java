package com.ecom.controller;

import com.ecom.domain.AccountStatus;
import com.ecom.entity.Home;
import com.ecom.entity.HomeCategory;
import com.ecom.entity.Seller;
import com.ecom.service.HomeCategoryService;
import com.ecom.service.HomeService;
import com.ecom.service.SellerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor

public class HomeCategoryController {
    private final HomeCategoryService homeCategoryService;
    private final HomeService homeService;



//    @GetMapping("/home-page")
//    public ResponseEntity<Home> getHomePageDate(){
//        Home homePageData = homeService.getHomePageData();
//        return new ResponseEntity<>(homePageData, HttpStatus.ACCEPTED);
//        return null;
//    }

    @PostMapping("/admin/home/categories")
    public  ResponseEntity<Home> createHomeCategories(@RequestBody List<HomeCategory> homeCategories){
        List<HomeCategory> categories = homeCategoryService.createCategories(homeCategories);

        Home home = homeService.createHomePageData(categories);

        return new ResponseEntity<>(home, HttpStatus.ACCEPTED);
    }

    @GetMapping("home-category")
    public ResponseEntity<List<HomeCategory>> getHomeCategory(){
        List<HomeCategory> categories = homeCategoryService.getAllHomeCategories();

        return ResponseEntity.ok(categories);
    }

    @PatchMapping("/admin/home-category/{id}")
    public ResponseEntity<HomeCategory> updateHomeCategory(
            @PathVariable Long id, @RequestBody HomeCategory homeCategory
    ) throws Exception {
        HomeCategory updateCategory = homeCategoryService.updateHomeCategory(homeCategory, id);

        return ResponseEntity.ok(updateCategory);
    }



}
