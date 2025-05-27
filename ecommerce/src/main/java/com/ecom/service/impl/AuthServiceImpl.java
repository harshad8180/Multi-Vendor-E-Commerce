package com.ecom.service.impl;

import com.ecom.domain.USER_ROLE;
import com.ecom.entity.User;
import com.ecom.repository.UserRepository;
import com.ecom.response.SignupRequest;
import com.ecom.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;


    @Override
    public String createUser(SignupRequest req) {

        User user = userRepository.findByEmail(req.getEmail());

        if(user == null){
            User createdUser = new User();
            createdUser.setEmail(req.getEmail());
            createdUser.setFullName(req.getFullname());
            createdUser.setRole(USER_ROLE.ROLE_CUSTOMER);
            createdUser.setMobile("9191919191");
            createdUser.setPassword(passwordEncoder.encode(req.getOtp()));

            user=userRepository.save(createdUser);
        }
        return "";
    }
}
