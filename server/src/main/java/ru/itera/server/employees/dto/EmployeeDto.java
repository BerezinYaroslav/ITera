package ru.itera.server.employees.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

/**
 * @author yaroslavberezin
 * @created 04/05/2024
 * @project server
 */
@Data
@Builder
public class EmployeeDto {
    private Long id;
    private String name;
    private String role;
    private LocalDate creationDate;
    private Integer subordinatesCount;
}
