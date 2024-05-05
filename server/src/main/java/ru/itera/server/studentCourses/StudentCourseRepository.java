package ru.itera.server.studentCourses;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * @author yaroslavberezin
 * @created 03/05/2024
 * @project server
 */
public interface StudentCourseRepository extends JpaRepository<StudentCourse, Long> {
    @Query(value = "select * " +
            "from student_course s where s.student_id = ?1",
            nativeQuery = true)
    List<StudentCourse> getStudentsCoursesDto(Long studentId);

    @Query(value = "select * from " +
            "student_course sc " +
            "where sc.teacher_id = ?1 or sc.mpp_id = ?1 or sc.curator_id = ?1",
            nativeQuery = true)
    List<StudentCourse> getEmployeeStudents(Long id);
}
