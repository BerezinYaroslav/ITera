package ru.itera.server.studentCourses;

import java.util.List;

/**
 * @author yaroslavberezin
 * @created 03/05/2024
 * @project server
 */
public interface StudentCourseService {
    void add(StudentCourse studentCourse);

    List<StudentCourse> getAll();

    StudentCourse getById(Long id) throws Exception;

    StudentCourse update(StudentCourse studentCourse);

    void delete(Long id) throws Exception;

    void deleteAll();
}
