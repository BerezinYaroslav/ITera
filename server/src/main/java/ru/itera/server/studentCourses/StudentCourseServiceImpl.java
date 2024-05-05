package ru.itera.server.studentCourses;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.itera.server.courses.CourseService;
import ru.itera.server.employees.EmployeeService;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

/**
 * @author yaroslavberezin
 * @created 03/05/2024
 * @project server
 */
@Service
@RequiredArgsConstructor
public class StudentCourseServiceImpl implements StudentCourseService {
    private final StudentCourseRepository studentCourseRepository;
    private final CourseService courseService;
    private final EmployeeService employeeService;

    @Override
    public void add(StudentCourse studentCourse) {
        studentCourse.setCreatorId(1L);
        studentCourse.setCreationDate(LocalDate.now());
        studentCourse.setLastUpdateDate(LocalDate.now());
        studentCourse.setIsDeleted(false);
        studentCourseRepository.save(studentCourse);
    }

    @Override
    public List<StudentCourse> getAll() {
        return studentCourseRepository.findAll();
    }

    @Override
    public StudentCourse getById(Long id) throws Exception {
        Optional<StudentCourse> optionalStudentCourse = studentCourseRepository.findById(id);

        if (optionalStudentCourse.isPresent()) {
            return optionalStudentCourse.get();
        } else {
            throw new Exception("There is no a studentCourse with id " + id);
        }
    }

    @Override
    public StudentCourse update(StudentCourse studentCourse) {
        studentCourse.setLastUpdateDate(LocalDate.now());
        return studentCourseRepository.save(studentCourse);
    }

    @Override
    public void delete(Long id) throws Exception {
        Optional<StudentCourse> optionalStudentCourse = studentCourseRepository.findById(id);

        if (optionalStudentCourse.isPresent()) {
            studentCourseRepository.deleteById(id);
        } else {
            throw new Exception("There is no a studentCourse with id " + id);
        }
    }

    @Override
    public void deleteAll() {
        studentCourseRepository.deleteAll();
    }
}
