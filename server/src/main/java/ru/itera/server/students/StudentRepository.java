package ru.itera.server.students;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import ru.itera.server.studentCourses.StudentCourse;

import java.util.List;

/**
 * @author yaroslavberezin
 * @created 03/05/2024
 * @project server
 */
public interface StudentRepository extends JpaRepository<Student, Long> {
}