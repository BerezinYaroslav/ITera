package ru.itera.server.students;

import ru.itera.server.students.dto.StudentCourseDto;
import ru.itera.server.students.dto.StudentDto;

import java.util.List;

/**
 * @author yaroslavberezin
 * @created 03/05/2024
 * @project server
 */
public interface StudentService {
    void add(Student student);

    List<Student> getAll();

    Student getById(Long id) throws Exception;

    List<StudentCourseDto> getStudentsCoursesDto(Long studentId) throws Exception;

    List<StudentDto> getStudentsDto() throws Exception;

    Student update(Student student);

    void delete(Long id) throws Exception;

    void deleteAll();
}
