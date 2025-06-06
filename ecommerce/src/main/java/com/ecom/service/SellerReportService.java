package com.ecom.service;

import com.ecom.entity.Seller;
import com.ecom.entity.SellerReport;

public interface SellerReportService {
    SellerReport getSellerReport(Seller seller);
    SellerReport updateSellerReport(SellerReport sellerReport);
}
