package com.hotel.lodgingCommander.model.hotel;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class HotelResponseModel {
    private Long id;
    private String hotelName;
    private int grade;
    private String detail;

    private List<String> imgPath;

    private int minPrice;

    private int reviewCount;

    private String category;

    private Map<String, Boolean> facilities;
}
