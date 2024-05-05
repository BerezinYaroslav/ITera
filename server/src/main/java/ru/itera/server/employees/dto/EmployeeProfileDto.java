package ru.itera.server.employees.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

/**
 * @author yaroslavberezin
 * @created 05/05/2024
 * @project server
 */
@Data
@Builder
public class EmployeeProfileDto {
    private Long id;
    private String name;
    private String role;
    private LocalDate creationDate;
    private Integer subordinatesCount;
    private String fullName;
    private String office;
    private String education;
    private String universityName;
    private String speciality;
    private String livingState;
    private String livingCity;
    private String livingAddress;
    private String registrationState;
    private String registrationCity;
    private String registrationAddress;
    private String phoneNumber;
    private String extraPhoneNumber;
    private String email;
}
