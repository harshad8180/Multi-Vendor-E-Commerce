package com.ecom.entity;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BusinessDetails {
    private String businessName;
    private String businessEmail;
    private String businessMobile;
    private String businessddress;
    private String logo;
    private String banner;
}
