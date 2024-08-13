package com.hotel.lodgingCommander.dto.room;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RoomResponseDTO {
    private Long id;
    private String roomName;
    private int maxPeople;
    private int price;
    private String detail;
    private boolean reservable;
    private String imgPath;

    private String hotelName;
}
