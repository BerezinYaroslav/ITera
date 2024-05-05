package ru.itera.server.students.dto;

import lombok.*;

import java.time.LocalDate;

/**
 * @author yaroslavberezin
 * @created 04/05/2024
 * @project server
 */
@Data
@Builder
public class StudentCourseDto {
    private Long id;
    private String courseName;
    private String teacherName;
    private Integer visitedClassesCount;
    private Integer classesCount;
    private Integer payedClassesCount;
    private LocalDate creation_date;
    private String status;
}
