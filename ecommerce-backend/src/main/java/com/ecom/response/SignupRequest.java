package com.ecom.response;

import lombok.Data;

@Data
public class SignupRequest {
    private String email;
    private String fullname;
    private String otp;
}
