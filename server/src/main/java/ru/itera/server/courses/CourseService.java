package ru.itera.server.courses;

import ru.itera.server.courses.dto.CourseDto;

import java.util.List;

/**
 * @author yaroslavberezin
 * @created 03/05/2024
 * @project server
 */
public interface CourseService {
    void add(Course course);

    List<Course> getAll();

    Course getById(Long id) throws Exception;

    List<CourseDto> getCoursesDto();

    Course update(Course course);

    void delete(Long id) throws Exception;

    void deleteAll();
}
