package com.ecom.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;


import io.jsonwebtoken.Jwt;


import javax.crypto.SecretKey;

import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Service
public class JwtProvider {
    SecretKey key = Keys.hmacShaKeyFor(JWT_CONSTANT.SECRET_KEY.getBytes());

    public String generateToken(Authentication auth){
        Collection<? extends GrantedAuthority> authorities = auth.getAuthorities();
        String roles = populatedAuthorities(authorities);

        return  Jwts.builder()
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime()+ 20 * 60 * 1000)) // 2 min
                .claim("email", auth.getName())
                .claim("authorities", roles)
                .signWith(key)
                .compact();


    }

    public String getEmailFromJwtToken(String jwt) {
        jwt = jwt.substring(7); // remove "Bearer "

        Jwt<?, Claims> parsedJwt = Jwts.parser()
                .verifyWith(key)
                .build()
                .parseSignedClaims(jwt);

        Claims claims = parsedJwt.getPayload();

        return String.valueOf(claims.get("email"));
    }

    private String populatedAuthorities(Collection<? extends GrantedAuthority> authorities) {
        Set<String> auths = new HashSet<>();

        for (GrantedAuthority authority:authorities){
            auths.add(authority.getAuthority());
        }

        return String.join(",",auths);
    }

}
