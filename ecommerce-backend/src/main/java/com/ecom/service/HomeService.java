package com.ecom.service;

import com.ecom.entity.Home;
import com.ecom.entity.HomeCategory;

import java.util.List;

public interface HomeService {
    public Home createHomePageData(List<HomeCategory> allCategories);
}
