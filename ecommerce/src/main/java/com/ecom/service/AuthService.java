package com.ecom.service;

import com.ecom.response.SignupRequest;

public interface AuthService {
    String createUser(SignupRequest req);
}
