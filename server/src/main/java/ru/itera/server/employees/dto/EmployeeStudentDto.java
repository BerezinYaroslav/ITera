package ru.itera.server.employees.dto;

import lombok.Builder;
import lombok.Data;

/**
 * @author yaroslavberezin
 * @created 05/05/2024
 * @project server
 */
@Data
@Builder
public class EmployeeStudentDto {
    private Long id;
    private String name;
    private String groupName;
    private Integer classesCount;
    private Integer visitedClassesCount;
    private Integer payedClassesCount;
}
