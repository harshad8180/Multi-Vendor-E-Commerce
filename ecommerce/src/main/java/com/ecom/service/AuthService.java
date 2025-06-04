package com.ecom.service;

import com.ecom.domain.USER_ROLE;
import com.ecom.request.LoginRequest;
import com.ecom.response.AuthResponse;
import com.ecom.response.SignupRequest;

public interface AuthService {
    String createUser(SignupRequest req) throws Exception;
    void sentLoginOtp(String email, USER_ROLE role) throws Exception;

    AuthResponse signing(LoginRequest req) throws Exception;
}
