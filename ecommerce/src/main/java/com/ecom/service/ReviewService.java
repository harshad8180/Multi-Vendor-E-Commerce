package com.ecom.service;

import com.ecom.entity.Product;
import com.ecom.entity.Review;
import com.ecom.entity.User;
import com.ecom.request.CreateReviewRequest;

import java.util.List;

public interface ReviewService {
    Review createReview(CreateReviewRequest req, User user, Product product);

    List<Review> getReviewByProductId (Long productId);

    Review updateReview (Long reviewId, String reviewText, double rating, Long userId) throws Exception;

    void deleteReview (Long reviewId, Long userId) throws Exception;

    Review getReviewById (Long reviewId) throws Exception;
}
