package ru.itera.server.students.dto;

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
public class StudentDto {
    private Long id;
    private String name;
    private LocalDate birthday;
    private Integer coursesCount;
    private Integer activeCoursesCount;
    private LocalDate creationDate;
    private Boolean hasDebt;
}
