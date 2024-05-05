package ru.itera.server.courses.dto;

import lombok.Builder;
import lombok.Data;

/**
 * @author yaroslavberezin
 * @created 05/05/2024
 * @project server
 */
@Data
@Builder
public class CourseDto {
    private Long id;
    private String name;
    private Integer classesCount;
    private String presentationUrl;
    private String methodologyUrl;
    private String exercisesUrl;

}

