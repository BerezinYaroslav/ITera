package ru.itera.server.employees;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

/**
 * @author yaroslavberezin
 * @created 16/04/2024
 * @project server
 */
@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "employee")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    @NotEmpty
    private String name;

    @Column(name = "role_id")
    private Long roleId;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "birthday")
    private LocalDate birthday;

    @Column(name = "office")
    private String office;

    @Column(name = "education")
    private String education;

    @Column(name = "university_name")
    private String universityName;

    @Column(name = "speciality")
    private String speciality;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "extra_phone_number")
    private String extraPhoneNumber;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "living_state")
    private String livingState;

    @Column(name = "living_city")
    private String livingCity;

    @Column(name = "living_address")
    private String livingAddress;

    @Column(name = "registration_state")
    private String registrationState;

    @Column(name = "registration_city")
    private String registrationCity;

    @Column(name = "registration_address")
    private String registrationAddress;

    @Column(name = "creation_date")
    private LocalDate creationDate;

    @Column(name = "last_update_date")
    private LocalDate lastUpdateDate;

    @Column(name = "creator_id")
    private Long creatorId;

    @Column(name = "is_deleted")
    private Boolean isDeleted;
}
