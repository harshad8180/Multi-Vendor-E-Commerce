package com.ecom.request;

import lombok.Data;

import java.util.List;

@Data
public class CreateProductRequest {
    private String title;
    private String description;
    private Double mrpPrice;
    private Double sellingPrice;
    private  String color;
    private List<String> images;

    private  String category1;
    private  String category2;
    private  String category3;

    private String sizes;
}
